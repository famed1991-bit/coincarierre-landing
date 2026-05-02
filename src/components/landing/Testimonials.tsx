import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { useState, useEffect } from "react";

export function Testimonials() {
  const { t, dir } = useLanguage();

  const testimonials = [
    {
      quote: t('testi.t1.quote'),
      name: t('testi.t1.name'),
      role: t('testi.t1.role'),
      initials: "KA",
      image: "/testimonials/t2.jpg",
      rating: 4.5
    },
    {
      quote: t('testi.t2.quote'),
      name: t('testi.t2.name'),
      role: t('testi.t2.role'),
      initials: "SB",
      image: "/testimonials/t1.jpg",
      rating: 5
    },
    {
      quote: t('testi.t3.quote'),
      name: t('testi.t3.name'),
      role: t('testi.t3.role'),
      initials: "YM",
      image: "/testimonials/t3.jpg",
      rating: 4.2
    },
    {
      quote: t('testi.t4.quote'),
      name: t('testi.t4.name'),
      role: t('testi.t4.role'),
      initials: "RF",
      image: "/testimonials/t4.jpg",
      rating: 5
    },
    {
      quote: t('testi.t5.quote'),
      name: t('testi.t5.name'),
      role: t('testi.t5.role'),
      initials: "OB",
      image: "",
      rating: 4.8
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds auto-play for slow reading
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="bg-blue-bg px-6 pt-24 pb-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(28px,4vw,34px)] font-bold text-[#082a41] leading-tight">
            Que disent nos clients
          </h2>
        </div>
        
        <div className="relative max-w-[800px] mx-auto px-8 md:px-0">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all hover:scale-110 hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#082a41]" />
          </button>

          <div className="overflow-visible py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[32px] border border-gray-100 p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col items-center text-center w-full"
              >
                <div className="flex items-center justify-center gap-1 mb-8" dir="ltr">
                  {[1, 2, 3, 4, 5].map((index) => {
                    const fill = Math.max(0, Math.min(1, testimonials[currentIndex].rating - index + 1));
                    return (
                      <div key={index} className="relative w-6 h-6">
                        <Star className="absolute top-0 left-0 w-6 h-6 text-[#FFC107]" strokeWidth={1.5} />
                        <div className="absolute top-0 left-0 overflow-hidden h-full" style={{ width: `${fill * 100}%` }}>
                          <Star className="absolute top-0 left-0 w-6 h-6 fill-[#FFC107] text-[#FFC107]" strokeWidth={1.5} />
                        </div>
                      </div>
                    );
                  })}
                  <span className="text-base font-bold text-gray-400 ms-2">{testimonials[currentIndex].rating.toFixed(1)}</span>
                </div>
                
                <p className="text-[1.1rem] md:text-[1.25rem] text-[#546e7a] italic leading-relaxed mb-10 max-w-[650px] mx-auto min-h-[100px] flex items-center justify-center">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-[#b3d4e5] text-[#0077b6] flex items-center justify-center font-bold text-xl flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
                    {testimonials[currentIndex].image ? (
                      <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                    ) : (
                      testimonials[currentIndex].initials
                    )}
                  </div>
                  <div className="text-start">
                    <div className="text-lg font-bold text-[#002f4a]">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-[#78909c]">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all hover:scale-110 hover:shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#082a41]" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#082a41] w-8' : 'bg-[#082a41]/20 w-2.5 hover:bg-[#082a41]/40'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
