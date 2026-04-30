import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section id="final-cta" className="relative overflow-hidden text-center py-20 px-6 bg-gradient-to-br from-blue-dark via-blue-mid to-blue-main">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-light/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-pale/10 blur-[60px] pointer-events-none"></div>
      <motion.div
        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
        className="relative z-10 max-w-[640px] mx-auto"
      >
        <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-white leading-[1.3] mb-3">
          {t('cta.title')}
        </h2>
        <p className="text-[clamp(16px,2vw,18px)] font-normal text-blue-pale/70 mb-8 leading-relaxed">
          {t('cta.subtitle')}
        </p>
        <a
          href="https://coincarriere.com/register?type=company"
          className="inline-flex items-center gap-2.5 bg-lime hover:bg-lime-hover text-lime-dark px-8 py-3.5 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(180,220,2,0.3)] hover:shadow-[0_8px_28px_rgba(180,220,2,0.4)] group"
        >
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          {t('cta.btn')}
        </a>
      </motion.div>
    </section>
  );
}
