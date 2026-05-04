import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '1958', label: 'Practising since' },
  { value: '50+', label: 'Team members' },
  { value: '2', label: 'Offices — Chennai & Madurai' },
];

const highlights = [
  'A coalition of specialised skills offering sound financial solutions.',
  'Fully digitised workplace — workflows replace paper, not people.',
  'Deep expertise across Indian and international taxation.',
  'Strong ethical foundation with a client-first approach.',
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-secondary/40 overflow-hidden">
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
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
              A Legacy of Trust. <br className="hidden md:block" />
              <span className="italic font-light text-muted-foreground">Built for </span>
              <span className="text-brand italic">Modern Founders.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
              Partners of P A A have been in practice since 1958. We pair the energy of a young
              team with the experience of seasoned partners to deliver advice that is sharp,
              practical, and built to scale with you.
            </p>

            <div className="mt-10 border-y border-border">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-6 py-5 border-b border-border last:border-b-0"
                >
                  <span className="font-display text-sm text-muted-foreground tabular-nums pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-foreground/85 text-base md:text-lg font-light leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
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
            <div className="relative rounded-3xl bg-foreground text-background p-8 md:p-10 overflow-hidden shadow-[0_30px_80px_-30px_hsl(220_50%_15%/0.4)]">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] bg-brand/25"
              />
              <div className="relative">
                <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-brand">
                  By the numbers
                </span>

                <div className="mt-8 divide-y divide-white/10">
                  {stats.map((s, i) => (
                    <div key={i} className="py-6 first:pt-0 last:pb-0">
                      <p className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-background">
                        {s.value}
                      </p>
                      <p className="text-sm text-background/60 mt-2 font-light">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-base text-background/80 font-light italic leading-relaxed">
                    "Serve the clients like you serve thyself. Brand yourself with happy clients."
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-brand mt-3">
                    — Founding Partner
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};