import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  BarChart3,
  TrendingUp,
  Globe2,
  Wallet,
  ArrowUpRight,
  Sparkles,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

type Service = {
  num: string;
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  outcome: string;
};

const services: Service[] = [
  {
    num: '01',
    icon: Package,
    title: 'Startup Launch & Compliance Stack',
    description:
      'From incorporation to filings — we set up your entire compliance backbone.',
    outcome: 'Zero confusion, fully compliant from day one.',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Tax Optimization & Structuring',
    description:
      'We don\u2019t just file returns — we reduce your tax liability legally.',
    outcome: 'More cash retained, smarter structuring.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Virtual CFO & Growth Advisory',
    description: 'Financial clarity, MIS, forecasting, and strategic guidance.',
    outcome: 'Better decisions, faster growth.',
  },
  {
    num: '04',
    icon: Globe2,
    title: 'FEMA & Cross-Border Advisory',
    description: 'FDI, ODI, ESOPs, and international structuring handled right.',
    outcome: 'No regulatory surprises.',
  },
  {
    num: '05',
    icon: Wallet,
    title: 'Valuation & Transaction Support',
    description:
      'Business valuations for funding, compliance, restructuring, and strategic decisions.',
    outcome: 'Defensible valuations that stand up to investors and regulators.',
  },
];

export const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Ambient accents */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full blur-[160px] bg-[hsl(109_53%_50%/0.08)]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(220_50%_15%/0.06)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            Not Just Services. <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Solutions That </span>
            <span className="text-brand italic">Move the Needle.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            Five core practice areas, built for founders and growing companies who expect
            outcomes — not just deliverables.
          </p>
        </motion.div>

        {/* Editorial split layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — interactive list */}
          <div className="lg:col-span-7 border-y border-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={s.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`group relative w-full text-left flex items-start gap-6 py-7 md:py-8 border-b border-border last:border-b-0 transition-colors duration-300 ${
                    isActive ? 'bg-secondary/40' : 'hover:bg-secondary/20'
                  }`}
                >
                  {/* Active indicator bar */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-brand origin-top transition-transform duration-500 ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  />
                  <span className="font-display text-sm text-muted-foreground tabular-nums pt-1 pl-5 md:pl-6 shrink-0">
                    {s.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                          isActive ? 'text-brand' : 'text-muted-foreground'
                        }`}
                        strokeWidth={1.75}
                      />
                      <h3
                        className={`font-display text-xl md:text-2xl font-semibold leading-snug transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-foreground/80'
                        }`}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base md:text-[1.05rem] leading-relaxed font-light pl-8">
                      {s.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 mr-5 md:mr-6 mt-2 shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'text-brand opacity-100 translate-x-0 -translate-y-0.5'
                        : 'text-muted-foreground opacity-40'
                    }`}
                    strokeWidth={1.75}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT — sticky outcome card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative rounded-3xl bg-foreground text-background p-8 md:p-10 overflow-hidden shadow-[0_30px_80px_-30px_hsl(220_50%_15%/0.4)]"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] bg-brand/25"
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-brand">
                    The Outcome
                  </span>
                  <span className="font-display text-sm text-background/40 tabular-nums">
                    {services[active].num} / {String(services.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-brand mb-6">
                  {(() => {
                    const ActiveIcon = services[active].icon;
                    return <ActiveIcon className="w-6 h-6" strokeWidth={1.75} />;
                  })()}
                </div>

                <h4 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-background/50 mb-3">
                  {services[active].title}
                </h4>

                <p className="font-display text-2xl md:text-3xl font-semibold leading-[1.2] tracking-tight text-background">
                  {services[active].outcome}
                </p>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-1">
                      Ready to start?
                    </p>
                    <p className="text-base text-background/80 font-light">
                      Book a free 30-min discovery call.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white hover:bg-brand-dark transition-colors group"
                    aria-label="Contact us"
                  >
                    <ArrowUpRight
                      className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};