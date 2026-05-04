import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import caLogo from '@/assets/ca-logo.png';

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Team', href: '/#team' },
  { name: 'Join Us', href: '/#join-us' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4"
    >
      <motion.nav
        animate={{
          marginTop: scrolled ? 12 : 20,
          maxWidth: scrolled ? 1120 : 1600,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'bg-card/80 backdrop-blur-xl shadow-elegant border border-border/60 rounded-full'
            : 'bg-card/95 backdrop-blur-md shadow-elegant border border-border/50 rounded-2xl w-[90%]'
        }`}
      >
        <div className={`px-6 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={caLogo}
                alt="CA India Logo"
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-10' : 'h-12'}`}
              />
              <div>
                <h1
                  className={`font-display font-semibold text-foreground transition-all duration-500 ${
                    scrolled ? 'text-base' : 'text-xl'
                  }`}
                >
                  P A A & Associates
                </h1>
                <p
                  className={`text-muted-foreground tracking-wider uppercase transition-all duration-500 ${
                    scrolled ? 'text-[10px]' : 'text-xs'
                  }`}
                >
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
                  className="text-foreground/80 hover:text-brand font-medium text-sm transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background font-medium text-sm px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all duration-300"
              >
                Schedule a Call
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border rounded-b-3xl overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-brand font-medium py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-foreground text-background font-medium px-6 py-3 rounded-full text-center"
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};