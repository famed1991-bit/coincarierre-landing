import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));

  return (
    <section className="bg-blue-bg py-16 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center md:max-w-[70%] mx-auto mb-8 md:mb-12">
          <h2 className="text-[clamp(30px,4vw,36px)] font-bold text-[#082a41] leading-tight mb-3">{t('features.title')}</h2>
          <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-500 leading-relaxed">{t('features.subtitle')}</p>
        </div>

        {/* Centered Single-Card Carousel */}
        <div className="relative w-full max-w-[600px] mx-auto px-8 md:px-0">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-[#082a41]" />
          </button>

          {/* Active Card */}
          <div className="overflow-visible pb-8 pt-4">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-b from-white to-[#f4f9fd] rounded-[32px] p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-blue-light/50 flex flex-col items-center text-center w-full mx-auto"
            >
              <div className="shrink-0 flex items-center justify-center mb-8 w-28 h-28 bg-white rounded-[24px] shadow-sm border border-blue-light/30">
                {features[currentIndex].icon}
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#082a41] mb-4">{features[currentIndex].title}</h3>
                <p className="text-[16px] md:text-[18px] font-normal text-gray-600 leading-relaxed max-w-[400px] mx-auto">{features[currentIndex].desc}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-[#082a41]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-2 mb-4">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#082a41] w-8' : 'bg-[#082a41]/20 w-2.5 hover:bg-[#082a41]/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
