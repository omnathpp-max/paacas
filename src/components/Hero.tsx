import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 75, suffix: '+', label: 'Years of combined practice' },
  { value: 5000, suffix: '+', label: 'Clients served' },
  { value: 60, suffix: '+', label: 'Specialists on the team' },
];

const AnimatedCounter = ({ to, suffix = '', duration = 2 }: { to: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString('en-IN'));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
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
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden bg-[hsl(220_45%_8%)]"
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
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} duration={2 + i * 0.2} />
                </p>
                <p className="text-xs md:text-sm text-white/55 mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
