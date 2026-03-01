'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Users, Lightbulb, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

function DetailsPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full h-full p-8 md:p-10 overflow-y-auto no-scrollbar bg-[#0c0f1e] flex flex-col">
      <div className="mb-8">
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl mb-6 block"
        >
          {project.emoji}
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 leading-tight tracking-tight">
          {project.name}
        </h2>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {project.status === 'live' ? (
            <span className="px-4 py-2 rounded-full text-[11px] font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-[0.15em]">
              {t.live}
            </span>
          ) : project.status === 'demo' ? (
            <span className="px-4 py-2 rounded-full text-[11px] font-black bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-[0.15em]">
              DEMO
            </span>
          ) : (
            <span className="px-4 py-2 rounded-full text-[11px] font-black bg-white/5 text-[#6b7299] border border-white/10 uppercase tracking-[0.15em]">
              OFFLINE
            </span>
          )}
          <span className="px-4 py-2 rounded-full text-[11px] font-black bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-[0.15em]">
            {project.category}
          </span>
        </div>
      </div>

      <div className="space-y-8 flex-1">
        <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-3 text-indigo-400 mb-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <Info size={18} />
            </div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em]">{t.whatIsThis}</h4>
          </div>
          <p className="text-[#e2e8ff] text-base leading-relaxed font-medium">{project.description}</p>
        </motion.section>

        <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 text-cyan-400 mb-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <Users size={18} />
            </div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em]">{t.whoIsItFor}</h4>
          </div>
          <p className="text-[#e2e8ff] text-base leading-relaxed font-medium">{project.targetAudience}</p>
        </motion.section>

        <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-3 text-amber-400 mb-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Lightbulb size={18} />
            </div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em]">{t.whyInnovative}</h4>
          </div>
          <p className="text-[#e2e8ff] text-base leading-relaxed font-medium">{project.innovationReason}</p>
        </motion.section>
      </div>

      <div className="mt-10 pt-8 border-t border-white/10">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-3 w-full py-5 rounded-[1.5rem] text-base font-black transition-all hover:scale-[1.02] active:scale-[0.95] shadow-2xl",
            project.status === 'under-construction'
              ? "bg-white/5 text-[#6b7299] cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-indigo-500/40"
          )}
          onClick={(e) => project.status === 'under-construction' && e.preventDefault()}
        >
          {project.status === 'under-construction' ? t.underConstruction : t.openSite}
          <ExternalLink size={18} />
        </a>
        <p className="text-center mt-5 text-[11px] font-bold text-[#6b7299] uppercase tracking-widest">
          {t.footerClick}
        </p>
      </div>
    </div>
  );
}

function FullscreenModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col"
    >
      {/* Top bar */}
      <div className="relative flex items-center justify-between px-5 py-3 bg-[#0c0f1e]/95 border-b border-white/10 backdrop-blur-xl shrink-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl">{project.emoji}</span>
          <div>
            <span className="text-white font-black text-sm leading-tight block">{project.name}</span>
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Live
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-black hover:bg-indigo-500 transition-colors"
          >
            <ExternalLink size={13} />
            Open Website
          </a>
          <button
            onClick={() => setPanelOpen((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold hover:border-white/20 hover:text-white transition-all"
          >
            {panelOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            <span className="hidden sm:inline">Detalii</span>
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main area: iframe + sliding details panel */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Iframe — full area */}
        <div className="flex-1 relative bg-black">
          {project.status === 'under-construction' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
              <div className="text-7xl mb-6 animate-bounce">🚧</div>
              <h3 className="text-2xl font-display font-black text-white mb-3">În construcție</h3>
            </div>
          ) : (
            <iframe
              src={project.link}
              className="w-full h-full border-none"
              title={project.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </div>

        {/* Details panel — slides in from the right on desktop, from bottom on mobile */}
        <AnimatePresence>
          {panelOpen && (
            <>
              {/* Mobile: bottom sheet */}
              <motion.div
                key="mobile-panel"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                className="md:hidden absolute inset-x-0 bottom-0 h-[75vh] z-20 rounded-t-3xl border-t border-white/10 overflow-hidden shadow-2xl"
              >
                {/* drag handle */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full z-10" />
                <DetailsPanel project={project} onClose={onClose} />
              </motion.div>

              {/* Desktop: right panel */}
              <motion.div
                key="desktop-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                className="hidden md:block w-[380px] lg:w-[420px] border-l border-white/10 shrink-0 overflow-hidden shadow-2xl"
              >
                <DetailsPanel project={project} onClose={onClose} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const { language } = useLanguage();
  const t = translations[language];
  if (!project) return null;

  if (project.fullscreen) {
    return (
      <AnimatePresence>
        <FullscreenModal project={project} onClose={onClose} />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#05070f]/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 40 }}
          className="relative w-full max-w-6xl h-[98vh] md:h-[90vh] bg-[#0c0f1e] border border-white/10 rounded-t-[2.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Handle */}
          <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full z-[70]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-[70] p-3.5 rounded-full bg-black/80 text-white hover:bg-white/10 transition-all border border-white/20 shadow-2xl backdrop-blur-xl active:scale-90"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Left Side: Preview */}
          <div className="w-full md:w-2/3 h-[45vh] sm:h-[50vh] md:h-auto bg-black relative group shrink-0 border-b md:border-b-0 md:border-r border-white/10">
            {project.status === 'under-construction' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <div className="text-7xl mb-6 animate-bounce">🚧</div>
                <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-3">{t.underConstruction}</h3>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <iframe
                  src={project.link}
                  className="w-full h-full border-none"
                  title={project.name}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 to-transparent h-12" />
              </div>
            )}
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/3 overflow-y-auto no-scrollbar flex-1">
            <DetailsPanel project={project} onClose={onClose} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
