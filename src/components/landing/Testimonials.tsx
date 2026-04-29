import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Testimonials() {
  const { t, dir } = useLanguage();

  const testimonials = [
    {
      quote: t('testi.t1.quote'),
      name: t('testi.t1.name'),
      role: t('testi.t1.role'),
      initials: "KA",
      rating: 4.5
    },
    {
      quote: t('testi.t2.quote'),
      name: t('testi.t2.name'),
      role: t('testi.t2.role'),
      initials: "SB",
      rating: 5
    },
    {
      quote: t('testi.t3.quote'),
      name: t('testi.t3.name'),
      role: t('testi.t3.role'),
      initials: "YM",
      rating: 4.2
    }
  ];

  return (
    <section className="bg-blue-bg px-6 pb-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx * 0.1}}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1" dir="ltr">
                  {[1, 2, 3, 4, 5].map((index) => {
                    const fill = Math.max(0, Math.min(1, testi.rating - index + 1));
                    return (
                      <div key={index} className="relative w-5 h-5">
                        <Star className="absolute top-0 left-0 w-5 h-5 text-[#FFC107]" strokeWidth={1.5} />
                        <div 
                          className="absolute top-0 left-0 overflow-hidden h-full"
                          style={{ width: `${fill * 100}%` }}
                        >
                          <Star className="absolute top-0 left-0 w-5 h-5 fill-[#FFC107] text-[#FFC107]" strokeWidth={1.5} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <span className="text-sm font-bold text-gray-400 ms-1">{testi.rating.toFixed(1)}</span>
              </div>
              
              <p className="text-[1.05rem] text-[#546e7a] italic leading-relaxed mb-8 flex-grow">
                {testi.quote}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#b3d4e5] text-[#0077b6] flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {testi.initials}
                </div>
                <div>
                  <div className="text-base font-bold text-[#002f4a]">{testi.name}</div>
                  <div className="text-sm text-[#78909c]">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
