'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk melacak section yang sedang aktif (Default: 'hero' / Beranda)
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi scroll untuk background navbar
      setIsScrolled(window.scrollY > 20);

      // Deteksi section yang sedang terlihat di layar
      const sections = ['hero', 'portfolio', 'skills', 'certificates', 'testimonials'];
      const scrollPosition = window.scrollY + 200; // Offset spasi

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', id: 'hero' },
    { name: 'Portofolio', id: 'portfolio' },
    { name: 'Skill', id: 'skills' },
    { name: 'Sertifikat', id: 'certificates' },
    { name: 'Testimonial', id: 'testimonials' },
  ];

  return (
    <div className="bg-[#F9F5F2] min-h-screen text-[#3D322C] font-sans">
      
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2E8E3]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E5D5CD]'
            : 'bg-[#F9F5F2] py-4 border-b border-[#E5D5CD]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/meriket.png"
                alt="Logo Meriket"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-semibold text-[#3D322C]">
                Tiffany Portfolio
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#9A8276] font-medium">
                Creative & Visual
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-[#8C6D62] after:w-full'
                      : 'text-[#4A3E37] hover:text-[#8C6D62] after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#8C6D62] after:transition-all after:duration-300`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Button Contact */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-[#3D322C] hover:bg-[#8C6D62] text-[#F9F5F2] text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#3D322C] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F2E8E3] border-b border-[#E5D5CD] px-6 py-4 shadow-sm">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold ${
                    activeSection === link.id ? 'text-[#8C6D62]' : 'text-[#3D322C]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-center py-2 rounded-full bg-[#3D322C] text-[#F9F5F2] text-sm font-medium"
              >
                Contact Me
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* SECTION BERANDA (HERO) */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Teks Kiri */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block bg-[#F2E8E3] text-[#8C6D62] text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full border border-[#E5D5CD] mb-6">
              🎀 CREATIVE VISUAL DESIGNER
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#3D322C]">
              Hi, Saya Tiffany<span className="text-pink-400"></span>
            </h1>

            <p className="text-[#6D5D55] text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Mengubah ide sederhana menjadi pengalaman visual yang manis dan berkesan dengan sentuhan desain minimalis modern.
            </p>

            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="px-7 py-3 rounded-full bg-[#3D322C] text-[#F9F5F2] font-semibold text-sm hover:bg-[#8C6D62] transition-colors shadow-sm"
              >
                Lihat Karya ✨
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-white text-[#3D322C] border border-[#E5D5CD] font-semibold text-sm hover:bg-[#F2E8E3] transition-colors"
              >
                Hubungi Saya ➔
              </a>
            </div>
          </div>

          {/* Gambar Kucing Meriket Kanan */}
          <div className="shrink-0 flex justify-center items-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#F2E8E3] rounded-full p-6 border border-[#E5D5CD] shadow-inner flex items-center justify-center">
              <Image
                src="/meriket.png"
                alt="Maskot Meriket"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-[#E5D5CD] text-xs text-[#8C6D62]">
        © {new Date().getFullYear()} Tiffany Portfolio. Built with Next.js & Tailwind CSS.
      </footer>

    </div>
  );
}