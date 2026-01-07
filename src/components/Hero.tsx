import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building2 } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const stats = [
  { icon: Award, value: '65+', label: 'Years of Excellence' },
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Building2, value: '2', label: 'Offices Nationwide' },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional accounting office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
              Trusted Since 1958
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-semibold leading-tight mb-6"
          >
            Your Trusted Partner in{' '}
            <span className="text-gradient-brand">Financial Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            P A A & Associates provides comprehensive chartered accountancy services 
            with integrity, expertise, and a commitment to your financial growth. 
            From valuation to compliance, we've got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-lg shadow-brand hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-semibold px-8 py-4 rounded-lg border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
