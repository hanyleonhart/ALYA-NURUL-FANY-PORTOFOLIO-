'use client';

import { useState } from 'react';

export default function AdminDashboard() {
  // State untuk melacak tab mana yang sedang aktif dibuka
  const [activeTab, setActiveTab] = useState('profile');

  // Daftar tab manajemen konten (Sekarang super lengkap!)
  const tabs = [
    { id: 'profile', label: 'Profil Utama & Foto' },
    { id: 'hero', label: 'Hero Section & CV' },
    { id: 'skills', label: 'Daftar Skills' },
    { id: 'portfolio', label: 'Portofolio Proyek' },
    { id: 'certificates', label: 'Sertifikat' },
    { id: 'testimonials', label: 'Testimoni Klien' },
    { id: 'contact', label: 'Kontak & Sosmed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-5 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Pusat Kontrol Konten Terpadu 🛠️
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Ubah semua informasi, foto, file, dan teks yang ada di website portofoliomu.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition shadow-sm">
            Simpan Semua Perubahan
          </button>
        </div>

        {/* Layout Utama: Sidebar Menu Kiri & Area Form Kanan */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Menu Pilihan Tab Konten */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Pengisian Formulir Dynamic */}
          <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            
            {/* 0. PROFIL UTAMA & FOTO PROFIL */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Identitas & Foto Profil</h2>
                
                {/* Bagian Upload Foto */}
                <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold overflow-hidden border-2 border-white shadow-sm">
                    {/* Placeholder Lingkaran Foto */}
                    <span className="text-xs">No Photo</span>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Ganti Foto Profil (.jpg / .png)</label>
                    <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-5 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer" />
                  </div>
                </div>

                {/* Form Data Nama & Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nama Lengkap</label>
                    <input type="text" defaultValue="Tiffany Young" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Pekerjaan / Keahlian Utama (Job Title)</label>
                    <input type="text" defaultValue="Frontend Developer & UI/UX Designer" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Bio Singkat (Tentang Saya)</label>
                    <textarea rows={3} defaultValue="Saya adalah seorang pengembang frontend yang berfokus pada pembuatan antarmuka web yang interaktif, bersih, dan responsif." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800"></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* 1. MANAGEMENT HERO & CV */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Edit Hero Section & Berkas CV</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Judul Utama (Heading)</label>
                    <input type="text" defaultValue="Selamat Datang di Portofolio Tiffany!" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Sub-Deskripsi Hero</label>
                    <textarea rows={3} defaultValue="Ini adalah bagian Frontend yang dibuat menggunakan Next.js." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800"></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Upload Berkas CV Baru (.pdf)</label>
                    <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-5 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer" />
                  </div>
                </div>
              </div>
            )}

            {/* 2. MANAGEMENT SKILLS */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Kelola Daftar Kemampuan (Skills)</h2>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input type="text" placeholder="Tambah Skill baru (Contoh: React.js, Tailwind CSS)" className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                    <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition">Tambah</button>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express'].map((skill) => (
                      <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        {skill}
                        <button className="text-gray-400 hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. MANAGEMENT PORTFOLIO */}
            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Manajemen Project Portofolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nama Project</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Link Tautan Project</label>
                    <input type="text" placeholder="https://..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Deskripsi Ringkas Proyek</label>
                    <textarea rows={2} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800"></textarea>
                  </div>
                </div>
                <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-xl hover:bg-pink-600 transition mt-2">Tambah Item Proyek</button>
              </div>
            )}

            {/* 4. MANAGEMENT CERTIFICATES */}
            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Manajemen Upload Sertifikat</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nama/Judul Sertifikat</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Institusi Penerbit</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">File Gambar Sertifikat (.png/.jpg)</label>
                    <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-5 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer" />
                  </div>
                </div>
                <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-xl hover:bg-pink-600 transition mt-2">Upload Sertifikat</button>
              </div>
            )}

            {/* 5. MANAGEMENT TESTIMONIALS */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Kelola Testimoni Klien / Kolega</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nama Pemberi Testimoni</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Jabatan / Perusahaan</label>
                      <input type="text" placeholder="Contoh: CEO Group A" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Isi Kalimat Testimoni</label>
                    <textarea rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800"></textarea>
                  </div>
                </div>
                <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-xl hover:bg-pink-600 transition mt-2">Simpan Testimoni</button>
              </div>
            )}

            {/* 6. MANAGEMENT CONTACT */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Informasi Kontak & Media Sosial</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Alamat Email Aktif</label>
                    <input type="email" defaultValue="tiffany@example.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Link WhatsApp</label>
                    <input type="text" defaultValue="https://wa.me/..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">URL LinkedIn</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">URL GitHub</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-pink-500 text-gray-800" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}