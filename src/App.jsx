import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BusinessFunctions from "./pages/BusinessFunctions.jsx";
import OurApp from "./pages/OurApp.jsx";
import Governance from "./pages/Governance.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business-functions" element={<BusinessFunctions />} />
        <Route path="/our-app" element={<OurApp />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
