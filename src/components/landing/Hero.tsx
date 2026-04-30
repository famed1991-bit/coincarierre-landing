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
      <div className="max-w-[1100px] w-full mx-auto px-6 grid md:grid-cols-2 items-center flex-1 relative z-20 gap-0">
        <div className="py-4 md:py-8 md:pe-12 text-center md:text-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-semibold px-5 py-2.5 rounded-full mb-4 md:mb-6 tracking-wide backdrop-blur-md"
          >
            <Hotel className="w-4 h-4" />
            {t('hero.badge')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-white leading-tight tracking-tight mb-3 md:mb-5 drop-shadow-md flex flex-col items-center md:items-start w-full"
          >
            <span className="text-[clamp(20px,4.5vw,48px)] whitespace-nowrap">
              {t('hero.title1')} {t('hero.title2')}
            </span>
            <span className="text-[clamp(24px,5vw,48px)] text-lime whitespace-nowrap mt-1">
              {t('hero.title3')}
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-pale mb-5 md:mb-8 font-normal drop-shadow-sm flex flex-col items-center md:items-start w-full"
          >
            {t('hero.subtitle').split('\n').map((line, i) => (
              <span key={i} className="text-[clamp(12px,3vw,18px)] md:text-[clamp(16px,1.5vw,18px)] whitespace-nowrap leading-relaxed">
                {line}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-3 mb-3 justify-center md:justify-start"
          >
            <a
              href="https://coincarriere.com/register?type=company"
              className="inline-flex items-center gap-2.5 bg-lime hover:bg-lime-hover text-lime-dark px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group"
            >
              <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
              {t('hero.cta')}
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs text-white/60 mb-4 md:mb-8"
          >
            {t('hero.no_card')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-4 md:mt-8 bg-white/10 border border-white/15 rounded-2xl py-3 md:py-4 px-6 backdrop-blur-md w-fit mx-auto md:mx-0 text-left"
          >
            <div>
              <span className="block text-3xl font-extrabold text-lime">457+</span>
              <span className="block text-sm text-blue-pale/80 mt-1">{t('hero.stats.companies')}</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-lime">4 942+</span>
              <span className="block text-sm text-blue-pale/80 mt-1">{t('hero.stats.offers')}</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-lime">48h</span>
              <span className="block text-sm text-blue-pale/80 mt-1">{t('hero.stats.time')}</span>
            </div>
          </motion.div>
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
