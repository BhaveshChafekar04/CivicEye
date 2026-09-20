import React, { useState } from 'react';
import { CivicIssue, ToastMessage } from './types';
import { INITIAL_ISSUES } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { AIIntelligence } from './components/AIIntelligence';
import { LiveCityMap } from './components/LiveCityMap';
import { CitizenExperience } from './components/CitizenExperience';
import { AuthorityDashboard } from './components/AuthorityDashboard';
import { TransparencyTimeline } from './components/TransparencyTimeline';
import { CommunityFeed } from './components/CommunityFeed';
import { AnalyticsSection } from './components/AnalyticsSection';
import { SecuritySection } from './components/SecuritySection';
import { AboutSection } from './components/AboutSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ui/Toast';
import { ReportIssueModal } from './components/modals/ReportIssueModal';
import { RequestDemoModal } from './components/modals/RequestDemoModal';
import { IssueDetailModal } from './components/modals/IssueDetailModal';
import { createIssue, fetchIssues } from './lib/api';

export default function App() {
  const [issues, setIssues] = useState<CivicIssue[]>(INITIAL_ISSUES);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeView, setActiveView] = useState<'citizen' | 'authority'>('citizen');

  React.useEffect(() => {
    fetchIssues()
      .then((backendIssues) => {
        setIssues(backendIssues);
      })
      .catch(() => {
        showToast('Backend unavailable', 'Showing demo reports until the FastAPI service is running.', 'warning');
      });
  }, []);

  // Modals state
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [requestDemoModalOpen, setRequestDemoModalOpen] = useState(false);
  const [selectedIssueModal, setSelectedIssueModal] = useState<CivicIssue | null>(null);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddNewIssue = async (newIssueData: Partial<CivicIssue>) => {
    const created: CivicIssue = {
      id: `issue-${Date.now()}`,
      ticketNumber: newIssueData.ticketNumber || 'CVE-9999',
      title: newIssueData.title || 'Reported Civic Problem',
      description: newIssueData.description || '',
      category: newIssueData.category || 'Roads',
      severity: newIssueData.severity || 'HIGH',
      priorityScore: newIssueData.priorityScore || 85,
      status: 'Reported',
      department: newIssueData.department || 'Public Works Dept',
      locationName: newIssueData.locationName || 'Central District',
      district: newIssueData.district || 'Central Zone',
      lat: newIssueData.lat || 20.9288,
      lng: newIssueData.lng || 77.7540,
      imageUrl: newIssueData.imageUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      upvotes: 1,
      hasUpvoted: true,
      reportedAt: 'Just now',
      affectedPeople: newIssueData.affectedPeople || 100,
      aiConfidence: newIssueData.aiConfidence || 96,
      duplicateCount: newIssueData.duplicateCount || 0,
      timeline: newIssueData.timeline || [],
      comments: []
    };

    try {
      const savedIssue = await createIssue(created);
      setIssues((prev) => [savedIssue, ...prev]);
    } catch {
      setIssues((prev) => [created, ...prev]);
      showToast('Saved locally', 'The backend is unavailable, so this report is only visible in this session.', 'warning');
    }
  };

  const handleUpvoteIssue = (issueId: string) => {
    setIssues((prev) =>
      prev.map((iss) => {
        if (iss.id === issueId) {
          const updatedHasUpvoted = !iss.hasUpvoted;
          const updatedUpvotes = updatedHasUpvoted ? iss.upvotes + 1 : Math.max(0, iss.upvotes - 1);

          if (updatedHasUpvoted) {
            showToast('Report Upvoted', `You flagged ticket ${iss.ticketNumber} as affecting you.`, 'success');
          }

          return {
            ...iss,
            hasUpvoted: updatedHasUpvoted,
            upvotes: updatedUpvotes
          };
        }
        return iss;
      })
    );
  };

  const handleAddComment = (issueId: string, text: string) => {
    setIssues((prev) =>
      prev.map((iss) => {
        if (iss.id === issueId) {
          const newComment = {
            id: `comm-${Date.now()}`,
            user: activeView === 'authority' ? 'Municipal Supervisor' : 'Citizen Member',
            role: (activeView === 'authority' ? 'Authority' : 'Citizen') as 'Authority' | 'Citizen',
            text,
            time: 'Just now'
          };
          return {
            ...iss,
            comments: [...iss.comments, newComment]
          };
        }
        return iss;
      })
    );

    // Keep selected modal issue synced
    if (selectedIssueModal && selectedIssueModal.id === issueId) {
      setSelectedIssueModal((prev) =>
        prev
          ? {
              ...prev,
              comments: [
                ...prev.comments,
                {
                  id: `comm-${Date.now()}`,
                  user: activeView === 'authority' ? 'Municipal Supervisor' : 'Citizen Member',
                  role: (activeView === 'authority' ? 'Authority' : 'Citizen') as 'Authority' | 'Citizen',
                  text,
                  time: 'Just now'
                }
              ]
            }
          : null
      );
    }

    showToast('Comment Posted', 'Your message was added to the public thread.', 'info');
  };

  return (
    <div className="civic-app min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased">
      {/* Sticky Header */}
      <Navbar
        onOpenReportModal={() => setReportModalOpen(true)}
        onOpenRequestDemoModal={() => setRequestDemoModalOpen(true)}
        activeView={activeView}
        onToggleView={setActiveView}
        onNavigate={handleNavigate}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenReportModal={() => setReportModalOpen(true)}
          onNavigate={handleNavigate}
        />

        <TrustStats />

        <ProblemSection />

        <HowItWorks />

        <AIIntelligence />

        <LiveCityMap
          issues={issues}
          onSelectIssue={(issue) => setSelectedIssueModal(issue)}
          onUpvote={handleUpvoteIssue}
        />

        <CitizenExperience />

        <AuthorityDashboard
          onOpenRequestDemoModal={() => setRequestDemoModalOpen(true)}
        />

        <TransparencyTimeline />

        <CommunityFeed
          issues={issues}
          onSelectIssue={(issue) => setSelectedIssueModal(issue)}
          onUpvote={handleUpvoteIssue}
          onOpenReportModal={() => setReportModalOpen(true)}
        />

        <AnalyticsSection />

        <SecuritySection />

        <AboutSection />

        <FinalCTA
          onOpenReportModal={() => setReportModalOpen(true)}
          onOpenRequestDemoModal={() => setRequestDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReportModal={() => setReportModalOpen(true)}
      />

      {/* Global Modals */}
      <ReportIssueModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onSubmitNewIssue={handleAddNewIssue}
        onShowToast={showToast}
      />

      <RequestDemoModal
        isOpen={requestDemoModalOpen}
        onClose={() => setRequestDemoModalOpen(false)}
        onShowToast={showToast}
      />

      <IssueDetailModal
        issue={selectedIssueModal}
        onClose={() => setSelectedIssueModal(null)}
        onUpvote={handleUpvoteIssue}
        onAddComment={handleAddComment}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
