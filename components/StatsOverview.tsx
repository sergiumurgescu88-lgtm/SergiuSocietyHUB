'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';
import { Rocket, Activity, Hammer, Layers, ChevronDown } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function StatsOverview() {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const total = projects.length;
  const liveCount = projects.filter(p => p.status === 'live' || p.status === 'demo').length;
  const constructionCount = projects.filter(p => p.status === 'under-construction').length;

  const stats = [
    {
      label: t.statsTotal,
      value: total,
      shortDesc: t.projects,
      longDesc: t.statsTotalDesc,
      icon: Rocket,
      color: 'text-white',
      iconColor: 'text-white/20'
    },
    {
      label: t.statsActive,
      value: liveCount,
      shortDesc: t.live,
      longDesc: t.statsActiveDesc,
      icon: Activity,
      color: 'text-emerald-400',
      iconColor: 'text-emerald-500/20'
    },
    {
      label: t.statsWork,
      value: constructionCount,
      shortDesc: t.underConstruction,
      longDesc: t.statsWorkDesc,
      icon: Hammer,
      color: 'text-amber-400',
      iconColor: 'text-amber-500/20'
    },
    {
      label: t.statsCategories,
      value: categories.length - 1,
      shortDesc: t.projects,
      longDesc: t.statsCategoriesDesc,
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
      {stats.map((stat, idx) => {
        const isExpanded = expandedIdx === idx;
        
        return (
          <motion.div 
            key={idx}
            layout
            onClick={() => setExpandedIdx(isExpanded ? null : idx)}
            className={cn(
              "group relative bg-[#111427] border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg cursor-pointer",
              isExpanded && "ring-1 ring-white/30 bg-[#161a33]"
            )}
          >
            <stat.icon size={40} className={cn("absolute -top-1 -right-1 md:size-[60px] md:-top-2 md:-right-2 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500", stat.iconColor)} />
            
            <div className="relative z-10">
              <div className="text-[#6b7299] text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1 md:mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-1.5">
                  <stat.icon size={8} className={cn("md:size-[10px]", stat.color)} />
                  {stat.label}
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={10} className="opacity-40" />
                </motion.div>
              </div>
              
              <div className={cn("text-2xl md:text-4xl font-display font-black mb-1 md:mb-2", stat.color)}>
                {stat.value}
              </div>

              <div className="text-[#6b7299] text-[8px] md:text-[11px] leading-tight md:leading-relaxed font-bold">
                {stat.shortDesc}
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 text-[8px] md:text-[11px] mt-2 pt-2 border-t border-white/5 leading-relaxed">
                      {stat.longDesc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
