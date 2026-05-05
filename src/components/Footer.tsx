import { Link } from 'react-router-dom';
import { Linkedin, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Team', href: '/#team' },
  { name: 'Join Us', href: '/#join-us' },
  { name: 'Contact', href: '/#contact' },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 w-[36rem] h-[36rem] rounded-full blur-[160px] bg-brand/15 pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex flex-col leading-none mb-6 group">
              <h3 className="font-display font-medium text-2xl text-background tracking-[0.18em]">
                P<span className="text-brand">A</span>A
                <span className="font-light text-background/70 tracking-normal ml-2 italic">
                  &amp; Associates
                </span>
              </h3>
              <p className="font-sans text-[10px] text-background/60 uppercase tracking-[0.35em] mt-1">
                Chartered Accountants
              </p>
            </Link>
            <p className="text-background/70 text-base font-light leading-relaxed max-w-md">
              Your trusted finance and compliance partner since 1958. Built for founders and
              growing companies who expect outcomes — not just deliverables.
            </p>

            <div className="mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 hover:bg-brand hover:border-brand transition-colors"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-brand mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background font-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm font-light">
            © {new Date().getFullYear()} P A A & Associates. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand-dark transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};