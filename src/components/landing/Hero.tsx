import { motion } from "motion/react";
import { Hotel, Plus } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Hero() {
  const { t, dir } = useLanguage();
  return (
    <section id="hero" className="relative overflow-hidden min-h-[640px]">
      <img
        alt="Équipe d'hôtellerie et restauration"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="/hero.jpg"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-dark/90 via-blue-dark/70 to-blue-dark/30 md:from-blue-dark/85 md:via-blue-mid/55 md:to-blue-main/20"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-dark/70 via-transparent to-transparent"></div>
      <div className={`absolute -top-32 ${dir === 'rtl' ? '-left-32' : '-right-32'} w-[500px] h-[500px] rounded-full bg-blue-light/10 blur-[100px] pointer-events-none z-10`}></div>
      <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 items-center min-h-[640px] relative z-20 gap-0">
        <div className="py-20 md:pe-12 text-center md:text-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 tracking-wide backdrop-blur-md"
          >
            <Hotel className="w-4 h-4" />
            {t('hero.badge')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.0rem,4.0vw,3.5rem)] font-black text-white leading-tight tracking-tight mb-5 drop-shadow-md"
          >
            {t('hero.title1')}<br />
            {t('hero.title2')}<br />
            <span className="text-lime">{t('hero.title3')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[clamp(1.2rem,1.8vw,1.5rem)] text-blue-pale mb-8 leading-relaxed font-light max-w-[480px] mx-auto md:mx-0 drop-shadow-sm"
          >
            {t('hero.subtitle')}
          </motion.p>
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
            className="text-xs text-white/60 mb-8"
          >
            {t('hero.no_card')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-8 bg-white/10 border border-white/15 rounded-2xl py-4 px-6 backdrop-blur-md w-fit mx-auto md:mx-0 text-left"
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
