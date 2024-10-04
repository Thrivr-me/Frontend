import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./globals.css";  // Global styles
import { navItems } from "@/data";
import FloatingNav from "@/components/ui/FloatingNavbar";


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
        <FloatingNav navItems={navItems} />  {/* Navbar at the top */}
        {children}  {/* Page content */}
      </body>
    </html>
  );
}
