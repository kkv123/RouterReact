import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/contact/Contact.jsx';
import User from './components/user/User.jsx';
import Github from './components/Github/github.jsx';

// const router = createBrowserRouter([
//      {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "/about",
//           element: <About />
//         },
//         {
//           path: "/contact",
//           element: <Contact/>
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}
      errorElement={<h1>Oops! Page not found</h1>}
    >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      {/* we use useParams to fetch the userId */}
      <Route path="user/:userId" element={<User />} />
    </Route>
  ),
  {
    basename: "/RouterReact"   // ✅ important for GitHub Pages
  }

)
ReactDOM.createRoot(document.getElementById('root')).render(
  //  <App />
  <RouterProvider router={router} />
);