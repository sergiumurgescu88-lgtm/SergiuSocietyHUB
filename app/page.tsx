'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Category } from '@/types/project';
import { projects } from '@/data/projects';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import SectionHeader from '@/components/SectionHeader';
import StatsOverview from '@/components/StatsOverview';
import ProjectPreviewModal from '@/components/ProjectPreviewModal';
import MobileSidebar from '@/components/MobileSidebar';
import DownloadSection from '@/components/DownloadSection';
import WildBotSection from '@/components/WildBotSection';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Project } from '@/types/project';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import NewsletterSection from '@/components/NewsletterSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PortfolioPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'construction'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToProject = (projectId: string) => {
    // Reset filters to show the project if it's hidden
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setActiveCategory('all');
      setStatusFilter('all');
      
      // Small delay to allow filters to update and elements to render
      setTimeout(() => {
        const element = document.getElementById(`project-${projectId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Optional: add a temporary highlight effect
          element.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-4', 'ring-offset-[#05070f]');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-4', 'ring-offset-[#05070f]');
          }, 2000);
        }
      }, 100);
    }
  };

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesStatus = statusFilter === 'all' 
      || (statusFilter === 'active' && (p.status === 'live' || p.status === 'demo'))
      || (statusFilter === 'construction' && p.status === 'under-construction');
    return matchesCategory && matchesStatus;
  });

  const displayedCategories = activeCategory === 'all'
    ? categories.filter(c => c.id !== 'all')
    : categories.filter(c => c.id === activeCategory);

  return (
    <main className="relative z-10">
      {/* Mobile Sidebar */}
      <MobileSidebar onProjectClick={scrollToProject} />

      {/* Background Mesh */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-violet-500/5 blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 px-4 text-center overflow-hidden">
        <div className="absolute top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]" />
          <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-indigo-300">
            {t.live} — 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            {t.heroTitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto text-[#6b7299] text-sm sm:text-base md:text-lg leading-relaxed mb-4"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-2xl mx-auto text-[#a1a7c5] text-xs sm:text-sm md:text-base leading-relaxed mb-10 md:mb-12"
        >
          {t.heroDescription}
        </motion.p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </section>

      {/* Stats Overview (Global) */}
      {activeCategory === 'all' && (
        <section className="max-w-7xl mx-auto px-4 pt-12">
          <StatsOverview />
        </section>
      )}

      {/* WhatsApp & Stats Section */}
      <div className="flex flex-col items-center gap-8 my-16 px-4">
        <WhatsAppCTA />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 bg-[#0c0f1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm md:max-w-md"
        >
          <div className="px-3 py-4 md:px-8 md:py-5 text-center border-r border-white/10">
            <div className="font-display font-extrabold text-xl md:text-3xl text-white">{projects.length}</div>
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#6b7299] mt-1">{t.projects}</div>
          </div>
          <div className="px-3 py-4 md:px-8 md:py-5 text-center border-r border-white/10">
            <div className="font-display font-extrabold text-xl md:text-3xl text-white">{categories.length - 1}</div>
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#6b7299] mt-1">{t.domains}</div>
          </div>
          <div className="px-3 py-4 md:px-8 md:py-5 text-center">
            <div className="font-display font-extrabold text-xl md:text-3xl text-white">100%</div>
            <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#6b7299] mt-1">{t.live}</div>
          </div>
        </motion.div>
      </div>

      {/* Wild Bot Section */}
      <WildBotSection />

      {/* Download Section */}
      <DownloadSection />

      {/* Filter Bar */}
      <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setStatusFilter('all')}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg",
              statusFilter === 'all' ? "bg-white text-black" : "bg-white/5 text-[#6b7299] hover:text-white"
            )}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setStatusFilter('active')}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg",
              statusFilter === 'active' ? "bg-emerald-500 text-white" : "bg-white/5 text-[#6b7299] hover:text-emerald-400"
            )}
          >
            {t.filterActive}
          </button>
          <button
            onClick={() => setStatusFilter('construction')}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg",
              statusFilter === 'construction' ? "bg-amber-500 text-white" : "bg-white/5 text-[#6b7299] hover:text-amber-400"
            )}
          >
            {t.filterWork}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedCategories.map((cat) => {
              const catProjects = filteredProjects.filter(p => p.category === cat.id);
              if (catProjects.length === 0) return null;

              return (
                <div key={cat.id} className="mb-20 last:mb-0">
                  <SectionHeader category={cat} count={catProjects.length} />
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {catProjects.map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onOpenPreview={setSelectedProject}
                      />
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Preview Modal */}
      <ProjectPreviewModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Newsletter Section */}
      <NewsletterSection onSubscribe={() => {}} />

      {/* Footer */}
      <footer className="relative pt-16 pb-20 px-4 text-center border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <h2 className="font-display font-extrabold text-2xl text-white mb-3">
          👋 Sergiu Murgescu
        </h2>
        <p className="text-[#6b7299] text-sm leading-relaxed mb-8">
          {t.footerText}<br />
          {t.footerClick}
        </p>
        
        <div className="inline-block px-6 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 font-semibold text-xs">
          ✦ {t.footerPassion}
        </div>
      </footer>
    </main>
  );
}
