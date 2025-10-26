import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Products />
        <Solutions />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
