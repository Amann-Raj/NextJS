import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "15px" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
