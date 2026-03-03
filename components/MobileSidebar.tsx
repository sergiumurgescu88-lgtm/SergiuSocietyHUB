'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface MobileSidebarProps {
  onProjectClick: (projectId: string) => void;
}

export default function MobileSidebar({ onProjectClick }: MobileSidebarProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleProjectClick = (projectId: string) => {
    onProjectClick(projectId);
    setIsOpen(false);
  };

  const categoryStyles: Record<string, { text: string; bg: string; border: string }> = {
    resto: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    ai: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    mkt: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    energy: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    ops: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
    biz: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    life: { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    security: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  };

  return (
    <>
      {/* Mobile Trigger Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed bottom-6 right-6 z-[60] p-4 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 active:scale-90 transition-transform flex items-center justify-center"
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-[80] w-[85%] max-w-[320px] bg-[#0c0f1e] border-r border-white/10 flex flex-col lg:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0e1225]">
                <div>
                  <h2 className="text-lg font-display font-bold text-white tracking-tight">SSociety HUB</h2>
                  <p className="text-[10px] text-[#6b7299] uppercase tracking-widest font-bold">{t.projects}</p>
                </div>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <button
                    onClick={toggleSidebar}
                    className="p-2.5 rounded-xl bg-white/5 text-[#6b7299] hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-8">
                {categories.filter(c => c.id !== 'all').map((cat) => {
                  const catProjects = projects.filter(p => p.category === cat.id);
                  if (catProjects.length === 0) return null;
                  const style = categoryStyles[cat.id] || categoryStyles.resto;

                  return (
                    <div key={cat.id} className="space-y-3">
                      <div className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-lg border",
                        style.bg,
                        style.border
                      )}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{cat.emoji}</span>
                          <h3 className={cn("text-[11px] font-black uppercase tracking-widest", style.text)}>
                            {cat.id === 'resto' ? t.catResto :
                             cat.id === 'ai' ? t.catAI :
                             cat.id === 'mkt' ? t.catMkt :
                             cat.id === 'energy' ? t.catEnergy :
                             cat.id === 'ops' ? t.catOps :
                             cat.id === 'biz' ? t.catBiz :
                             cat.id === 'life' ? t.catLife :
                             cat.id === 'security' ? t.catSecurity :
                             cat.label}
                          </h3>
                        </div>
                        <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/10", style.text)}>
                          {catProjects.length}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2 pl-1">
                        {catProjects.map((project) => (
                          <button
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-sm text-[#a1a7c5] hover:bg-white/5 hover:text-white transition-all text-left group active:bg-white/10 active:scale-[0.98] border border-transparent hover:border-white/5 shadow-sm"
                          >
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform group-hover:bg-white/10 shadow-inner">
                              {project.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-white/90 truncate group-hover:text-white transition-colors">{project.name}</div>
                              <div className="text-[11px] text-[#6b7299] truncate font-medium mt-0.5">
                                {project.status === 'live' ? `● ${t.live}` : project.status === 'demo' ? '● Demo' : `○ ${t.underConstruction}`}
                              </div>
                            </div>
                            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                  <p className="text-[10px] text-indigo-300 leading-relaxed">
                    {t.footerClick}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
