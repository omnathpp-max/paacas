import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const perks = [
  {
    num: '01',
    title: 'Work on real, high-stakes mandates',
    description:
      'From cross-border structuring to startup valuations, you\u2019ll handle work that actually moves the needle for clients.',
  },
  {
    num: '02',
    title: 'Learn directly from the partners',
    description:
      'Small team, flat structure. You\u2019ll get mentorship from professionals with decades of practice — not just a desk in a back office.',
  },
  {
    num: '03',
    title: 'A modern, digitized workplace',
    description:
      'No paper-pushing. Our workflows are fully digital so your time goes into thinking, not chasing files.',
  },
  {
    num: '04',
    title: 'Build a long-term career path',
    description:
      'Articleship, qualified roles, and partner-track opportunities — we invest in people who want to grow with us.',
  },
];

export const JoinUs = () => {
  return (
    <section id="join-us" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.08)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
              <Sparkles className="w-3.5 h-3.5 animate-sparkle" strokeWidth={2} />
              Join Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
              Build Your <br className="hidden md:block" />
              <span className="italic font-light text-muted-foreground">Career With </span>
              <span className="text-brand italic">People Who Care.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-md font-light leading-relaxed">
              We're always looking for sharp, curious people — articled assistants,
              qualified CAs, and finance professionals who want to do meaningful work.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 mt-10 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              Send us your CV
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </motion.div>

          {/* RIGHT — perks list */}
          <div className="lg:col-span-7 border-y border-border">
            {perks.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex items-start gap-6 py-7 md:py-8 border-b border-border last:border-b-0"
              >
                <span className="font-display text-sm text-muted-foreground tabular-nums pt-1 shrink-0">
                  {p.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};