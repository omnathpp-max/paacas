import { motion } from 'framer-motion';
import anujTiles from '@/assets/clients/anuj-tiles.png';
import hexanode from '@/assets/clients/hexanode.png';
import turiyoSys from '@/assets/clients/turiyo-sys.png';
import winarb from '@/assets/clients/winarb.png';
import meenakshi from '@/assets/clients/meenakshi.png';
import kosh from '@/assets/clients/kosh.png';
import talentMaximus from '@/assets/clients/talent-maximus.png';
import syaqua from '@/assets/clients/syaqua.png';
import scoreTraining from '@/assets/clients/score-training.png';
import satoriXr from '@/assets/clients/satori-xr.png';
import petavue from '@/assets/clients/petavue.png';
import niharika from '@/assets/clients/niharika.png';
import jintex from '@/assets/clients/jintex.png';
import nuvio from '@/assets/clients/nuvio.png';
import madStreetDen from '@/assets/clients/mad-street-den.png';
import kbk from '@/assets/clients/kbk.png';
import carecodePro from '@/assets/clients/carecode-pro.png';
import adr from '@/assets/clients/adr.png';
import abContainers from '@/assets/clients/ab-containers.png';
import boldcap from '@/assets/clients/boldcap.png';
import absoluteBroking from '@/assets/clients/absolute-broking.png';
import fleetStudio from '@/assets/clients/fleet-studio.png';
import uravu from '@/assets/clients/uravu.png';
import fanly from '@/assets/clients/fanly.png';
import xoro from '@/assets/clients/xoro.png';

// `dark: true` renders the logo on a dark chip so logos that contain
// white text remain clearly visible on the light section background.
const logos = [
  { src: anujTiles, alt: 'Anuj Vitrified Tiles' },
  { src: hexanode, alt: 'Hexanode', dark: true },
  { src: turiyoSys, alt: 'Turiyo Sys' },
  { src: winarb, alt: 'WinArb' },
  { src: meenakshi, alt: 'Meenakshi Super Speciality Hospital' },
  { src: kosh, alt: 'Kosh' },
  { src: talentMaximus, alt: 'Talent Maximus' },
  { src: syaqua, alt: 'Syaqua' },
  { src: scoreTraining, alt: 'Score Training' },
  { src: satoriXr, alt: 'Satori XR' },
  { src: petavue, alt: 'Petavue' },
  { src: niharika, alt: 'Niharika Studio' },
  { src: jintex, alt: 'Jintex' },
  { src: nuvio, alt: 'Nuvio' },
  { src: madStreetDen, alt: 'Mad Street Den', dark: true },
  { src: kbk, alt: 'KBK' },
  { src: carecodePro, alt: 'Carecode Pro' },
  { src: adr, alt: 'ADR' },
  { src: abContainers, alt: 'AB Containers' },
  { src: boldcap, alt: 'BoldCap', dark: true },
  { src: absoluteBroking, alt: 'Absolute Broking' },
  { src: fleetStudio, alt: 'Fleet Studio', dark: true },
  { src: uravu, alt: 'Uravu' },
  { src: fanly, alt: 'Fanly' },
  { src: xoro, alt: 'Xoro' },
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
              Our Clients
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Trusted by{' '}
            <span className="text-gradient-brand">industry leaders</span>
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
                className={`shrink-0 mx-3 md:mx-5 flex items-center justify-center h-20 w-36 rounded-xl px-3 transition-transform duration-300 hover:scale-110 ${
                  logo.dark ? 'bg-foreground/90' : ''
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};