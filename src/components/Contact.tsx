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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showToast("Please fill out all fields.", "error");
      return;
    }
    
    // Simulate successful message submission
    showToast(`Thank you, ${formData.name}! Your message has been sent.`, "success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="section-title">Let's Connect & Build Together</h2>
          <p className="section-subtitle">
            Open for full-time opportunities, graduate engineering roles, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
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
                <div className="contact-icon-wrap" style={{ color: "#0ea5e9" }}>
                  <i className="fa-brands fa-linkedin-in" style={{ fontSize: "18px" }}></i>
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
                <div className="contact-icon-wrap" style={{ color: "var(--accent-emerald)" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <span className="contact-value">Bhimavaram / Penugonda, Andhra Pradesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  className="form-control" 
                  placeholder="e.g. John Doe" 
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
                  placeholder="e.g. john@example.com" 
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
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
