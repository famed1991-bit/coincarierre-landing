import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

export function FloatingCTA() {
  const { t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const finalCta = document.getElementById('final-cta');
      
      if (!hero || !finalCta) return;

      const heroRect = hero.getBoundingClientRect();
      const finalCtaRect = finalCta.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The CTA is visible if:
      // 1. The Hero section is mostly out of view (its bottom is above the middle of the screen)
      // 2. The FinalCTA section is not yet in view (its top is below the bottom of the screen)
      const isHeroPast = heroRect.bottom < (windowHeight / 2);
      const isFinalCtaNotReached = finalCtaRect.top > windowHeight;

      if (isHeroPast && isFinalCtaNotReached) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50`}
        >
          <a
            href="https://coincarriere.com/register?type=company"
            className="flex items-center gap-2 bg-lime hover:bg-lime-hover text-lime-dark px-6 py-3 rounded-full text-base font-bold shadow-2xl transition-all hover:-translate-y-1 hover:shadow-lime/30 border border-lime-dark/10 group"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            <span className="hidden sm:inline-block">{t('hero.cta')}</span>
            <span className="sm:hidden">{t('hero.cta').split(' ')[0]}</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
