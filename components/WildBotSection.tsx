'use client';

import { motion } from 'motion/react';
import { Zap, ShieldCheck, Send, Euro, ArrowRight, ExternalLink, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WildBotSection() {
  const features = [
    {
      label: 'Mesaje per campanie',
      value: '2.000+',
      icon: Send,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      label: 'Șansă de detecție',
      value: '0%',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      label: 'Rată de livrare',
      value: '~95%',
      icon: Zap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    },
    {
      label: 'Abonament lunar',
      value: '0 €',
      icon: Euro,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="relative bg-[#0c0f1e] border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] -mr-64 -mt-64 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] -ml-48 -mb-48" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-8 shadow-inner"
            >
              <Zap size={14} className="animate-pulse" />
              INOVATIVE
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight leading-[1.1]">
              Nu e un bot.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                E un om digital.
              </span>
            </h2>
            
            <p className="text-[#a1a7c5] text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-medium">
              Primul sistem de outreach WhatsApp care nu poate fi detectat — pentru că se comportă exact ca un om real. Mesaje unice, timpi umani, zero ban.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <motion.a
                href="https://wild-bot-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all hover:bg-indigo-500 hover:text-white"
              >
                <span className="text-lg">📱 Vreau sistemul</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <a 
                href="#how-it-works" 
                className="text-[#6b7299] hover:text-white font-bold text-sm flex items-center gap-2 transition-colors group"
              >
                Cum funcționează
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
                <div className="text-white text-xs font-black uppercase tracking-widest">Human Behavior Engine</div>
                <div className="text-[#6b7299] text-[10px] font-bold mt-1">Algoritm de simulare a dactilografierii și pauzelor umane.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
