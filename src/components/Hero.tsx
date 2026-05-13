import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
import xoro from '@/assets/clients/xoro.png';

const clientLogos = [
  { src: hexanode, alt: 'Hexanode' },
  { src: turiyoSys, alt: 'Turiyo Sys' },
  { src: winarb, alt: 'WinArb' },
  { src: meenakshi, alt: 'Meenakshi Super Speciality Hospital', large: true },
  { src: kosh, alt: 'Kosh' },
  { src: talentMaximus, alt: 'Talent Maximus' },
  { src: syaqua, alt: 'Syaqua' },
  { src: scoreTraining, alt: 'Score Training' },
  { src: satoriXr, alt: 'Satori XR' },
  { src: petavue, alt: 'Petavue' },
  { src: niharika, alt: 'Niharika Studio' },
  { src: jintex, alt: 'Jintex' },
  { src: nuvio, alt: 'Nuvio' },
  { src: madStreetDen, alt: 'Mad Street Den' },
  { src: kbk, alt: 'KBK' },
  { src: carecodePro, alt: 'Carecode Pro' },
  { src: adr, alt: 'ADR' },
  { src: abContainers, alt: 'AB Containers' },
  { src: boldcap, alt: 'BoldCap', large: true },
  { src: absoluteBroking, alt: 'Absolute Broking' },
  { src: fleetStudio, alt: 'Fleet Studio', large: true },
  { src: uravu, alt: 'Uravu', large: true },
  { src: xoro, alt: 'Xoro' },
];

const stats = [
  { from: 65, value: 75, suffix: '+', label: 'Years of combined practice', duration: 1.5 },
  { from: 4900, value: 5000, suffix: '+', label: 'Clients served', duration: 2.0 },
  { from: 50, value: 60, suffix: '+', label: 'Specialists on the team', duration: 1.5 },
];

const AnimatedCounter = ({ from = 0, to, suffix = '', duration = 2 }: { from?: number; to: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString('en-IN'));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: 'linear',
    });
    return controls.stop;
  }, [inView, to, duration, count]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [rounded]);

  return (
    <>
      <span ref={ref}>{from.toLocaleString('en-IN')}</span>
      {suffix}
    </>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-36 overflow-hidden bg-[hsl(220_45%_8%)]"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.35)]"
          style={{ animation: 'fadeIn 1.4s ease-out forwards' }}
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[-10rem] w-[36rem] h-[36rem] rounded-full blur-[140px] bg-[hsl(180_60%_45%/0.25)]"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-8rem] left-1/3 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_60%_45%/0.18)]"
        />
        {/* Subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220_45%_6%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow pill */}
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-white font-semibold leading-[1.05] tracking-tight mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Operate Smarter.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                <span className="text-gradient-brand">Scale Faster.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 1.2, ease: 'easeOut' }}
                  className="absolute left-0 -bottom-1 h-[3px] w-full origin-left bg-brand-gradient rounded-full"
                />
              </motion.span>
            </span>
          </h1>

          {/* Sub */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.25 }}
             className="text-lg md:text-xl text-white/65 max-w-2xl mb-12 leading-relaxed"
           >
             From tax optimization to business structuring and ongoing
             compliance, we act as your finance partner, bringing clarity,
             control, and confidence at every stage.
           </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-full shadow-brand hover:shadow-[0_8px_40px_hsl(109_53%_50%/0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule a Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 text-white/90 font-medium px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Explore what we do
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="px-6 py-6 bg-[hsl(220_45%_8%/0.4)] hover:bg-white/[0.04] transition-colors"
              >
                <p className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  <AnimatedCounter from={stat.from} to={stat.value} suffix={stat.suffix} duration={stat.duration} />
                </p>
                <p className="text-xs md:text-sm text-white/55 mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Client logo marquee — full viewport width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mt-14 pb-12"
      >
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className={`shrink-0 mx-5 flex items-center justify-center ${logo.large ? 'h-14 w-44' : 'h-12 w-36'}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading={i < clientLogos.length ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`max-w-full object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity duration-300 ${logo.large ? 'max-h-12' : 'max-h-10'}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
