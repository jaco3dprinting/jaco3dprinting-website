"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1117]/90 backdrop-blur border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       <Link
  href="/"
  className="group flex items-center gap-3 max-w-[75%] transition-all duration-300"
>
 <Image
  src="/images/Logo.png"
  alt="Jaco 3D Printing"
  width={50}
  height={50}
  className="w-auto h-12 transition-transform duration-300 group-hover:scale-110"
/>

 <span className="font-bold text-xl transition-colors duration-300 group-hover:text-cyan-300">
  Jaco{" "}
  <span className="text-orange-400 group-hover:text-orange-400">
    3D Printing
  </span>
</span>
</Link>

        {/* Desktop Menu */}
<div className="hidden md:flex gap-6">
          <Link
  href="/"
  className={`transition ${
    pathname === "/"
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}
>
    Home
  </Link>

  <Link
  href="/products"
  className={`transition ${
    pathname.startsWith("/products")
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}
>
  Products
</Link>

          <Link href="/gallery" className={`transition ${
    pathname === "/gallery"
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}>
    Gallery
  </Link>

<Link href="/about" className={`transition ${
    pathname === "/about"
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}>
    About
  </Link>

          <Link href="/contact" className={`transition ${
    pathname === "/contact"
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}>
    Contact
  </Link>

        </div>

{/* Mobile Hamburger */}
<button
  className="md:hidden text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>

      </div>

{menuOpen && (
  <div className="md:hidden border-t border-cyan-500/20">

    <div className="flex flex-col p-4 gap-4">

      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className={`transition ${
          pathname === "/"
            ? "text-cyan-400 font-bold"
            : "hover:text-cyan-400"
        }`}
      >
        Home
      </Link>

      <Link
  href="/products"
  onClick={() => setMenuOpen(false)}
  className={`transition ${
    pathname.startsWith("/products")
      ? "text-cyan-400 font-bold"
      : "hover:text-cyan-400"
  }`}
>
  Products
</Link>

      

      <Link
        href="/gallery"
        onClick={() => setMenuOpen(false)}
        className={`transition ${
          pathname === "/gallery"
            ? "text-cyan-400 font-bold"
            : "hover:text-cyan-400"
        }`}
      >
        Gallery
      </Link>

      <Link
        href="/about"
        onClick={() => setMenuOpen(false)}
        className={`transition ${
          pathname === "/about"
            ? "text-cyan-400 font-bold"
            : "hover:text-cyan-400"
        }`}
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className={`transition ${
          pathname === "/contact"
            ? "text-cyan-400 font-bold"
            : "hover:text-cyan-400"
        }`}
      >
        Contact
      </Link>

    </div>

  </div>
)}
    </nav>
  );
}