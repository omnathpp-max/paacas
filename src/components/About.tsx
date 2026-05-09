import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, Globe2, HeartHandshake } from 'lucide-react';
import { JourneyInfographic } from './JourneyInfographic';

const highlights = [
  {
    icon: Layers,
    text: 'A multidisciplinary team delivering integrated financial and regulatory solutions—all under one roof.',
  },
  {
    icon: Cpu,
    text: 'Digital-first by design—streamlined workflows, smart systems, and seamless execution.',
  },
  {
    icon: Globe2,
    text: 'Deep expertise across Indian and international taxation, supporting businesses with cross-border ambitions.',
  },
  {
    icon: HeartHandshake,
    text: 'Rooted in integrity, focused on long-term relationships, and committed to delivering real value.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full blur-[160px] bg-[hsl(109_53%_50%/0.06)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — header + copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
              <Sparkles className="w-3.5 h-3.5 animate-sparkle" strokeWidth={2} />
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
              A legacy spanning generations, <br className="hidden md:block" />
              <span className="italic font-light text-muted-foreground">evolving with </span>
              <span className="text-brand italic">every era.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
              Founded in 1958, P A A was built on strong professional values that continue to
              guide us today. The next generation joined in the early 1980s, expanding the firm's
              capabilities and laying the foundation for sustained growth. Today, we bring together
              this legacy of experience with a young, technology-driven team to deliver solutions
              that are practical, scalable, and aligned with modern business needs.
            </p>

            <div className="mt-10 border-y border-border">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-6 py-5 border-b border-border last:border-b-0"
                  >
                    <span className="shrink-0 mt-0.5 w-10 h-10 rounded-full border border-brand/30 bg-[hsl(109_53%_50%/0.08)] flex items-center justify-center text-brand">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </span>
                    <p className="text-foreground/85 text-base md:text-lg font-light leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — stats card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <JourneyInfographic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};