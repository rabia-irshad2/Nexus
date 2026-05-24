# Nexus – Investor & Entrepreneur Collaboration Platform

Welcome to **Nexus**, a full-stack platform designed to bridge the gap between investors and entrepreneurs. This repository contains the complete codebase for the platform, featuring a robust Node.js/Express backend, a local MongoDB database integration, and a dynamic React frontend built with Vite.

---

## 🚀 Live Demo & Presentation Links

As part of the **Week 1 – Setup & Core Backend Foundations** milestones, the local environment has been securely mapped over a global network using active secure tunneling. 

* **Live Frontend Link:** [https://f5chktnn-5173.inc1.devtunnels.ms/](https://f5chktnn-5173.inc1.devtunnels.ms/)
* **Live Backend API Link:** [https://f5chktnn-5000.inc1.devtunnels.ms/](https://f5chktnn-5000.inc1.devtunnels.ms/)

> 💡 **Note for Reviewers:** The live URLs are actively served directly from the local development workspace environment via VS Code secure Dev Tunnels. The local database and backend server instances must be active on the host machine to accept live requests.

---

## 📅 Week 1 Accomplishments & Documentation

### 🏁 Milestone 1: Environment Setup & Full-Stack Architecture
- **Dual-Folder Structure:** Organized the workspace into a scalable layout splitting the client interface (`/client`) and backend business logic (`/server`).
- **Database Engine:** Established local data persistence layers by configuring Mongoose connections pointing directly to a local MongoDB cluster environment (`mongodb://127.0.0.1:27017/nexus_db`).
- **Network Tunneling:** Successfully implemented multi-port local port forwarding (Ports `5173` and `5000`) configured to public visibility to enable remote execution tests.

### 🔒 Milestone 2: User Authentication & Security Foundations
- **Secure API Endpoints:** Developed functional, production-ready backend routing modules for user data submission handles (`/api/auth/register` and `/api/auth/login`).
- **Data Encryption:** Integrated cryptographic salting and password hashing protocols using `bcryptjs` to encrypt client profiles securely before committing transactions to the collection rows.
- **Session Tokens:** Configured structured stateless authorization handling using `jsonwebtoken` (JWT) strings passed back to client instances on verified authorization sweeps.
- **Repository Isolation:** Integrated global `.gitignore` tracking boundaries to prevent accidental tracking leaks of environment credential files (`.env`) or heavy core structural directories (`node_modules`).

---

## 📁 Repository Structure

```text
NEXUS/
├── client/                 # React + Vite Frontend Application
│   ├── src/
│   │   ├── assets/         # App logos and images
│   │   ├── App.css         # Main interface styling layout
│   │   ├── App.jsx         # Authentication form and connection logic
│   │   └── main.jsx        # App mounting injection point
│   ├── package.json        # Frontend project dependencies
│   └── vite.config.js      # Vite compilation configs
│
├── server/                 # Node.js + Express Backend Engine
│   ├── config/             # Database connection setup (db.js)
│   ├── controllers/        # Logical controllers for authentication routes
│   ├── middleware/         # Session guards and token validation checks
│   ├── models/             # Schema definitions for MongoDB storage collections (User.js)
│   ├── routes/             # Structural network routing points (authRoutes.js)
│   ├── .env                # Private environmental variables (Hidden locally)
│   ├── server.js           # Server initializer and main listening hook
│   └── package.json        # Backend project dependencies
│
├── .gitignore              # Global git tracking blocking configuration rules
└── README.md               # Project documentation guide