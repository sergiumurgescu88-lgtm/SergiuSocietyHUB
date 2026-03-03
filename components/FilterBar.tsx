'use client';

import { Category } from '@/types/project';
import { categories } from '@/data/categories';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const getCount = (catId: Category) => {
    if (catId === 'all') return projects.length;
    return projects.filter(p => p.category === catId).length;
  };

  return (
    <div className="sticky top-0 z-50 bg-[#05070f]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={cn(
              "flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 text-sm font-bold transition-all hover:border-white/20 active:scale-95 shadow-lg",
              activeCategory === cat.id
                ? cat.id === 'all'
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-transparent"
                  : `${cat.color} text-white border-transparent ${cat.id === 'ai' || cat.id === 'mkt' ? 'text-black' : ''}`
                : "bg-white/5 text-[#6b7299] hover:text-[#e2e8ff]"
            )}
          >
            <span className="text-lg">{cat.emoji}</span>
            <span>
              {cat.id === 'all' ? t.filterAll : 
               cat.id === 'resto' ? t.catResto :
               cat.id === 'ai' ? t.catAI :
               cat.id === 'mkt' ? t.catMkt :
               cat.id === 'energy' ? t.catEnergy :
               cat.id === 'ops' ? t.catOps :
               cat.id === 'biz' ? t.catBiz :
               cat.id === 'security' ? t.catSecurity :
               cat.id === 'life' ? t.catLife :
               cat.label}
            </span>
            <span className="text-[10px] font-black bg-black/20 px-2 py-0.5 rounded-full min-w-[20px] text-center">
              {getCount(cat.id)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
