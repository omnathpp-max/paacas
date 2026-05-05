import { motion } from 'framer-motion';
import { Landmark, Users, Cpu, Globe } from 'lucide-react';

const milestones = [
  { icon: Landmark, label: 'Foundation' },
  { icon: Users, label: 'Next Generation' },
  { icon: Cpu, label: 'Digital Era' },
  { icon: Globe, label: 'Global Reach' },
];

export const JourneyInfographic = () => {
  return (
    <div className="relative rounded-3xl bg-foreground text-background overflow-hidden shadow-[0_30px_80px_-30px_hsl(220_50%_15%/0.4)] aspect-[4/5] lg:aspect-[5/6]">
      {/* Sky gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[hsl(220_45%_12%)] via-[hsl(220_40%_18%)] to-[hsl(109_30%_25%)]"
      />

      {/* Rising sun */}
      <motion.div
        aria-hidden
        initial={{ y: 80, opacity: 0, scale: 0.85 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-[18%] w-40 h-40 md:w-48 md:h-48 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, hsl(109 60% 65% / 0.95) 0%, hsl(109 53% 50% / 0.6) 35%, hsl(109 53% 50% / 0) 70%)',
        }}
      />
      <motion.div
        aria-hidden
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 top-[24%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand/90 blur-[2px]"
      />

      {/* Drifting clouds */}
      <motion.div
        aria-hidden
        initial={{ x: '-20%', opacity: 0 }}
        whileInView={{ x: '110%', opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[10%] left-0 w-32 h-6 rounded-full bg-white blur-md"
      />
      <motion.div
        aria-hidden
        initial={{ x: '-30%', opacity: 0 }}
        whileInView={{ x: '120%', opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 4 }}
        className="absolute top-[6%] left-0 w-24 h-4 rounded-full bg-white blur-md"
      />

      {/* Layered horizon — back range */}
      <motion.svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[38%] w-full h-[32%]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <path
          d="M0,160 C60,90 120,140 180,100 C240,60 300,130 360,80 L400,100 L400,200 L0,200 Z"
          fill="hsl(220 35% 22%)"
          opacity="0.85"
        />
      </motion.svg>

      {/* Mid range */}
      <motion.svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[20%] w-full h-[34%]"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <path
          d="M0,170 C50,120 110,150 170,110 C230,70 290,140 350,100 L400,120 L400,200 L0,200 Z"
          fill="hsl(109 30% 22%)"
        />
      </motion.svg>

      {/* Front range */}
      <motion.svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[36%]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <defs>
          <linearGradient id="frontRange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(109 53% 38%)" />
            <stop offset="100%" stopColor="hsl(109 53% 22%)" />
          </linearGradient>
        </defs>
        <path
          d="M0,180 C40,130 100,170 160,120 C220,70 280,160 340,110 L400,140 L400,200 L0,200 Z"
          fill="url(#frontRange)"
        />
      </motion.svg>

      {/* Connecting path of light across horizon */}
      <svg
        aria-hidden
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[8%] w-full h-[18%] pointer-events-none"
      >
        <motion.path
          d="M20,140 C90,80 160,150 220,90 C280,40 340,110 380,70"
          fill="none"
          stroke="hsl(109 60% 70%)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2.2, delay: 1, ease: 'easeInOut' }}
        />
      </svg>

      {/* Floating milestone icons along the journey */}
      <div className="absolute inset-0 pointer-events-none">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          const positions = [
            { left: '8%', bottom: '32%' },
            { left: '34%', bottom: '52%' },
            { left: '60%', bottom: '38%' },
            { left: '84%', bottom: '58%' },
          ];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={positions[i]}
              className="absolute -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
                className="flex flex-col items-center gap-2"
              >
                <span className="w-10 h-10 rounded-full bg-background/95 border border-brand/40 flex items-center justify-center text-brand-dark shadow-[0_8px_24px_-8px_hsl(109_53%_30%/0.6)]">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-background/85 font-semibold whitespace-nowrap">
                  {m.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Top label */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-brand">
          Our Journey
        </span>
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-background/50 font-light">
          From Foundation to Future
        </span>
      </div>

      {/* Bottom quote */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 bg-gradient-to-t from-foreground via-foreground/85 to-transparent pt-16">
        <p className="font-display text-base md:text-lg text-background font-light italic leading-snug">
          "Brand yourself with happy clients."
        </p>
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-brand mt-2">
          — Founding Partner
        </p>
      </div>
    </div>
  );
};