import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "../../lib/i18n/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          <span className="text-blue-dark">Coin</span>
          <span className="text-primary">Carrière</span>
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary border border-gray-200 hover:border-blue-light rounded-full px-3.5 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
          >
            <Globe className="w-4 h-4 text-blue-main" />
            <span>{t('header.lang')}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col z-50">
              <button onClick={() => handleLanguageChange('fr')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${language === 'fr' ? 'bg-blue-50 text-blue-main font-semibold' : 'text-gray-700'}`}>Français (FR)</button>
              <button onClick={() => handleLanguageChange('ar')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${language === 'ar' ? 'bg-blue-50 text-blue-main font-semibold' : 'text-gray-700'}`}>العربية (AR)</button>
              <button onClick={() => handleLanguageChange('en')} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${language === 'en' ? 'bg-blue-50 text-blue-main font-semibold' : 'text-gray-700'}`}>English (EN)</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
