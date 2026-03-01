'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, ArrowRight, Zap, Package, Clock, Tag, X, ChevronRight, Users, Globe, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const RO_STATS = [
  { value: '26', label: 'Agenți AI', icon: Zap },
  { value: '6.500', label: 'Piese Catalog', icon: Package },
  { value: '24/7', label: 'Disponibil', icon: Clock },
  { value: '0 lei', label: 'Intrare', icon: Tag },
];

const PACKAGE_MODULES = [
  {
    num: '01',
    title: '6 Roboți pe Forumuri',
    price: '€750–1.600/lună',
    icon: Globe,
    desc: '6 agenți AI caută zilnic pe BenzWorld, MBClub UK, Reddit. Răspund în engleză, germană sau română — tu nu faci nimic.',
  },
  {
    num: '02',
    title: 'Video & Social Media',
    price: '1.625 RON/lună',
    icon: TrendingUp,
    desc: '16–20 clipuri/lună create și postate automat pe TikTok, Instagram, Facebook, YouTube. Brandul crește zilnic.',
  },
  {
    num: '03',
    title: 'Asistent AI 24/7',
    price: '1.500 RON/lună',
    icon: Zap,
    desc: 'Robotul răspunde la WhatsApp și telefon. Clientul dă VIN-ul, primește prețul în secunde — la orice oră.',
  },
  {
    num: '04',
    title: '8 Marketplace-uri Auto',
    price: '1.500 RON/lună',
    icon: Package,
    desc: 'Produsele apar simultan pe OLX, Autovit, eBay.de, eBay UK. Stoc sincronizat instantaneu. Prețuri dinamice automate.',
  },
];

const ROI_SCENARIOS = [
  { label: 'Conservator', profit: '~€400/lună', orders: '5 comenzi', color: '#6b7299' },
  { label: 'Realist', profit: '~€2.400/lună', orders: '15 comenzi · ROI 200%', color: '#D4AF37' },
  { label: 'Optimist', profit: '€6.800+/lună', orders: '25+ comenzi · ROI 567%', color: '#F5E27A' },
];

function PackageModal({ open, onClose, filename }: { open: boolean; onClose: () => void; filename: string }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/30 shadow-2xl pointer-events-auto no-scrollbar"
              style={{ background: 'linear-gradient(160deg, #111111 0%, #161616 60%, #0d0d0d 100%)' }}
            >
              {/* Gold top bar */}
              <div className="h-[3px] w-full rounded-t-3xl" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E27A, #D4AF37, transparent)' }} />

              <div className="p-7 md:p-9">
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] block mb-1" style={{ color: '#D4AF37' }}>Pachet Complet · Premium BnW Gold</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">MBEuroparts<br /><span style={{ color: '#D4AF37' }}>Franciză Digitală AI</span></h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2.5 rounded-full border border-white/10 text-white/40 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200 shrink-0"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Tagline */}
                <p className="text-white/50 text-sm leading-relaxed mb-8 border-l-2 pl-4" style={{ borderColor: '#D4AF37' }}>
                  Imaginează-ți că ai <span className="text-white font-bold">26 de angajați</span> care lucrează non-stop — fără salariu mare, fără concedii, 24 din 24. Un departament complet de IT + Marketing + Vânzări livrat ca un singur abonament lunar — gata în <span className="text-white font-bold">48 de ore</span>.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {RO_STATS.map(({ value, label, icon: Icon }) => (
                    <div key={label} className="rounded-2xl p-3 text-center border border-white/5" style={{ background: 'rgba(212,175,55,0.04)' }}>
                      <Icon size={14} className="mx-auto mb-1.5" style={{ color: '#D4AF37' }} />
                      <div className="text-lg font-black text-white leading-none mb-0.5">{value}</div>
                      <div className="text-[9px] text-white/35 uppercase tracking-widest font-bold">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Modules */}
                <div className="mb-8">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">4 Module incluse</h3>
                  <div className="space-y-3">
                    {PACKAGE_MODULES.map(({ num, title, price, icon: Icon, desc }) => (
                      <div key={num} className="rounded-2xl p-4 border border-white/5 hover:border-[#D4AF37]/20 transition-colors" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black tabular-nums" style={{ color: '#D4AF37' }}>{num}</span>
                            <Icon size={14} className="text-white/40" />
                            <span className="text-sm font-black text-white">{title}</span>
                          </div>
                          <span className="text-[9px] font-bold text-white/30 font-mono">{price}</span>
                        </div>
                        <p className="text-xs text-white/40 leading-relaxed pl-7">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="rounded-2xl p-5 border mb-8" style={{ background: 'rgba(212,175,55,0.05)', borderColor: 'rgba(212,175,55,0.2)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield size={14} style={{ color: '#D4AF37' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#D4AF37' }}>Formula de Preț</span>
                  </div>
                  <div className="flex items-baseline gap-4 mb-3">
                    <div>
                      <div className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">Taxă intrare</div>
                      <div className="text-2xl font-black text-white">0 lei</div>
                    </div>
                    <div className="text-white/20 text-2xl">+</div>
                    <div>
                      <div className="text-[10px] text-white/35 uppercase tracking-widest mb-0.5">Abonament lunar</div>
                      <div className="text-2xl font-black text-white">5.000 <span className="text-lg">RON</span></div>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/30 font-mono">100% câștigul tău — Zero royalty. Zero comision.</p>
                </div>

                {/* ROI scenarios */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={14} style={{ color: '#D4AF37' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#D4AF37' }}>Return on Investment</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {ROI_SCENARIOS.map(({ label, profit, orders, color }) => (
                      <div key={label} className="rounded-2xl p-3.5 border border-white/5 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="text-[9px] uppercase tracking-widest font-black mb-2" style={{ color }}>{label}</div>
                        <div className="text-base font-black text-white mb-1 leading-tight">{profit}</div>
                        <div className="text-[9px] text-white/30">{orders}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roadmap teaser */}
                <div className="rounded-2xl p-4 border border-white/5 mb-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={14} style={{ color: '#D4AF37' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#D4AF37' }}>Timeline</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                    {[
                      { luna: 'Luna 1–2', titlu: 'Lansare', desc: 'Site live · 6.500 produse' },
                      { luna: 'Luna 3–4', titlu: 'Rezultate', desc: 'Comenzi · 20 clipuri/lună' },
                      { luna: 'Luna 5–6', titlu: 'Break-Even', desc: 'Profit net · BMW/Audi' },
                      { luna: 'Luna 7–12', titlu: 'Imperiu', desc: '5–7 francizați · 50K vizit.' },
                    ].map(({ luna, titlu, desc }) => (
                      <div key={luna} className="rounded-xl p-2.5">
                        <div className="text-[8px] text-white/25 uppercase tracking-widest mb-0.5">{luna}</div>
                        <div className="text-xs font-black text-white mb-0.5">{titlu}</div>
                        <div className="text-[9px] text-white/30 leading-snug">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA footer */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`/${filename}`}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-black text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E27A)', color: '#0d0d0d' }}
                  >
                    <Download size={16} />
                    Descarcă Prezentarea Completă
                  </a>
                  <button
                    onClick={onClose}
                    className="py-4 px-5 rounded-2xl border border-white/10 text-white/40 text-sm font-bold hover:border-white/20 hover:text-white/60 transition-all duration-200"
                  >
                    Închide
                  </button>
                </div>

                <p className="text-center text-[9px] text-white/20 font-mono mt-4">
                  Sergiu Murgescu · Telegram: @MrDeliveryAI · Implementare completă în 48 de ore
                </p>
              </div>

              {/* Gold bottom bar */}
              <div className="h-[1px] w-full opacity-40 rounded-b-3xl" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function PremiumBnWGoldCard({ pdf }: { pdf: { title: string; description: string; filename: string } }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PackageModal open={modalOpen} onClose={() => setModalOpen(false)} filename={pdf.filename} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setModalOpen(true)}
        className="group relative flex flex-col min-w-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer"
        style={{ background: 'linear-gradient(160deg, #111111 0%, #1a1a1a 60%, #0d0d0d 100%)' }}
      >
        {/* Gold shimmer top bar */}
        <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F5E27A, #D4AF37, transparent)' }} />

        {/* Subtle gold glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-[#D4AF37]/40 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1c1c1c, #2a2a2a)' }}>
                <span className="text-xs font-black tracking-widest" style={{ color: '#D4AF37' }}>RO</span>
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: '#D4AF37' }}>Premium</span>
                <p className="text-[10px] text-white/40 font-mono">BnW · Gold Edition</p>
              </div>
            </div>
            {/* Download button — stops propagation so modal doesn't open */}
            <a
              href={`/${pdf.filename}`}
              download
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-full border border-white/10 text-white/30 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300"
              title="Descarcă fișierul"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Title */}
          <h3 className="text-white font-black text-base md:text-lg mb-1.5 leading-tight group-hover:text-[#F5E27A] transition-colors duration-300">
            {pdf.title}
          </h3>
          <p className="text-white/40 text-xs leading-relaxed mb-5 font-medium">
            {pdf.description}
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {RO_STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="rounded-xl p-3 border border-white/5 group-hover:border-[#D4AF37]/20 transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon size={10} style={{ color: '#D4AF37' }} />
                  <span className="text-[9px] text-white/35 uppercase tracking-widest font-bold">{label}</span>
                </div>
                <span className="text-sm font-black text-white">{value}</span>
              </div>
            ))}
          </div>

          {/* Footer hint */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
              style={{ color: '#D4AF37' }}>
              <ChevronRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              Vezi detalii pachet
            </span>
            <span className="text-[9px] text-white/20 font-mono font-bold">PPTX · 10 slide-uri</span>
          </div>
        </div>

        {/* Gold shimmer bottom bar */}
        <div className="h-[1px] w-full opacity-40" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
      </motion.div>
    </>
  );
}

export default function DownloadSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const enPresentation = {
    title: "MBEuroparts Presentation (English)",
    description: "AI Digital Franchise · Mercedes Parts. A complete IT + Marketing + Sales department.",
    filename: "MBEuroparts-EN.pdf",
    lang: "EN",
    color: "from-indigo-500 to-blue-600"
  };

  const roPresentation = {
    title: "Prezentare MBEuroparts (Română)",
    description: "Franciză Digitală AI · Piese Mercedes. Un departament complet de IT + Marketing + Vânzări.",
    filename: "MBEuroparts_Premium_BnW_Gold.pptx",
  };

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

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full lg:w-auto shrink-0 items-stretch">
            {/* Romanian card — Premium BnW Gold edition */}
            <PremiumBnWGoldCard pdf={roPresentation} />

            {/* English card — standard style */}
            <motion.a
              href={`/${enPresentation.filename}`}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col p-6 md:p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all min-w-[260px] shadow-xl active:scale-95"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${enPresentation.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                  <span className="text-sm font-black tracking-tighter">{enPresentation.lang}</span>
                </div>
                <div className="p-3 rounded-full bg-white/5 text-[#6b7299] group-hover:text-white group-hover:bg-indigo-500/20 transition-all">
                  <Download size={20} />
                </div>
              </div>
              <h3 className="text-white font-black text-base md:text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                {enPresentation.title}
              </h3>
              <p className="text-[#6b7299] text-xs leading-relaxed mb-6 font-medium">
                {enPresentation.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                  Download now
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[9px] text-[#4a4e69] font-mono font-bold">PDF · 2.4 MB</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
