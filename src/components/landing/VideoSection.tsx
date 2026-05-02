import { useRef, useEffect, useState } from "react";
import { Plus, Play } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

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

        <div className="max-w-[640px] mx-auto mt-10 bg-gradient-to-br from-blue-dark to-blue-main rounded-3xl overflow-hidden aspect-video relative shadow-xl border border-white/10 group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            preload="none"
            poster="/hero.jpg"
            src="/promo.mp4"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Custom Play Button Overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/30 cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-lime hover:bg-lime-hover rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(151,241,31,0.4)] backdrop-blur-sm transition-transform group-hover:scale-110 pl-2 md:pl-3">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-[#082a41] fill-[#082a41]" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://coincarriere.com/register?type=company"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => typeof window !== 'undefined' && (window as any).fbq?.('track', 'Lead')}
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
