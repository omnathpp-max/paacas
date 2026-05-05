import { motion } from 'framer-motion';
import { Landmark, Users, Cpu, Globe } from 'lucide-react';

const milestones = [
  {
    icon: Landmark,
    label: 'Foundation',
    caption: 'Built on principles of integrity and craft.',
  },
  {
    icon: Users,
    label: 'Next Generation',
    caption: 'A new generation of partners broadens the practice.',
  },
  {
    icon: Cpu,
    label: 'Digital Era',
    caption: 'A fully digitised, paperless workplace.',
  },
  {
    icon: Globe,
    label: 'Global Reach',
    caption: 'Cross-border expertise for modern businesses.',
  },
];

export const JourneyInfographic = () => {
  return (
    <div className="relative rounded-3xl bg-foreground text-background overflow-hidden shadow-[0_30px_80px_-30px_hsl(220_50%_15%/0.4)]">
      {/* Ambient brand glows */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-72 h-72 rounded-full blur-[120px] bg-brand/20"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-72 h-72 rounded-full blur-[120px] bg-brand/10"
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative p-7 md:p-9">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-brand">
            Our Journey
          </span>
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-background/45 font-light">
            Foundation → Future
          </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connecting line */}
          <div
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10"
          />
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/60 to-brand/0"
          />

          <ul className="space-y-7">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.li
                  key={m.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-14"
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.18 }}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    className="absolute left-0 top-0 w-10 h-10 rounded-full bg-background/[0.06] border border-brand/40 backdrop-blur-sm flex items-center justify-center text-brand shadow-[0_0_0_4px_hsl(220_45%_10%)] cursor-default"
                  >
                    {/* Pulsing ring */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-brand/50"
                      animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: 1.2 + i * 0.4,
                        ease: 'easeOut',
                      }}
                    />
                    <Icon className="w-4 h-4 relative" strokeWidth={1.75} />
                  </motion.span>

                  <h4 className="font-display text-base md:text-lg font-medium text-background leading-tight tracking-tight">
                    {m.label}
                  </h4>
                  <p className="text-[0.78rem] md:text-[0.82rem] text-background/55 font-light leading-relaxed mt-1.5">
                    {m.caption}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 pt-7 border-t border-white/10"
        >
          <p className="font-display text-base md:text-[1.05rem] text-background/90 font-light italic leading-snug">
            "Serve clients like you serve thyself. Brand yourself with happy clients."
          </p>
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-brand mt-3">
            — Founding Partner
          </p>
        </motion.div>
      </div>
    </div>
  );
};
