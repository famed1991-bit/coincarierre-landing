import { motion } from "motion/react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-blue-bg py-16 px-6">
      <div className="max-w-[1024px] mx-auto relative">
        <div className="text-center md:text-left md:max-w-[70%]">
          <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-[#082a41] leading-tight mb-3">{t('features.title')}</h2>
          <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-500 leading-relaxed">{t('features.subtitle')}</p>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center md:justify-end gap-4 mt-8 md:-mt-14 mb-8">
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-blue-light/30 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#082a41]" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-blue-light/30 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#082a41]" />
          </button>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}}
              className="bg-white rounded-2xl p-6 border border-blue-light/40 hover:border-blue-light hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left min-w-[280px] w-full md:min-w-[calc(50%-12px)] snap-center md:snap-start shrink-0"
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
      
      {/* Hide scrollbar for webkit */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
