# CivicEye API

## Local development

From the `backend` directory:

```powershell
.\venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --port 8000
```

The API uses a local SQLite database by default and creates `civiceye.db` on startup. Set `DATABASE_URL` in `.env` to use PostgreSQL.

## Endpoints

- `GET /health` checks service availability.
- `GET /api/issues/` lists reports.
- `POST /api/issues/` creates a report.
- `GET /docs` opens the FastAPI documentation.

The React frontend reads `VITE_BACKEND_URL` and defaults to `http://localhost:8000`.
