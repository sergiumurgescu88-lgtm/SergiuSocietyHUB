'use client';

import { motion } from 'motion/react';
import { Zap, ShieldCheck, Send, Euro, ArrowRight, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function WildBotSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      label: t.wildBotStatMessages,
      value: '2.000+',
      icon: Send,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      label: t.wildBotStatDetection,
      value: '0%',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      label: t.wildBotStatDelivery,
      value: '~95%',
      icon: Zap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    },
    {
      label: t.wildBotStatSubscription,
      value: '0 €',
      icon: Euro,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-20">
      <div className="relative bg-[#0c0f1e] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] -mr-64 -mt-64 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] -ml-48 -mb-48" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 md:mb-8 shadow-inner"
            >
              <Zap size={14} className="animate-pulse" />
              {t.wildBotBadge}
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.1]">
              {t.wildBotTitle1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                {t.wildBotTitle2}
              </span>
            </h2>
            
            <p className="text-[#a1a7c5] text-sm md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 font-medium">
              {t.wildBotSubtitle}
            </p>

            {/* Presentation Video */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-10 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black/40 group"
            >
              <iframe 
                src="https://drive.google.com/file/d/1i3WW5jxT9TL-NzcpK7AmmO5DFSL93XZN/preview" 
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <motion.a
                href="https://wild-bot-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-5 bg-[#111427] border border-emerald-500/30 text-white font-black rounded-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all hover:border-emerald-500/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                
                <div className="w-6 h-6 flex items-center justify-center text-[#25D366]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-lg">{t.wildBotButton}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <a 
                href="#how-it-works" 
                className="group px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[#6b7299] hover:text-white hover:bg-white/10 hover:border-white/20 font-bold text-sm flex items-center gap-2 transition-all"
              >
                {t.wildBotHowItWorks}
                <ArrowRight size={16} className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[450px] shrink-0">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110 duration-500", feature.bgColor, feature.color)}>
                    <feature.icon size={24} />
                  </div>
                  <div className={cn("text-2xl md:text-3xl font-display font-black mb-1", feature.color)}>
                    {feature.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#6b7299] font-black">
                    {feature.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative "Digital Human" Badge */}
            <div className="mt-8 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <div className="text-white text-xs font-black uppercase tracking-widest">{t.wildBotBehaviorBadge}</div>
                <div className="text-[#6b7299] text-[10px] font-bold mt-1">{t.wildBotBehaviorDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
