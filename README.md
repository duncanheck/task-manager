# 📝 Task Manager App

A fully functional task management web application built with **React 18**, **TypeScript**, and **Auth0** authentication. It allows users to **add, edit, delete, and view task details**, with support for user login/logout and persistent UI state management.

## 🚀 Features

- ✅ User login/logout with Auth0
- 🧠 Create, edit, toggle, and delete tasks
- 📝 View task detail pages
- 🎨 Theme and responsive UI with `App.css` and `index.css`
- 🧩 TypeScript interfaces for safe development
- 📦 Component-based architecture
- 🧠 Context API for global task state

## 🔐 Auth0 Setup

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a Single Page Application (SPA)
3. Update:
   - **Allowed Callback URLs**: `http://localhost:3000`
   - **Allowed Logout URLs**: `http://localhost:3000`
   - **Allowed Web Origins**: `http://localhost:3000`
4. In `src/index.tsx`, replace the placeholders:
   ```ts
   <Auth0Provider
     domain="YOUR_DOMAIN"
     clientId="YOUR_CLIENT_ID"
     authorizationParams={{ redirect_uri: window.location.origin }}
   >
