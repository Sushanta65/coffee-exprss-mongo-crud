import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SIgnUp";
import Home from "./components/Home";
import Landing from "./components/Landing";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '',
        element: <Landing></Landing>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      }
    ]
  },
  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
