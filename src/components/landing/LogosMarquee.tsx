import { useLanguage } from "../../lib/i18n/LanguageContext";

export function LogosMarquee() {
  const { t, dir } = useLanguage();
  const logos = [
    { name: "La Mamounia Marrakech", src: "/logos/la_mamounia.png" },
    { name: "Hotel Ben Batouta", src: "/logos/hotel_ben_batouta.png" },
    { name: "Anna Hotel Agadir", src: "/logos/anna_hotel_agadir.png" },
    { name: "Hotel Miranda", src: "/logos/hotel_miranda.png" },
    { name: "Hotel de Casablanca", src: "/logos/hotel_de_casablanca.png" },
    { name: "Marrakech Resort", src: "/logos/marrakech_resort.png" },
    { name: "Kech Boutique Hotel", src: "/logos/kech_boutique_hotel.png" },
    { name: "Marajah Spa", src: "/logos/marajah_spa.png" },
    { name: "Marrakech Ryads Parc", src: "/logos/marrakech_ryads_parc.png" },
    { name: "Dominium Hivernage Hotel", src: "/logos/dominium_hotel.png" },
  ];
  return (
    <section className="bg-white border-b border-gray-100 py-6">
      <p className="text-center text-[0.7rem] font-semibold tracking-[2px] uppercase text-gray-400 mb-5">
        {t('logos.title')}
      </p>
      <div className="relative overflow-hidden w-full">
        <div className={`absolute ${dir === 'rtl' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 from-white to-transparent pointer-events-none`}></div>
        <div className={`absolute ${dir === 'rtl' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 from-white to-transparent pointer-events-none`}></div>

        <div className="flex w-max" style={{ animation: "marquee 35s linear infinite" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 h-16 sm:h-20 w-[140px] sm:w-[180px] flex items-center justify-center px-6">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.classList.remove('hidden');
                  }
                }}
              />
              <span className="hidden text-gray-400 font-bold text-sm text-center">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
