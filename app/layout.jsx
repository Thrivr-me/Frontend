import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./globals.css";  // Global styles
import Navbar from "@components/Navbar";  // Simplified import using alias

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Using alias for fonts
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google font (Rubik)
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />  {/* Navbar at the top */}
        {children}  {/* Page content */}
      </body>
    </html>
  );
}
