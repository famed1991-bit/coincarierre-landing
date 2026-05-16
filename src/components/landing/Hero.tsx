import { motion } from "motion/react";
import { Hotel, Plus } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Hero() {
  const { t, dir } = useLanguage();
  return (
    <section id="hero" className="relative overflow-hidden flex-1 flex flex-col min-h-[500px]">
      <img
        alt="Équipe d'hôtellerie et restauration"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="/hero.jpg"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-dark/90 via-blue-dark/70 to-blue-dark/30 md:from-blue-dark/85 md:via-blue-mid/55 md:to-blue-main/20"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-dark/70 via-transparent to-transparent"></div>
      <div className={`absolute -top-32 ${dir === 'rtl' ? '-left-32' : '-right-32'} w-[500px] h-[500px] rounded-full bg-blue-light/10 blur-[100px] pointer-events-none z-10`}></div>
      <div className="max-w-[1100px] w-full mx-auto px-6 pt-6 md:pt-8 relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 relative z-20 flex items-center justify-center"
        >
          {/* White glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] bg-white/40 blur-[30px] rounded-[100%] -z-10 pointer-events-none"></div>
          
          <img src="/logo-hero.png" alt="CoinCarrière Logo" className="relative h-12 md:h-16 lg:h-20 object-contain drop-shadow-sm" />
        </motion.div>

        {/* Badge */}
        <div className="relative md:absolute inset-x-0 flex justify-center pointer-events-none w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full tracking-wide backdrop-blur-md whitespace-nowrap pointer-events-auto"
          >
            <Hotel className="w-3.5 h-3.5 md:w-4 md:h-4" />
            {t('hero.badge')}
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col justify-center flex-1 relative z-20 pb-8 pt-4 md:pt-12">
        
        {/* Title and Subtitle Area */}
        <div className="w-full md:w-1/2 md:pe-12 text-center md:text-start flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-white leading-tight tracking-tight mb-3 md:mb-5 flex flex-col items-center md:items-start w-full"
          >
            <span className="text-[clamp(26px,6vw,46px)] md:whitespace-nowrap drop-shadow-md">
              {t('hero.title1')}
            </span>
            <span className="text-[clamp(26px,6vw,46px)] md:whitespace-nowrap drop-shadow-md">
              {t('hero.title2')}
            </span>
            <span className="text-[clamp(26px,6vw,46px)] md:whitespace-nowrap drop-shadow-md">
              {t('hero.title3')}
            </span>
            <span className="text-[clamp(36px,10vw,72px)] font-black text-lime md:whitespace-nowrap mt-1 leading-none uppercase drop-shadow-lg">
              {t('hero.title4')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/90 font-normal drop-shadow-sm text-[clamp(14px,4vw,18px)] md:text-[clamp(16px,1.5vw,18px)] leading-relaxed text-center md:text-left mt-4 md:mt-6 w-full max-w-[600px]"
          >
            <span>{t('hero.subtitle1')}</span>
            <span className="ml-1">{t('hero.subtitle2')}</span>
          </motion.p>
        </div>

        {/* Stats and CTA Area */}
        <div className="w-full flex flex-col md:flex-row items-center mt-8 md:mt-6 gap-6 md:justify-between">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row items-center gap-6 md:gap-8 bg-blue-dark/60 border border-white/20 backdrop-blur-md rounded-2xl px-6 py-4 w-fit text-left"
            >
              <div className="flex flex-col items-start">
                <span className="block text-base md:text-lg font-bold text-lime whitespace-nowrap leading-none">457+</span>
                <span className="block text-[10px] md:text-xs text-white/80 mt-1 tracking-wide">{t('hero.stats.companies')}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="block text-base md:text-lg font-bold text-lime whitespace-nowrap leading-none">4 942+</span>
                <span className="block text-[10px] md:text-xs text-white/80 mt-1 tracking-wide">{t('hero.stats.offers')}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="block text-base md:text-lg font-bold text-lime whitespace-nowrap leading-none">48h</span>
                <span className="block text-[10px] md:text-xs text-white/80 mt-1 tracking-wide">{t('hero.stats.time')}</span>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-2 w-full sm:w-auto"
            >
              <a
                href="https://coincarriere.com/register?type=company"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => typeof window !== 'undefined' && (window as any).fbq?.('track', 'Lead')}
                className="inline-flex items-center gap-2.5 bg-lime hover:bg-lime-hover text-lime-dark px-6 md:px-10 py-3.5 md:py-4 rounded-xl text-[16px] md:text-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group w-full justify-center text-center"
              >
                <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
                {t('hero.cta')}
              </a>
              {/* Hidden on desktop since image doesn't show it, but kept on mobile or just commented out */}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
