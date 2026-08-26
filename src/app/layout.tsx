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
      </head>
      <body>{children}</body>
    </html>
  );
}
