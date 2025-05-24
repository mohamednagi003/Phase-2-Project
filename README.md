# MF Supplements - Online Supplement Store 💪

Welcome to the **MF Supplements** web application — a full-stack e-commerce platform built for selling nutritional and workout supplements in Egypt. The platform allows users to browse, view, and purchase products with modern UI and a functional cart system.

---

## 🌐 Live Preview

Currently runs on `localhost` (development mode). Can be deployed using platforms like Vercel (frontend) and Render or Railway (backend + DB).

---

## 📦 Features

- 🏷️ Product Categories: Protein, Creatine, Pre-Workout, Vitamins, Accessories
- 🛍️ Dynamic product listing with prices, images & details
- 🛒 Add to Cart with quantity tracking
- 🔍 Search products
- 📦 Checkout interface
- 📈 Backend admin support (extendable)
- ⚙️ Built using modular and scalable codebase

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- Axios
- Bootstrap 5
- React Router

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose)

**Database**:
- MongoDB (Local or Cloud via MongoDB Atlas)

---

## 🧰 Installation Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/mohamednagi003/Phase-2-Project.git
cd Phase-2-Project
2. Setup Backend
cd backend
npm install
npm start
backend/
  ├── models/
  ├── routes/
  ├── seed.js
  └── app.js

frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   └── context/
  ├── public/
  └── index.js
