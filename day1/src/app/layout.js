import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Day 1",
  description: "Learning Next.js step by step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
