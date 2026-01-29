import "./globals.css";

export const metadata = {
  title: "Next.js Day 4",
  description: "Learning Next.js Day 4 - Params, searchParams, routing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
