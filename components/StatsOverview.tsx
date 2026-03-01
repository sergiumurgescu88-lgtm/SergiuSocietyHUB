'use client';

import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';
import { Rocket, Activity, Hammer, Layers } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function StatsOverview() {
  const { language } = useLanguage();
  const t = translations[language];
  const total = projects.length;
  const liveCount = projects.filter(p => p.status === 'live' || p.status === 'demo').length;
  const constructionCount = projects.filter(p => p.status === 'under-construction').length;

  const stats = [
    {
      label: t.statsTotal,
      value: total,
      description: t.heroDescription,
      icon: Rocket,
      color: 'text-white',
      iconColor: 'text-white/20'
    },
    {
      label: t.statsActive,
      value: liveCount,
      description: t.live,
      icon: Activity,
      color: 'text-emerald-400',
      iconColor: 'text-emerald-500/20'
    },
    {
      label: t.statsWork,
      value: constructionCount,
      description: t.underConstruction,
      icon: Hammer,
      color: 'text-amber-400',
      iconColor: 'text-amber-500/20'
    },
    {
      label: t.statsCategories,
      value: categories.length - 1,
      description: t.projects,
      icon: Layers,
      color: 'text-indigo-400',
      iconColor: 'text-indigo-500/20'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
    >
      {stats.map((stat, idx) => (
        <div 
          key={idx}
          className="group relative bg-[#111427] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg"
        >
          <stat.icon size={60} className={cn("absolute -top-2 -right-2 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500", stat.iconColor)} />
          
          <div className="relative z-10">
            <div className="text-[#6b7299] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <stat.icon size={10} className={stat.color} />
              {stat.label}
            </div>
            <div className={cn("text-2xl md:text-4xl font-display font-black mb-2 md:mb-4", stat.color)}>
              {stat.value}
            </div>
            <p className="text-[#6b7299] text-[9px] md:text-[11px] leading-tight md:leading-relaxed font-bold">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
