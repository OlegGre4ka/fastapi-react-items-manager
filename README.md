# Fullstack Items Manager 🚀

A professional full-stack application for managing items, built with the latest technologies for high performance and scalability.

## 🛠 Tech Stack

### Backend
- **Framework:** FastAPI
- **Language:** Python 3.10+
- **Validation:** Pydantic v2
- **Server:** FastAPI CLI (dev mode)

### Frontend
- **Library:** React 19.2+ (Vite)
- **Language:** TypeScript
- **State Management:** Zustand
- **UI Components:** Ant Design (Antd)
- **Styling:** Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10 or higher
- Node.js (LTS version) and npm

### Setup Instructions

#### 1. Backend Setup
Navigate to the `backend` directory and set up your environment:

1. `cd backend`
2. `python -m venv venv`
3. Activate venv (Windows: `venv\Scripts\activate` | Mac: `source venv/bin/activate`)
4. `pip install -r requirements.txt`
5. `pip install "fastapi[standard]"`
6. `fastapi dev main.py`

**API Status:** The API will be available at `http://127.0.0.1:8000`

#### 2. Frontend Setup
Open a new terminal window and navigate to the `frontend` directory:

1. `cd frontend`
2. `npm install`
3. `npm run dev`

**App Status:** The application will be available at `http://localhost:5173`

---

## 📂 Project Structure
This is a Monorepo setup:
- `backend/` - Python FastAPI server, schemas, and logic.
- `frontend/` - React 19 application with Zustand and Ant Design.
- `.gitignore` - Root-level configuration to keep the repository clean.

---

## 📝 Key Features
- **React 19 Support:** Utilizing the latest React features and improvements.
- **Global State:** Clean data flow managed by Zustand.
- **Type Safety:** Strict TypeScript and Pydantic models.
- **Modern UI:** Responsive design with Ant Design 5.x.