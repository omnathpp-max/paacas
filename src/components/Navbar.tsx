import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import caLogo from '@/assets/ca-logo.png';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Team', href: '/#team' },
  { name: 'Clients', href: '/#clients' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+914442117873" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 44 4211 7873</span>
            </a>
            <a href="mailto:aswinpa@paacas.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>aswinpa@paacas.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/70">
            Established 1958 | Chennai & Madurai
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-elegant">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={caLogo} alt="CA India Logo" className="h-14 w-auto" />
              <div>
                <h1 className="font-display font-semibold text-xl text-foreground">
                  P A A & Associates
                </h1>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">
                  Chartered Accountants
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-accent font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="/#contact"
                className="bg-brand-gradient text-white font-semibold px-6 py-2.5 rounded-lg shadow-brand hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-accent font-medium py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-gradient text-white font-semibold px-6 py-3 rounded-lg text-center shadow-brand"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
