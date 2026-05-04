import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { JoinUs } from '@/components/JoinUs';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <About />
      <Team />
      <JoinUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
