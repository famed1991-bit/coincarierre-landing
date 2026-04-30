import { useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Pause the video if the section is not intersecting (scrolled out of view)
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 } // Triggers when less than 10% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#082a41] py-16 px-6">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-white leading-tight mb-3">{t('video.title')}</h2>

        <div className="max-w-[640px] mx-auto mt-10 bg-gradient-to-br from-blue-dark to-blue-main rounded-3xl overflow-hidden aspect-video relative shadow-xl border border-white/10">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            src="/promo.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://coincarriere.com/register?type=company"
            className="inline-flex items-center gap-2.5 bg-lime hover:bg-lime-hover text-lime-dark px-8 md:px-12 py-3.5 md:py-4 rounded-2xl text-[16px] md:text-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
