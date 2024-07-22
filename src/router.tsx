import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import Register from "./pages/register";

export const router = createBrowserRouter([
  {path: "/", element: <HomePage/> },
  {path: "/register", element: <Register/>}
])
