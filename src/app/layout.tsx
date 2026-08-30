import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pulagam Hemanth Siva Reddy | Mechanical Engineering Portfolio",
  description: "Portfolio of Pulagam Hemanth Siva Reddy - Final-Year Mechanical Engineering Student specializing in CAD (CATIA V5), CFD Simulation (ANSYS Fluent), and Manufacturing Time-Study Optimization.",
  keywords: [
    "Pulagam Hemanth Siva Reddy",
    "Mechanical Engineer",
    "CAD",
    "CATIA V5",
    "ANSYS Fluent",
    "CFD",
    "Vishnu Institute of Technology",
    "SRM University AP",
    "Yamaha Motor"
  ],
  authors: [{ name: "Pulagam Hemanth Siva Reddy" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome for legacy styling icon support */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          precedence="default"
        />
        {/* Osvald Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter+Tight:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="vertical-grid-lines">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
