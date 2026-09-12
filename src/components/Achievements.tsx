"use client";
 
import React, { useState } from "react";
import { Trophy, Award, Medal, Image } from "lucide-react";

export default function Achievements() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const achievementsData = [
    {
      icon: <Trophy size={24} />,
      prize: "Cash Prize: ₹3,000",
      title: "1st Prize – Researchers Day",
      description: "Clinched 1st Prize and a ₹3,000 cash prize for outstanding technical research presentation and numerical fluid simulation findings.",
      image: "/RESEARCHERS DAY (1ST PRICE).jpg",
    },
    {
      icon: <Award size={24} />,
      prize: "Cash Prize: ₹3,000",
      title: "1st Prize – GEAR VIT",
      description: "Won 1st Prize and a ₹3,000 cash prize at GEAR VIT, the premier Mechanical Engineering Technical Event, demonstrating engineering design problem-solving.",
      image: "/INNOVIT (FIRST PRICE).jpg",
    },
    {
      icon: <Medal size={24} />,
      prize: "Cash Prize: ₹1,000",
      title: "College Level – SIH Hackathon",
      description: "Secured 2nd Runner-Up position with a ₹1,000 cash prize at the College Level for developing automated engineering solution prototypes.",
      image: "/SIH (2ND RUNNER-UP).jpg",
    },
  ];

  return (
    <section id="achievements" className="section-dark">
      <div className="vertical-label-container">
        <span className="vertical-label">HONORS // AWARDS</span>
      </div>

      <div className="container">
        <div className="header-center">
          <div className="section-tag">
            <Trophy size={14} /> RECOGNITIONS
          </div>
          <h2 className="display-medium">Honors &amp; Achievements.</h2>
        </div>

        <div className="achievements-grid" style={{ marginLeft: "8.33%" }}>
          {achievementsData.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="trophy-badge">{item.icon}</div>
              <div className="prize-pill">{item.prize}</div>
              <h3 className="achieve-title">{item.title}</h3>
              <p className="achieve-desc">{item.description}</p>

              <button
                className="btn-bracket"
                style={{ marginTop: "1.5rem", alignSelf: "flex-start" }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-label={`View image for ${item.title}`}
              >
                <span className="bracket">[</span>
                <Image size={12} style={{ display: "inline" }} />
                &nbsp;{openIdx === idx ? "Hide Image" : "View Image"}
                <span className="bracket">]</span>
              </button>

              {openIdx === idx && (
                <div
                  style={{
                    marginTop: "1rem",
                    border: "1px solid var(--border-dark)",
                    overflow: "hidden",
                    borderRadius: "2px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
