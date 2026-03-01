'use client';

import { motion, Variants } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ProjectCard({ project, onOpenPreview }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const categoryColors: Record<string, string> = {
    resto: 'before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-400 hover:border-indigo-500/30',
    ai: 'before:bg-gradient-to-r before:from-cyan-500 before:to-cyan-400 hover:border-cyan-500/30',
    mkt: 'before:bg-gradient-to-r before:from-amber-500 before:to-amber-400 hover:border-amber-500/30',
    energy: 'before:bg-gradient-to-r before:from-emerald-500 before:to-emerald-400 hover:border-emerald-500/30',
    ops: 'before:bg-gradient-to-r before:from-violet-500 before:to-violet-400 hover:border-violet-500/30',
    biz: 'before:bg-gradient-to-r before:from-orange-500 before:to-orange-400 hover:border-orange-500/30',
    life: 'before:bg-gradient-to-r before:from-pink-500 before:to-pink-400 hover:border-pink-500/30',
  };

  const btnColors: Record<string, string> = {
    resto: 'bg-indigo-600',
    ai: 'bg-cyan-500 text-black',
    mkt: 'bg-amber-500 text-black',
    energy: 'bg-emerald-500',
    ops: 'bg-violet-500',
    biz: 'bg-orange-500',
    life: 'bg-pink-500',
  };

  return (
    <motion.div
      layout
      id={`project-${project.id}`}
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        scale: 1.01,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpenPreview(project)}
      className={cn(
        "group relative bg-[#111427] border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:shadow-black/50 cursor-pointer h-full flex flex-col",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:rounded-t-2xl",
        categoryColors[project.category]
      )}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.06)_0%,transparent_70%)]" />

      {/* Background Video (Desktop Only) */}
      {project.videoUrl && (
        <div className="absolute inset-0 z-0 hidden md:block overflow-hidden rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-[#111427]/40 group-hover:bg-[#111427]/60 transition-colors duration-700" />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <span className="block text-2xl md:text-3xl mb-3 md:mb-4">{project.emoji}</span>
        <h3 className="font-display font-bold text-white text-base md:text-lg mb-1.5 md:mb-2 leading-tight">
          {project.name}
        </h3>
        <p className="text-[#6b7299] text-xs md:text-sm leading-relaxed mb-5 md:mb-6 group-hover:text-white/90 transition-colors">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-2 md:gap-4 mt-auto">
          {project.status === 'under-construction' ? (
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold bg-white/5 text-[#6b7299] border border-white/10 cursor-not-allowed">
              {t.underConstruction}
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg",
                btnColors[project.category]
              )}
            >
              {t.viewProject} <ExternalLink size={14} className="md:size-4" />
            </a>
          )}

          {project.status === 'live' ? (
            <span className="inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.live}
            </span>
          ) : project.status === 'demo' ? (
            <span className="inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-400" />
              DEMO
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold bg-white/5 text-[#6b7299] border border-white/10 uppercase tracking-wider">
              OFFLINE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
