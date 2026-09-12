"use client";

import React, { useState } from "react";
import { Users, ChevronLeft, ChevronRight, Lightbulb, Wrench, GraduationCap } from "lucide-react";

const oilImages = [
  {
    url: "/oil-leakage detection prototype/IMG_20260425_164826.jpg",
    caption: "Full prototype assembly – active oil-leakage detection unit",
  },
  {
    url: "/project1.jpg",
    caption: "Additional mentor project image 1",
  },
  {
    url: "/project2.jpg",
    caption: "Additional mentor project image 2",
  },
];

export default function MentorSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + oilImages.length) % oilImages.length);
  const next = () => setActiveIdx((i) => (i + 1) % oilImages.length);

  return (
    <section id="mentor" className="section-light mentor-section">
      <div className="vertical-label-container">
        <span className="vertical-label">MENTORSHIP // GUIDANCE</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Users size={14} /> MENTORSHIP
          </div>
          <h2 className="display-medium">Mentor Of Juniors.</h2>
          <p className="section-subtitle">
            Beyond my own research and projects, I actively guide first-year students through
            hands-on engineering challenges — from concept ideation to prototype fabrication.
          </p>
        </div>

        <div className="mentor-card grid-offset">
          {/* Left: Image gallery */}
          <div className="mentor-gallery">
            <div className="mentor-gallery-main">
              <img
                src={oilImages[activeIdx].url}
                alt={oilImages[activeIdx].caption}
                key={activeIdx}
                className="mentor-gallery-img"
                style={{ objectFit: activeIdx === 1 ? "contain" : "cover" }}
              />
              {/* Navigation arrows */}
              {oilImages.length > 1 && (
                <>
                  <button className="mentor-gallery-arrow mentor-gallery-arrow-left" onClick={prev} aria-label="Previous image">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="mentor-gallery-arrow mentor-gallery-arrow-right" onClick={next} aria-label="Next image">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              {/* Caption overlay */}
              <div className="mentor-gallery-caption">
                {oilImages[activeIdx].caption}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="mentor-gallery-dots">
              {oilImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`mentor-dot${idx === activeIdx ? " mentor-dot-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Image ${idx + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail strip */}
            <div className="mentor-thumb-strip">
              {oilImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img.caption}
                  className={`mentor-thumb${idx === activeIdx ? " mentor-thumb-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right: Project details */}
          <div className="mentor-details">
            <div className="mentor-badge">
              <GraduationCap size={14} /> Prototyping &amp; Mentorship
            </div>
            <h3 className="mentor-title">Industrial Oil-Leakage Detector</h3>
            <p className="mentor-desc">
              Mentored a first-year engineering team through the full lifecycle of building an
              <strong> active mechanical prototype</strong> designed to detect oil leakage in
              industrial machinery — from concept ideation and sensor selection to CAD packaging
              and physical fabrication.
            </p>

            <div className="mentor-highlights">
              <div className="mentor-highlight-item">
                <div className="mentor-highlight-icon">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <div className="mentor-highlight-label">Concept &amp; Ideation</div>
                  <div className="mentor-highlight-text">
                    Led brainstorming sessions on detection mechanisms, guiding juniors to select
                    an oil-conductivity sensing approach suitable for active machinery loops.
                  </div>
                </div>
              </div>

              <div className="mentor-highlight-item">
                <div className="mentor-highlight-icon">
                  <Wrench size={16} />
                </div>
                <div>
                  <div className="mentor-highlight-label">CAD &amp; Fabrication</div>
                  <div className="mentor-highlight-text">
                    Guided the team in CAD packaging of the sensor unit and supervised hands-on
                    fabrication and assembly of the final working prototype.
                  </div>
                </div>
              </div>

              <div className="mentor-highlight-item">
                <div className="mentor-highlight-icon">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div className="mentor-highlight-label">Knowledge Transfer</div>
                  <div className="mentor-highlight-text">
                    Conducted weekly check-ins to review progress, troubleshoot issues, and
                    teach engineering fundamentals throughout the project.
                  </div>
                </div>
              </div>
            </div>

            <div className="mentor-tags">
              <span className="tech-tag">Fabrication</span>
              <span className="tech-tag">Prototyping</span>
              <span className="tech-tag">Sensor Integration</span>
              <span className="tech-tag">Team Mentorship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
