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
          className="flex-shrink-0 relative z-20"
        >
          <img src="/logo-hero.png" alt="CoinCarrière Logo" className="h-12 md:h-16 lg:h-20 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]" />
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

      <div className="max-w-[1100px] w-full mx-auto px-6 grid md:grid-cols-2 items-center flex-1 relative z-20 gap-8 md:gap-0 pb-8">
        <div className="py-4 md:py-8 md:pe-12 text-center md:text-start flex flex-col h-full justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-white leading-tight tracking-tight mb-3 md:mb-5 drop-shadow-md flex flex-col items-center md:items-start w-full"
          >
            <span className="text-[clamp(28px,7vw,48px)] md:whitespace-nowrap">
              {t('hero.title1')}
            </span>
            <span className="text-[clamp(28px,7vw,48px)] md:whitespace-nowrap">
              {t('hero.title2')}
            </span>
            <span className="text-[clamp(44px,10vw,80px)] font-black text-lime md:whitespace-nowrap mt-1 leading-none uppercase">
              {t('hero.title3')}
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-pale mb-3 md:mb-4 font-normal drop-shadow-sm flex flex-col items-center md:items-start w-full"
          >
            {t('hero.subtitle').split('\n').map((line, i) => (
              <span key={i} className="text-[clamp(15px,4.5vw,18px)] md:text-[clamp(16px,1.5vw,18px)] md:whitespace-nowrap leading-relaxed text-center md:text-left mt-1 md:mt-0">
                {line}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-2 md:gap-3 mt-0 bg-white/10 border border-white/15 rounded-lg py-1 md:py-1.5 px-2.5 md:px-3 backdrop-blur-md w-fit mx-auto md:mx-0 text-left"
          >
            <div className="min-w-[45px]">
              <span className="block text-sm md:text-base font-extrabold text-lime whitespace-nowrap">457+</span>
              <span className="block text-[9px] md:text-[10px] text-blue-pale/80 mt-0.5">{t('hero.stats.companies')}</span>
            </div>
            <div className="min-w-[45px]">
              <span className="block text-sm md:text-base font-extrabold text-lime whitespace-nowrap">4 942+</span>
              <span className="block text-[9px] md:text-[10px] text-blue-pale/80 mt-0.5">{t('hero.stats.offers')}</span>
            </div>
            <div className="min-w-[45px]">
              <span className="block text-sm md:text-base font-extrabold text-lime whitespace-nowrap">48h</span>
              <span className="block text-[9px] md:text-[10px] text-blue-pale/80 mt-0.5">{t('hero.stats.time')}</span>
            </div>
          </motion.div>
        </div>
        
        <div className="py-4 md:py-8 flex flex-col justify-end items-center md:items-end h-full mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-2 w-full sm:w-auto"
          >
            <a
              href="https://coincarriere.com/register?type=company"
              className="inline-flex items-center gap-2.5 bg-lime hover:bg-lime-hover text-lime-dark px-6 md:px-10 py-3.5 md:py-4 rounded-2xl text-[16px] md:text-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group w-full justify-center text-center"
            >
              <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
              {t('hero.cta')}
            </a>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs text-white/80 mt-2 text-center"
            >
              {t('hero.no_card')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
