# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.  
I extended this project to explore **React Router**, query parameters, and dynamic routing.

---
### 🔹 React Router
- Implemented client-side routing using **react-router-dom**.
- Created multiple pages: `Home`, `About`, `Contact`, `Github`, and dynamic `User` routes.
- Used `<BrowserRouter>` with `basename` for GitHub Pages deployment.
- Configured routes with `createBrowserRouter` and `createRoutesFromElements`.

### 🔹 Query Parameters
- Learned how to use `useParams()` to fetch dynamic values from the URL.
- Example:  
  ```jsx
  <Route path="user/:userId" element={<User />} />
