import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-100 py-7 px-6 text-center">
      <div className="flex justify-center mb-6">
        <img src="/logo.png" alt="CoinCarrière Logo" className="h-10 md:h-12 w-auto object-contain" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mb-2">
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l1')}</a>
          <span className="text-gray-200 text-xs">|</span>
        </span>
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l2')}</a>
          <span className="text-gray-200 text-xs">|</span>
        </span>
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l3')}</a>
          <span className="text-gray-200 text-xs">|</span>
        </span>
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l4')}</a>
          <span className="text-gray-200 text-xs">|</span>
        </span>
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l5')}</a>
          <span className="text-gray-200 text-xs">|</span>
        </span>
        <span className="flex items-center gap-3">
          <a href="#" className="text-xs text-gray-400 hover:text-blue-main transition-colors">{t('footer.l6')}</a>
        </span>
      </div>
      <p className="text-[0.7rem] text-gray-300">{t('footer.copy')}</p>
    </footer>
  );
}
