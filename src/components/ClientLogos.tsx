import { motion } from 'framer-motion';
import fleetStudio from '@/assets/clients/fleetstudio-v2.png';
import absoluteBroking from '@/assets/clients/absolute-broking-v2.png';
import allMaster from '@/assets/clients/allmaster-v2.png';
import abContainers from '@/assets/clients/ab-containers.png';
import adr from '@/assets/clients/adr.png';
import anujTiles from '@/assets/clients/anuj-tiles.png';
import boldcap from '@/assets/clients/boldcap.png';
import carecodePro from '@/assets/clients/carecode-pro.png';
import fanly from '@/assets/clients/fanly.png';

const logos = [
  { src: fleetStudio, alt: 'Fleet Studio' },
  { src: absoluteBroking, alt: 'Absolute Broking' },
  { src: allMaster, alt: 'All Master' },
  { src: abContainers, alt: 'AB Containers' },
  { src: adr, alt: 'ADR' },
  { src: anujTiles, alt: 'Anuj Vitrified Tiles' },
  { src: boldcap, alt: 'BoldCap' },
  { src: carecodePro, alt: 'Carecode Pro' },
  { src: fanly, alt: 'Fanly' },
];

export const ClientLogos = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Subtle decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full blur-[120px] bg-[hsl(var(--accent)/0.10)]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Trusted Partners
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Powering finance for{' '}
            <span className="text-gradient-brand">forward-thinking teams</span>
          </h2>
        </motion.div>

        <div
          className="relative"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            {loop.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 mx-8 md:mx-12 flex items-center justify-center h-20 w-40"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};