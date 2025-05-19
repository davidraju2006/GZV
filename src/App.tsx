import { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import { ContactUs as ContactSection } from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CursorEffect from './components/CursorEffect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app relative bg-black text-white overflow-hidden">
      <CursorEffect />
      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <TeamSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;