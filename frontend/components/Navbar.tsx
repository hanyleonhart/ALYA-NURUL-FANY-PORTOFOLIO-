'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Hero Section', href: '#hero-section' },
    { name: 'Skill', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#F2E8E3]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#E5D5CD]'
          : 'bg-[#F9F5F2] py-4'
      }`}
    >
      {/* Container full width agar menempel rapi di pinggir layar */}
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand & Gambar Meriket di Ujung Kiri */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 ease-out group-hover:scale-105 shrink-0">
            <Image
              src="/meriket.png"
              alt="Meriket"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-[#3D322C] font-semibold group-hover:text-[#8C6D62] transition-colors duration-300 whitespace-nowrap">
              Tiffany Portfolio
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#9A8276] font-sans font-medium">
              Creative & Visual
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-semibold tracking-wide text-[#4A3E37] hover:text-[#2A211C] transition-colors duration-300 relative py-1 ease-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A68072] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call To Action Button di Ujung Kanan (Ubah ke Contact Me) */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#3D322C] hover:bg-[#8C6D62] text-[#F9F5F2] text-base font-medium tracking-wide transition-all duration-300 ease-out hover:shadow-md active:scale-98 inline-block whitespace-nowrap"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-[#3D322C] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#F2E8E3] border-b border-[#E5D5CD] px-8 py-6 shadow-sm transition-all duration-300 ease-in-out">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#3D322C] hover:text-[#8C6D62] py-1.5 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 w-full text-center py-3.5 rounded-full bg-[#3D322C] text-[#F9F5F2] text-base font-medium"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}