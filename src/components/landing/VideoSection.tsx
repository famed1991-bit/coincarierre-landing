import { Play } from "lucide-react";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function VideoSection() {
  const { t, dir } = useLanguage();
  return (
    <section className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-[#082a41] leading-tight mb-3">{t('video.title')}</h2>

        <div className="max-w-[640px] mx-auto mt-10 bg-gradient-to-br from-blue-dark to-blue-main rounded-3xl overflow-hidden aspect-video relative shadow-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="absolute inset-0 bg-[rgba(0,30,50,0.35)]"></div>
            <div className="relative z-10">
              <span className="inline-block bg-lime text-lime-dark text-[0.65rem] font-bold py-0.5 px-2.5 rounded-full mb-1">2 min</span>
            </div>
            <button className="relative z-10 w-16 h-16 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center cursor-pointer hover:bg-white/25 hover:scale-110 transition-all backdrop-blur-md" aria-label="Lire la vidéo">
              <Play className={`w-6 h-6 fill-white text-white ${dir === 'ltr' ? 'ml-1' : 'ml-0 mr-1 scale-x-[-1]'}`} />
            </button>
            <p className="relative z-10 text-center text-white/85 text-[clamp(16px,2vw,18px)] font-normal">{t('video.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
