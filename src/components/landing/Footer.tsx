import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-100 py-4 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="CoinCarrière Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        
        {/* Links and Copyright on the right */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-3">
              <a href="#" className="text-xs text-gray-500 hover:text-blue-main transition-colors">{t('footer.l3')}</a>
              <span className="text-gray-200 text-xs">|</span>
            </span>
            <span className="flex items-center gap-3">
              <a href="#" className="text-xs text-gray-500 hover:text-blue-main transition-colors">{t('footer.l4')}</a>
              <span className="text-gray-200 text-xs">|</span>
            </span>
            <span className="flex items-center gap-3">
              <a href="#" className="text-xs text-gray-500 hover:text-blue-main transition-colors">{t('footer.l5')}</a>
              <span className="text-gray-200 text-xs">|</span>
            </span>
            <span className="flex items-center gap-3">
              <a href="#" className="text-xs text-gray-500 hover:text-blue-main transition-colors">{t('footer.l6')}</a>
            </span>
          </div>
          <p className="text-[0.7rem] text-gray-400 m-0 hidden md:block">|</p>
          <p className="text-[0.7rem] text-gray-400 m-0">{t('footer.copy')}</p>
        </div>
      </div>
    </footer>
  );
}
