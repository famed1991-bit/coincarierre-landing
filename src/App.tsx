import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { LogosMarquee } from "./components/landing/LogosMarquee";
import { Process } from "./components/landing/Process";
import { Features } from "./components/landing/Features";
import { VideoSection } from "./components/landing/VideoSection";
import { Stats } from "./components/landing/Stats";
import { Testimonials } from "./components/landing/Testimonials";
import { FinalCTA } from "./components/landing/FinalCTA";
import { Footer } from "./components/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
          <Hero />
          <LogosMarquee />
        </div>
        <Process />
        <Features />
        <VideoSection />
        <Testimonials />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
