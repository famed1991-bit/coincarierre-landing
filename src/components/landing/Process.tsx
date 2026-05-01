import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Process() {
  const { t, dir } = useLanguage();
  const steps = [
    { id: 1, icon: "/icons/Publiez.png", title: t('process.step1.title'), desc: t('process.step1.desc') },
    { id: 2, icon: "/icons/Recevez.png", title: t('process.step2.title'), desc: t('process.step2.desc') },
    { id: 3, icon: "/icons/Évaluez.png", title: t('process.step3.title'), desc: t('process.step3.desc') },
    { id: 4, icon: "/icons/Embauchez.png", title: t('process.step4.title'), desc: t('process.step4.desc') },
  ];

  return (
    <section className="bg-[#082a41] py-16 px-6">
      <div className="max-w-[960px] mx-auto text-center">
        <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-white leading-tight mb-3">{t('process.title')}</h2>
        <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-300 max-w-[480px] mx-auto leading-relaxed">{t('process.subtitle')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-8 mt-12 relative">
          <div className="hidden md:block absolute top-[48px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-light z-0"></div>
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: step.id*0.1}}
              className="text-center px-4 relative z-10 group"
            >
              <div className="w-24 h-24 bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 shadow-sm rounded-full group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img src={step.icon} alt={step.title} referrerPolicy="no-referrer" className="w-full h-full object-cover scale-[1.15]" />
              </div>
              <h3 className="text-[clamp(24px,3vw,28px)] font-medium text-white mb-2">{step.title}</h3>
              <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-300 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
