"use client";

import React, { useState, useCallback } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import DroidRobot from "@/components/DroidRobot";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";

interface ToastMsg {
  id: number;
  message: string;
  type: "success" | "info" | "error";
}

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  // Open specific modal helper
  const handleOpenModal = useCallback((id: string) => {
    setActiveModal(id);
  }, []);

  // Close active modal helper
  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  // Toast notifier function
  const showToast = useCallback((message: string, type: "success" | "info" | "error" = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove toast after 3.5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  return (
    <>
      {/* Dynamic Mechanical Background canvas */}
      <BackgroundCanvas />

      {/* Interactive Droid Robot in Bottom-Right Corner */}
      <DroidRobot />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => handleOpenModal("resume")} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => handleOpenModal("resume")} />

        <About />

        <Education />

        <Experience />

        <Projects onOpenModal={handleOpenModal} />

        <Skills />

        <Achievements />

        <Leadership />

        <Certifications />

        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals Management (Agro-gallery, CFD flow, Oil detector, Resume print) */}
      <Modals
        activeModal={activeModal}
        onClose={handleCloseModal}
        showToast={showToast}
      />

      {/* Toast Overlay Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast" style={{
            borderColor: toast.type === "success" ? "var(--accent-emerald)" : toast.type === "error" ? "#f87171" : "var(--primary)"
          }}>
            {toast.type === "success" && <CheckCircle size={16} style={{ color: "var(--accent-emerald)" }} />}
            {toast.type === "error" && <AlertTriangle size={16} style={{ color: "#f87171" }} />}
            {toast.type === "info" && <Info size={16} style={{ color: "var(--primary-light)" }} />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
