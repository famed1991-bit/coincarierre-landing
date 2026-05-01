import { Suspense, lazy } from 'react';
import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { LogosMarquee } from "./components/landing/LogosMarquee";

// Lazy load below-the-fold components for performance
const Process = lazy(() => import("./components/landing/Process").then(m => ({ default: m.Process })));
const Features = lazy(() => import("./components/landing/Features").then(m => ({ default: m.Features })));
const VideoSection = lazy(() => import("./components/landing/VideoSection").then(m => ({ default: m.VideoSection })));
const Stats = lazy(() => import("./components/landing/Stats").then(m => ({ default: m.Stats })));
const Testimonials = lazy(() => import("./components/landing/Testimonials").then(m => ({ default: m.Testimonials })));
const FinalCTA = lazy(() => import("./components/landing/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("./components/landing/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
          <Hero />
          <LogosMarquee />
        </div>
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Process />
          <Features />
          <VideoSection />
          <Testimonials />
          <Stats />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
