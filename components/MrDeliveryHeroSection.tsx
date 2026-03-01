'use client';

import { motion } from 'motion/react';
import { ArrowRight, Utensils, Bot, Clock, Zap, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function MrDeliveryHeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      label: t.mrDeliveryStatRestaurants,
      value: '150+',
      icon: Utensils,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
    },
    {
      label: t.mrDeliveryStatRobots,
      value: '26',
      icon: Bot,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      label: t.mrDeliveryStatUptime,
      value: '24/7',
      icon: Clock,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      label: t.mrDeliveryStatCost,
      value: '0 €',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
  ];

  const features = [
    { emoji: '🤖', label: 'AI pentru Clienți' },
    { emoji: '👨‍🍳', label: 'AI pentru Echipă' },
    { emoji: '📸', label: 'Poze Meniu AI' },
    { emoji: '🔍', label: 'Audit Automat' },
    { emoji: '📊', label: 'Dashboard Live' },
    { emoji: '📢', label: 'Marketing AI' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-20">
      <div className="relative bg-[#0c0f1e] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] -ml-64 -mt-64 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] -mr-48 -mb-48" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* LEFT: Text + CTA */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-inner"
            >
              <Home size={14} className="animate-pulse" />
              {t.mrDeliveryBadge}
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.1]">
              {t.mrDeliveryTitle1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                {t.mrDeliveryTitle2}
              </span>
            </h2>

            <p className="text-[#a1a7c5] text-sm md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4 md:mb-6 font-medium">
              {t.mrDeliverySubtitle}
            </p>

            <p className="text-[#6b7299] text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10">
              {t.mrDeliveryDescription}
            </p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 md:mb-10"
            >
              {features.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-[#a1a7c5] hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                >
                  <span>{f.emoji}</span>
                  {f.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://mrdelivery.ro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-5 bg-[#111427] border border-indigo-500/30 text-white font-black rounded-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all hover:border-indigo-500/60 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                <Home size={20} className="text-indigo-400" />
                <span className="text-lg">{t.mrDeliveryButton}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <a
                href="#resto"
                className="group px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[#6b7299] hover:text-white hover:bg-white/10 hover:border-white/20 font-bold text-sm flex items-center gap-2 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-category="resto"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Vezi toate proiectele
                <ArrowRight size={16} className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: Stats + Badge */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110 duration-500",
                    stat.bgColor,
                    stat.color
                  )}>
                    <stat.icon size={24} />
                  </div>
                  <div className={cn("text-2xl md:text-3xl font-display font-black mb-1", stat.color)}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6b7299] font-black">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Platform badge */}
            <div className="mt-4 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <div className="text-white text-xs font-black uppercase tracking-widest">{t.mrDeliveryFeatureBadge}</div>
                <div className="text-[#6b7299] text-[10px] font-bold mt-1">{t.mrDeliveryFeatureDesc}</div>
              </div>
            </div>

            {/* Live status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex items-center justify-center gap-3 px-5 py-3 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">mrdelivery.ro — Live</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
