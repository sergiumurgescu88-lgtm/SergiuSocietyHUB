'use client';

import { CategoryInfo } from '@/types/project';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

interface SectionHeaderProps {
  category: CategoryInfo;
  count: number;
}

export default function SectionHeader({ category, count }: SectionHeaderProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const categoryLabel = 
    category.id === 'all' ? t.filterAll : 
    category.id === 'resto' ? t.catResto :
    category.id === 'ai' ? t.catAI :
    category.id === 'mkt' ? t.catMkt :
    category.id === 'energy' ? t.catEnergy :
    category.id === 'ops' ? t.catOps :
    category.id === 'biz' ? t.catBiz :
    category.id === 'security' ? t.catSecurity :
    category.id === 'life' ? t.catLife :
    category.label;

  return (
    <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/10">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/5 border border-white/10">
        {category.emoji}
      </div>
      <div className="flex-1">
        <h2 className="font-display font-bold text-xl text-white leading-tight">
          {categoryLabel}
        </h2>
        <p className="text-sm text-[#6b7299] mt-1">
          {category.description}
        </p>
      </div>
      <div className={cn(
        "font-display font-bold text-xs px-3 py-1 rounded-full text-white",
        category.color
      )}>
        {count} {t.projectsCount}
      </div>
    </div>
  );
}
