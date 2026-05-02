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
      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center md:max-w-[70%] mx-auto mb-4">
          <h2 className="text-[clamp(30px,4vw,36px)] font-bold text-[#082a41] leading-tight mb-3">{t('features.title')}</h2>
          <p className="text-[clamp(16px,2vw,18px)] font-normal text-gray-500 leading-relaxed">{t('features.subtitle')}</p>
        </div>

        {/* Carousel Container Wrapper */}
        <div className="relative mt-8 md:mt-12 w-full mx-auto px-0 md:px-16 group/carousel">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className={`absolute left-2 md:left-0 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110 hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)]'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#082a41]" />
          </button>

          {/* Carousel Track */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 md:px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.1}}
                className="bg-white rounded-[24px] p-8 border border-blue-light/40 hover:border-[#082a41]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center w-[280px] md:w-[320px] snap-center shrink-0"
              >
                <div className="shrink-0 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#082a41] mb-3">{f.title}</h3>
                  <p className="text-[15px] md:text-[16px] font-normal text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className={`absolute right-2 md:right-0 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110 hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)]'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#082a41]" />
          </button>
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
