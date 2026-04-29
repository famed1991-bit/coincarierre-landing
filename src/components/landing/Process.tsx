import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Process() {
  const { t, dir } = useLanguage();
  const steps = [
    { id: 1, icon: "/icons/publiez.png", title: t('process.step1.title'), desc: t('process.step1.desc') },
    { id: 2, icon: "/icons/recevez.png", title: t('process.step2.title'), desc: t('process.step2.desc') },
    { id: 3, icon: "/icons/evaluez.png", title: t('process.step3.title'), desc: t('process.step3.desc') },
    { id: 4, icon: "/icons/embauchez.png", title: t('process.step4.title'), desc: t('process.step4.desc') },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[960px] mx-auto text-center">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-[#082a41] leading-tight tracking-[-0.5px] mb-3">{t('process.title')}</h2>
        <p className="text-base text-gray-500 max-w-[480px] mx-auto leading-relaxed font-light">{t('process.subtitle')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-8 mt-12 relative">
          <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-light z-0"></div>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: step.id*0.1}}
              className="text-center px-4 relative z-10 group"
            >
              <div className="w-24 h-24 bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 p-1 shadow-sm rounded-full group-hover:-translate-y-1 group-hover:shadow-md transition-all overflow-hidden">
                <img src={step.icon} alt={step.title} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-[0.82rem] text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
