'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function WhatsAppCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.28 }}
      className="max-w-2xl mx-auto px-4 mb-12"
    >
      <div className="group relative bg-[#111427] border border-emerald-500/20 rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden transition-all hover:border-emerald-500/40 shadow-[0_0_30px_rgba(37,211,102,0.05)] hover:shadow-[0_0_40px_rgba(37,211,102,0.1)]">
        {/* WhatsApp Icon Background Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#25D366]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#25D366]/20 transition-colors" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shadow-lg shadow-[#25D366]/10">
              <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" />
            </div>
            <h3 className="text-lg md:text-2xl font-display font-black text-white tracking-tight">
              {t.whatsappHeadline}
            </h3>
          </div>

          <p className="text-[#a1a7c5] text-xs md:text-base leading-relaxed mb-6">
            {t.whatsappBody}
          </p>

          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#25D366]/60 mb-6 md:mb-8 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#25D366]" />
            {t.whatsappTagline}
          </div>

          <a
            href="https://wa.me/40768676141"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 md:gap-3 w-full py-3.5 md:py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm md:text-base font-black rounded-xl md:rounded-2xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-[0.98]"
          >
            <MessageCircle size={18} className="md:w-5 md:h-5" fill="currentColor" />
            {t.whatsappButton}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
