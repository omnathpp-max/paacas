import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Clients } from '@/components/Clients';
import { Testimonials } from '@/components/Testimonials';
import { WhyUs } from '@/components/WhyUs';
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
      <Clients />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
