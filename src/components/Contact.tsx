"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send, MessageSquare } from "lucide-react";

interface ContactProps {
  showToast: (message: string, type?: "success" | "info" | "error") => void;
}

export default function Contact({ showToast }: ContactProps) {
  const email = "23pa1a0352@vishnu.edu.in";
  const phoneNumber = "+917075688699";
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
        showToast("Email address copied to clipboard!", "success");
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
        showToast("Phone number copied to clipboard!", "success");
      }
    } catch (err) {
      showToast("Failed to copy text.", "error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace("form-", "")]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      showToast("Please enter your name.", "error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    if (!formData.message.trim()) {
      showToast("Please enter your message.", "error");
      return;
    }

    // Prevent duplicate submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("Access key not configured.");
      }

      const payload = {
        access_key: accessKey,
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || "New Message From Portfolio",
        message: formData.message.trim(),
        from_name: "Portfolio Contact Form",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast(`Message sent successfully!`, "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-dark">
      <div className="vertical-label-container">
        <span className="vertical-label">CONTACT // INQUIRY</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <MessageSquare size={14} /> GET IN TOUCH
          </div>
          <h2 className="display-medium">Have a Project in Mind? Let&apos;s Talk!</h2>
        </div>

        <div className="contact-grid" style={{ marginLeft: "8.33%" }}>
          {/* Left Info Column */}
          <div className="contact-info-panel">
            {/* Email item */}
            <div className="contact-card-item">
              <div className="contact-meta">
                <div className="contact-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-label">Email Address</div>
                  <a href={`mailto:${email}`} className="contact-value">{email}</a>
                </div>
              </div>
              <button className="copy-btn" onClick={() => handleCopy(email, "email")}>
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />} {copiedEmail ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Phone item */}
            <div className="contact-card-item">
              <div className="contact-meta">
                <div className="contact-icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-label">Phone Number</div>
                  <a href={`tel:${phoneNumber}`} className="contact-value">+91 7075688699</a>
                </div>
              </div>
              <button className="copy-btn" onClick={() => handleCopy(phoneNumber, "phone")}>
                {copiedPhone ? <Check size={14} /> : <Copy size={14} />} {copiedPhone ? "Copied" : "Copy"}
              </button>
            </div>

            {/* LinkedIn item */}
            <div className="contact-card-item">
              <div className="contact-meta">
                <div className="contact-icon-wrap">
                  <i className="fa-brands fa-linkedin-in" style={{ fontSize: "16px" }}></i>
                </div>
                <div>
                  <div className="contact-label">Professional Network</div>
                  <a 
                    href="https://www.linkedin.com/in/pulagam-hemanth-siva-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-value"
                  >
                    pulagam-hemanth-siva-reddy
                  </a>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/pulagam-hemanth-siva-reddy?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="copy-btn"
                style={{ textDecoration: "none" }}
              >
                <ExternalLink size={14} /> Visit
              </a>
            </div>

            {/* Location item */}
            <div className="contact-card-item">
              <div className="contact-meta">
                <div className="contact-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-value">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  className="form-control" 
                  placeholder="e.g. Asrith" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="form-email" 
                  className="form-control" 
                  placeholder="e.g. asrith@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="form-subject" 
                  className="form-control" 
                  placeholder="e.g. Job Opportunity / Collaboration" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label">Message</label>
                <textarea 
                  id="form-message" 
                  className="form-control" 
                  placeholder="Describe your project, question, or opportunity..." 
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={1000}
                  required 
                />
                <div style={{
                  textAlign: "right",
                  fontSize: "0.75rem",
                  marginTop: "4px",
                  color: formData.message.length >= 900 ? "#f87171" : "var(--text-muted, #6b7280)",
                  transition: "color 0.2s"
                }}>
                  {formData.message.length} / 1000
                </div>
              </div>

              <button
                type="submit"
                className="btn-bracket"
                style={{ width: "100%", justifyContent: "center", opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                disabled={isSubmitting}
              >
                <span className="bracket">[</span>{isSubmitting ? " SENDING... " : " SEND MESSAGE "}<span className="bracket">]</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
