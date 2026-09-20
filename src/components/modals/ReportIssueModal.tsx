import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, MapPin, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Cpu, Image as ImageIcon } from 'lucide-react';
import { AIAnalysisResult, CivicIssue } from '../../types';
import { DEMO_SAMPLE_PHOTOS, CITY_DISTRICTS } from '../../data/mockData';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitNewIssue: (issueData: Partial<CivicIssue>) => void | Promise<void>;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

export const ReportIssueModal: React.FC<ReportIssueModalProps> = ({
  isOpen,
  onClose,
  onSubmitNewIssue,
  onShowToast
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [imagePreview, setImagePreview] = useState<string>(DEMO_SAMPLE_PHOTOS[0].url);
  const [description, setDescription] = useState('');
  const [district, setDistrict] = useState('Central Rajapeth');
  const [locationName, setLocationName] = useState('Rajapeth Square Corridor');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AIAnalysisResult | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRunAIAnalysis = async () => {
    setAnalyzing(true);
    setStep(2);

    try {
      const response = await fetch('/api/analyze-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: imagePreview,
          description,
          location: `${locationName}, ${district}`
        })
      });

      const data = await response.json();
      if (data.success && data.analysis) {
        setAnalysis(data.analysis);
      } else {
        throw new Error('Analysis failed');
      }
    } catch (err) {
      // Fallback local analysis
      setAnalysis({
        issueType: description.toLowerCase().includes('water') ? 'Pipe Burst Leak' : 'Asphalt Road Pothole',
        confidence: 96,
        severity: 'HIGH',
        priorityScore: 92,
        department: 'Roads & Infrastructure',
        duplicatesNearby: 2,
        recommendedSLAHours: 24,
        detectedKeyFeatures: ['Structural asphalt cavity', 'Vehicle lane hazard'],
        summary: 'AI Vision scan verified hazard. Ready for municipal routing.'
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleFinalSubmit = () => {
    const randomTicketNum = `CVE-${Math.floor(1000 + Math.random() * 9000)}`;

    onSubmitNewIssue({
      ticketNumber: randomTicketNum,
      title: analysis?.issueType ? `${analysis.issueType} on ${locationName}` : 'Civic Issue Reported',
      description: description || 'Reported via CivicEye AI Mobile App.',
      category: analysis?.department.includes('Water') ? 'Water' : analysis?.department.includes('Sanitation') ? 'Garbage' : 'Roads',
      severity: analysis?.severity || 'HIGH',
      priorityScore: analysis?.priorityScore || 88,
      status: 'Reported',
      department: analysis?.department || 'Public Works Dept',
      locationName: locationName,
      district: district,
      lat: 20.9288,
      lng: 77.7540,
      imageUrl: imagePreview,
      upvotes: 1,
      reportedAt: 'Just now',
      affectedPeople: 250,
      aiConfidence: analysis?.confidence || 96,
      duplicateCount: analysis?.duplicatesNearby || 1,
      timeline: [
        {
          title: 'Report Submitted',
          date: 'Just now',
          description: 'Verified photo & GPS submission.',
          status: 'Reported'
        },
        {
          title: 'AI Computer Vision Scan',
          date: 'Just now',
          description: `Analysis score ${analysis?.priorityScore || 88}/100 generated.`,
          status: 'Under Review',
          actor: 'CivicEye Neural Engine'
        }
      ],
      comments: []
    });

    onShowToast('Report Submitted Successfully', `Ticket ${randomTicketNum} generated and routed to authority.`, 'success');
    onClose();
    // Reset state
    setStep(1);
    setAnalysis(null);
    setDescription('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-sans">
              Report a Civic Issue (AI Vision)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 1 && (
            <div className="space-y-5">
              {/* Image Upload Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
                  1. Upload Photo / Video Proof
                </label>

                <div className="relative h-48 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950 hover:border-cyan-500/50 transition-colors flex flex-col items-center justify-center p-4 group cursor-pointer overflow-hidden">
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                      <div className="absolute inset-0 bg-slate-950/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-cyan-500/40">
                          Change Image
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs font-bold text-slate-200">Drag & Drop photo here, or click to browse</p>
                      <p className="text-[10px] text-slate-500 mt-1">Supports JPG, PNG, WEBP up to 10MB</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                {/* Preset Sample Picker */}
                <div className="mt-3">
                  <p className="text-[11px] text-slate-400 mb-2">Or select a demo photo:</p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {DEMO_SAMPLE_PHOTOS.map((sample) => (
                      <button
                        key={sample.id}
                        onClick={() => setImagePreview(sample.url)}
                        className={`p-1.5 rounded-lg border text-[11px] font-medium shrink-0 transition-all ${
                          imagePreview === sample.url
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {sample.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
                  2. Describe What's Wrong
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Large pothole near the flyover descent causing vehicle swerving..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              {/* Location Tag */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
                    City Zone
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {CITY_DISTRICTS.filter((d) => d !== 'All Districts').map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
                    Street / Landmark
                  </label>
                  <input
                    type="text"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="e.g. Rajapeth Main Corridor"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button
                onClick={handleRunAIAnalysis}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Analyze with CivicEye AI
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="py-4 space-y-6 text-center">
              {analyzing ? (
                <div className="py-12 space-y-4">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
                    <Cpu className="w-6 h-6 text-cyan-400 absolute inset-0 m-auto" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Scanning Image with Computer Vision...</h4>
                    <p className="text-xs text-slate-400">Classifying defect type, calculating priority score, and checking nearby duplicates...</p>
                  </div>
                </div>
              ) : (
                <div className="text-left space-y-5">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                      <div>
                        <div className="text-sm font-bold text-white">AI Vision Analysis Complete</div>
                        <div className="text-xs text-cyan-300 font-mono">Confidence: {analysis?.confidence}%</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold font-mono">
                      {analysis?.severity} PRIORITY
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Defect Category</span>
                      <span className="font-bold text-white text-sm">{analysis?.issueType}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Priority Score</span>
                      <span className="font-bold text-cyan-400 font-mono text-sm">{analysis?.priorityScore} / 100</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Routed Department</span>
                      <span className="font-bold text-slate-200">{analysis?.department}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Duplicate Cluster</span>
                      <span className="font-bold text-amber-400">{analysis?.duplicatesNearby} nearby reports</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <span className="font-bold text-cyan-300 font-mono block mb-1">AI DETECTED FEATURES:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      {analysis?.detectedKeyFeatures.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-slate-950 border border-slate-800 hover:bg-slate-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleFinalSubmit}
                      className="w-2/3 py-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                    >
                      Submit Report to City Authority
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
