import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Features() {
  const { t } = useLanguage();
  const features = [
    { 
      icon: (
        <img src="/icon-sec-4/gestion-de-candidatures.png" alt="Gestion de Candidatures" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f1.title'), 
      desc: t('features.f1.desc') 
    },
    { 
      icon: (
        <img src="/icon-sec-4/decisions-collectives.png" alt="Décisions collectives" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f2.title'), 
      desc: t('features.f2.desc') 
    },
    { 
      icon: (
        <img src="/icon-sec-4/planification-entretiens.png" alt="Planification d'Entretiens" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f3.title'), 
      desc: t('features.f3.desc') 
    },
    { 
      icon: (
        <img src="/icon-sec-4/page-carriere.png" alt="Page Carrière" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f4.title'), 
      desc: t('features.f4.desc') 
    },
    { 
      icon: (
        <img src="/icon-sec-4/reporting-analytics.png" alt="Reporting & Analytics" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f5.title'), 
      desc: t('features.f5.desc') 
    },
    { 
      icon: (
        <img src="/icon-sec-4/support-prioritaire.png" alt="Support Prioritaire" className="w-20 h-20 object-contain" />
      ), 
      title: t('features.f6.title'), 
      desc: t('features.f6.desc') 
    },
  ];

  return (
    <section className="bg-blue-bg py-16 px-6">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center">
          <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-[#082a41] leading-tight mb-3">{t('features.title')}</h2>
          <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-500 max-w-[480px] mx-auto leading-relaxed">{t('features.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}}
              className="bg-white rounded-2xl p-6 border border-blue-light/40 hover:border-blue-light hover:shadow-sm hover:-translate-y-0.5 transition-all group flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left"
            >
              <div className="shrink-0 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="flex-1 mt-2 sm:mt-0">
                <h3 className="text-[clamp(24px,3vw,28px)] font-medium text-gray-900 mb-2">{f.title}</h3>
                <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-500 leading-relaxed max-w-sm mx-auto sm:mx-0">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
