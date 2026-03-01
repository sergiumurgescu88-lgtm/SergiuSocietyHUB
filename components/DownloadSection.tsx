'use client';

import { motion } from 'motion/react';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function DownloadSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const presentations = [
    {
      title: "Prezentare MBEuroparts (Română)",
      description: "Franciză Digitală AI · Piese Mercedes. Un departament complet de IT + Marketing + Vânzări.",
      filename: "MBEuroparts-RO.pdf",
      lang: "RO",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "MBEuroparts Presentation (English)",
      description: "AI Digital Franchise · Mercedes Parts. A complete IT + Marketing + Sales department.",
      filename: "MBEuroparts-EN.pdf",
      lang: "EN",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="bg-[#0c0f1e]/50 backdrop-blur-sm border border-white/10 rounded-[2rem] md:rounded-3xl p-8 md:p-10 overflow-hidden relative shadow-2xl">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -mr-32 -mt-32 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -ml-32 -mb-32" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-6"
            >
              <FileText size={12} />
              {t.pdfResources}
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tight leading-tight">
              {t.downloadPdf}
            </h2>
            <p className="text-[#a1a7c5] text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.pdfDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full lg:w-auto shrink-0">
            {presentations.map((pdf, idx) => (
              <motion.a
                key={idx}
                href={`/${pdf.filename}`}
                download
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col p-6 md:p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all min-w-[260px] shadow-xl active:scale-95"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pdf.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                    <span className="text-sm font-black tracking-tighter">{pdf.lang}</span>
                  </div>
                  <div className="p-3 rounded-full bg-white/5 text-[#6b7299] group-hover:text-white group-hover:bg-indigo-500/20 transition-all">
                    <Download size={20} />
                  </div>
                </div>
                <h3 className="text-white font-black text-base md:text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                  {pdf.title}
                </h3>
                <p className="text-[#6b7299] text-xs leading-relaxed mb-6 font-medium">
                  {pdf.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    Descarcă acum
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[9px] text-[#4a4e69] font-mono font-bold">PDF · 2.4 MB</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
