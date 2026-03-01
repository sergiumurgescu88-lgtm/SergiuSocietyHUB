'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function NewsletterSection({ onSubscribe }: { onSubscribe: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubscribe();
    }, 1500);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <div className="relative bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 border border-indigo-500/30 rounded-[2.5rem] p-8 md:p-12 overflow-hidden text-center shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8 shadow-xl"
          >
            <Sparkles className="text-amber-400" size={32} />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight leading-tight">
            {t.freeAccessTitle}
          </h2>
          <p className="text-[#a1a7c5] text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium">
            {t.freeAccessSubtitle}
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 font-black shadow-lg">
                <CheckCircle2 size={24} />
                {t.successSubscribe}
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7299]" size={20} />
                <input
                  type="email"
                  required
                  placeholder={t.subscribePlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-[#4a4e69] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all text-sm font-medium"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-400 hover:text-white transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap active:scale-95"
              >
                {isSubmitting ? '...' : t.subscribeButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
