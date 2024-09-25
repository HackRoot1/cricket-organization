import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Nopage from "./pages/Nopage.jsx";
import Gallery from "./pages/Gallery.jsx";
import AboutUs from "./pages/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
