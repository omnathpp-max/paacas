import { motion } from 'framer-motion';
import {
  Calendar,
  MessageCircle,
  CheckCircle2,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export type ServiceDetails = {
  eyebrow: string;
  hero: { headline: string; sub: string; cta: string };
  problems: { title: string; subtitle: string; items: string[] };
  offerings: {
    title: string;
    subtitle: string;
    groups: { icon: ComponentType<LucideProps>; label: string; items: string[] }[];
  };
  approach: { title: string; subtitle: string; steps: string[] };
  outcomes: { title: string; subtitle?: string; points: string[] };
  why: { title: string; points: string[] };
  finalCta: { headline: string; primary: string; secondary: string };
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  icon: ComponentType<LucideProps>;
  title: string;
  details: ServiceDetails | null;
};

export const ServiceDetailModal = ({ open, onOpenChange, icon: Icon, title, details }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] sm:w-full p-0 bg-background border-0 max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl font-sans shadow-[0_30px_80px_-20px_hsl(220_50%_15%/0.45)] max-sm:!w-screen max-sm:!h-[100dvh] max-sm:!max-h-[100dvh] max-sm:!max-w-none max-sm:!rounded-none max-sm:!left-0 max-sm:!top-0 max-sm:!translate-x-0 max-sm:!translate-y-0 data-[state=open]:duration-500 data-[state=open]:ease-out data-[state=closed]:duration-200 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-95 [&>button]:right-4 [&>button]:top-4 [&>button]:z-50 [&>button]:rounded-full [&>button]:bg-background/90 [&>button]:backdrop-blur-md [&>button]:border [&>button]:border-border [&>button]:shadow-md [&>button]:p-2 [&>button]:opacity-100 [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button]:text-foreground hover:[&>button]:bg-background">
        {details && (
          <div className="overflow-y-auto max-h-[92vh] max-sm:max-h-[100dvh] bg-background">
            {/* HERO */}
            <header className="relative px-8 sm:px-16 pt-16 sm:pt-20 pb-14 bg-foreground text-background overflow-hidden border-b border-border">
              <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] bg-brand/20" />
              <DialogHeader className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 border border-white/15 backdrop-blur-sm text-brand">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-brand">
                    {details.eyebrow}
                  </span>
                </div>
                <DialogTitle className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-background text-left max-w-3xl">
                  {details.hero.headline}
                </DialogTitle>
                <DialogDescription className="text-lg md:text-xl text-background/70 leading-relaxed pt-6 text-left max-w-2xl font-light">
                  {details.hero.sub}
                </DialogDescription>
              </DialogHeader>
              <div className="relative mt-10 flex items-center gap-4">
                <a href="#contact" onClick={() => onOpenChange(false)}>
                  <Button size="lg" className="bg-brand hover:bg-brand-dark text-white text-base rounded-full px-6">
                    <Calendar className="w-4 h-4" />
                    {details.hero.cta}
                  </Button>
                </a>
                <span className="text-sm text-background/60 hidden sm:inline">Free 30-min discovery call</span>
              </div>
            </header>

            {/* WHY */}
            <Section eyebrow="01 — Why" kicker="What this solves">
              <SectionHeader title={details.problems.title} subtitle={details.problems.subtitle} />
              <div className="mt-10 divide-y divide-border border-y border-border">
                {details.problems.items.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-baseline gap-6 py-5 group"
                  >
                    <span className="font-display text-sm text-muted-foreground tabular-nums w-8 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-lg md:text-xl text-foreground/90 leading-snug font-light group-hover:text-brand-dark transition-colors">
                      {p}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* WHAT */}
            <Section eyebrow="02 — What" kicker="End-to-end coverage" muted>
              <SectionHeader title={details.offerings.title} subtitle={details.offerings.subtitle} />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {details.offerings.groups.map((g, i) => {
                  const GIcon = g.icon;
                  return (
                    <motion.div
                      key={g.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="bg-background p-7 group hover:bg-secondary/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <GIcon className="w-5 h-5 text-brand-dark" strokeWidth={1.75} />
                        <h4 className="font-display text-xl font-semibold text-foreground">{g.label}</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {g.items.map((it) => (
                          <li key={it} className="text-base text-muted-foreground flex items-start gap-3 leading-relaxed font-light">
                            <span className="text-brand mt-2 shrink-0">·</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </Section>

            {/* HOW */}
            <Section eyebrow="03 — How" kicker="Our approach">
              <SectionHeader title={details.approach.title} subtitle={details.approach.subtitle} />
              <div className="mt-12 relative">
                <div aria-hidden className="hidden md:block absolute left-0 right-0 top-5 h-px bg-border" />
                <motion.div
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="hidden md:block absolute left-0 right-0 top-5 h-px bg-brand origin-left"
                />
                <div
                  className={`grid grid-cols-1 gap-8 md:gap-4 relative ${
                    details.approach.steps.length >= 4
                      ? 'md:grid-cols-4'
                      : details.approach.steps.length === 3
                      ? 'md:grid-cols-3'
                      : 'md:grid-cols-2'
                  }`}
                >
                  {details.approach.steps.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                      className="relative md:pr-4"
                    >
                      <div className="flex md:block items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full bg-background border-2 border-brand flex items-center justify-center font-display text-sm font-bold text-brand-dark tabular-nums shrink-0 md:mb-5">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 hidden md:block">
                            Step {i + 1}
                          </div>
                          <p className="text-base md:text-lg text-foreground/90 leading-snug font-light">{s}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Section>

            {/* OUTCOMES */}
            <Section eyebrow="04 — Outcomes" kicker="What you get" muted>
              <SectionHeader title={details.outcomes.title} subtitle={details.outcomes.subtitle} />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {details.outcomes.points.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-start gap-4 py-3 border-b border-border/60"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-1 text-brand shrink-0" strokeWidth={1.75} />
                    <span className="text-lg text-foreground/90 leading-relaxed font-light">{p}</span>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* WHY US */}
            <Section eyebrow="05 — Why us" kicker="The difference">
              <SectionHeader title={details.why.title} />
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {details.why.points.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4 py-3 border-b border-border/60"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-1 text-brand shrink-0" strokeWidth={1.75} />
                    <span className="text-lg text-foreground/90 leading-relaxed font-light">{p}</span>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* FINAL CTA */}
            <section className="px-8 sm:px-16 py-20 bg-foreground text-background relative overflow-hidden">
              <div aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px] bg-brand/20" />
              <div className="relative max-w-3xl">
                <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-brand">
                  Let's talk
                </span>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight mt-5">
                  {details.finalCta.headline}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <a href="#contact" onClick={() => onOpenChange(false)}>
                    <Button size="lg" className="bg-brand hover:bg-brand-dark text-white text-base rounded-full px-6">
                      <Calendar className="w-4 h-4" />
                      {details.finalCta.primary}
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background text-base rounded-full px-6"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {details.finalCta.secondary}
                  </Button>
                </div>
              </div>
            </section>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Section = ({
  eyebrow,
  kicker,
  children,
  muted,
}: {
  eyebrow: string;
  kicker?: string;
  children: React.ReactNode;
  muted?: boolean;
}) => (
  <section className={`px-8 sm:px-16 py-16 sm:py-20 ${muted ? 'bg-secondary/40' : 'bg-background'} border-b border-border`}>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-2"
    >
      <span className="h-px w-10 bg-brand" />
      <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-brand-dark">
        {eyebrow}
      </span>
      {kicker && (
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          · {kicker}
        </span>
      )}
    </motion.div>
    {children}
  </section>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="max-w-3xl"
  >
    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight">
      {title}
    </h3>
    {subtitle && (
      <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
        {subtitle}
      </p>
    )}
  </motion.div>
);