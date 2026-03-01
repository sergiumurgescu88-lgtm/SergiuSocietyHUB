'use client';

import { CategoryInfo } from '@/types/project';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  category: CategoryInfo;
  count: number;
}

export default function SectionHeader({ category, count }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/10">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/5 border border-white/10">
        {category.emoji}
      </div>
      <div className="flex-1">
        <h2 className="font-display font-bold text-xl text-white leading-tight">
          {category.label}
        </h2>
        <p className="text-sm text-[#6b7299] mt-1">
          {category.description}
        </p>
      </div>
      <div className={cn(
        "font-display font-bold text-xs px-3 py-1 rounded-full text-white",
        category.color
      )}>
        {count} proiecte
      </div>
    </div>
  );
}
