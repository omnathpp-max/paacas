import { useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Rocket,
  Building2,
  Globe2,
  Briefcase,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Package,
  BarChart3,
  TrendingUp,
  Wallet,
  type LucideProps,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type StartupDetails = {
  hero: { headline: string; sub: string; cta: string };
  problems: { title: string; subtitle: string; items: string[] };
  offerings: {
    title: string;
    subtitle: string;
    groups: { icon: ComponentType<LucideProps>; label: string; items: string[] }[];
  };
  approach: { title: string; subtitle: string; steps: string[] };
  proof: { title: string; points: string[]; quote: { text: string; by: string } };
  why: { title: string; points: string[] };
  finalCta: { headline: string; primary: string; secondary: string };
};

type Audience = {
  id: string;
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  cta: string;
  details?: StartupDetails;
};

const startupDetails: StartupDetails = {
  hero: {
    headline: 'From Idea to Scale - We\u2019ve Got Your Startup Covered',
    sub: 'You build the business. We handle everything from setup to funding and compliance.',
    cta: 'Book a Free Consultation',
  },
  problems: {
    title: 'Common Startup Challenges',
    subtitle:
      'Most founders face the same issues early on, we help you solve them from day one.',
    items: [
      'Not sure how to structure your company?',
      'Worried about missing compliance deadlines?',
      'Struggling with investor readiness?',
      'No clarity on finances, burn, or runway?',
    ],
  },
  offerings: {
    title: 'Startup Finance & Compliance, Handled End to End',
    subtitle:
      'A complete suite of services covering every financial and legal need as you grow.',
    groups: [
      {
        icon: Package,
        label: 'Startup Launch & Setup',
        items: ['Company incorporation', 'ESOP structuring', 'Founder agreements'],
      },
      {
        icon: BarChart3,
        label: 'Compliance & Tax',
        items: ['GST, Income Tax, ROC filings', 'Ongoing compliance tracking'],
      },
      {
        icon: TrendingUp,
        label: 'Virtual CFO',
        items: ['MIS & financial reporting', 'Budgeting & forecasting', 'Cash flow management'],
      },
      {
        icon: Wallet,
        label: 'Fundraising Support',
        items: ['Financial modeling', 'Valuation', 'Investor readiness'],
      },
    ],
  },
  approach: {
    title: 'How We Work With Startups',
    subtitle:
      'A clear, structured process that takes you from setup to scale, step by step.',
    steps: [
      'Set up the right structure',
      'Build compliance systems',
      'Give financial visibility',
      'Support funding & growth',
    ],
  },
  proof: {
    title: 'Trusted by Founders Building What\u2019s Next',
    points: ['Helped startups raise ₹XX Cr', 'Worked with X+ funded startups'],
    quote: {
      text: 'PAA became the finance team we didn\u2019t know we needed. From incorporation to our seed round, they handled it all.',
      by: 'Founder, Seed-stage SaaS',
    },
  },
  why: {
    title: 'Why Startups Choose PAA',
    points: [
      'End-to-end support (not fragmented)',
      'Tech-enabled workflows',
      'Fast turnaround',
      'Founder-friendly approach',
    ],
  },
  finalCta: {
    headline: 'Focus on Building. We\u2019ll Handle the Rest.',
    primary: 'Book a Free Consultation',
    secondary: 'Chat on WhatsApp',
  },
};

const audiences: Audience[] = [
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups & Founders',
    description:
      'Struggling with compliance, structuring, and investor readiness? We bring clarity from day one.',
    cta: 'Explore Startup Solutions',
    details: startupDetails,
  },
  {
    id: 'smes',
    icon: Building2,
    title: 'SMEs & Growing Companies',
    description:
      'Outgrowing your accountant? We help you scale with systems, controls, and advisory.',
    cta: 'Explore Growth Solutions',
  },
  {
    id: 'global',
    icon: Globe2,
    title: 'NRIs, Global Businesses & Cross-Border Clients',
    description:
      'Managing India compliance or expanding across borders? We simplify FEMA, tax, and inbound or outbound structuring.',
    cta: 'Explore Global Solutions',
  },
  {
    id: 'hni',
    icon: Briefcase,
    title: 'HNIs & Professionals',
    description:
      'Doctors, consultants and professionals paying more tax than you should? We structure your income and investments the right way.',
    cta: 'Explore Wealth & Professional Services',
  },
];

export const WhoWeHelp = () => {
  const [selected, setSelected] = useState<Audience | null>(null);

  return (
    <section id="who-we-help" className="relative py-24 overflow-hidden bg-secondary">
      {/* Soft ambient accents */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.12)]" />
        <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(220_50%_15%/0.08)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
            Who We Help
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-tight">
            Built for Businesses <br className="hidden md:block" />
            That Are <span className="text-brand italic">Growing Fast</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-5 max-w-2xl">
            Whatever stage you&rsquo;re in, we tailor our finance partnership to fit your ambition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.button
                key={a.id}
                onClick={() => setSelected(a)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-full flex text-left p-8 lg:p-10 rounded-3xl border border-border bg-card hover:bg-primary transition-[background-color,border-color,box-shadow] duration-500 hover:border-transparent hover:shadow-[0_25px_60px_-15px_hsl(109_53%_50%/0.45)] overflow-hidden"
              >
                {/* Animated gradient border */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'conic-gradient(from 0deg, hsl(109 53% 50%), hsl(180 35% 45%), hsl(220 50% 25%), hsl(109 53% 50%))',
                    padding: '1.5px',
                    WebkitMask:
                      'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    animation: 'spin 4s linear infinite',
                  }}
                />

                {/* Soft gradient wash overlay on dark hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-[hsl(109_53%_50%/0.18)] via-transparent to-[hsl(180_35%_45%/0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Expanding spotlight from icon */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[hsl(109_53%_50%/0.25)] blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"
                />

                <div className="relative flex items-start gap-5 w-full">
                  <div className="relative shrink-0 [perspective:800px]">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-brand/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
                    />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)] text-brand-dark group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl lg:text-[1.65rem] font-semibold text-foreground leading-snug group-hover:text-white transition-colors duration-500">
                      {a.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/75 mt-3 leading-relaxed transition-colors duration-500">{a.description}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-dark group-hover:text-white transition-colors duration-500 relative">
                      <span className="relative">
                        {a.cta}
                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-500 ease-out" />
                      </span>
                      <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-[hsl(109_53%_50%/0.1)] group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-[-45deg]" />
                      </span>
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] sm:w-full p-0 bg-background border-0 max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl font-sans shadow-[0_30px_80px_-20px_hsl(220_50%_15%/0.45)] data-[state=open]:duration-500 data-[state=open]:ease-out data-[state=closed]:duration-200 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-95 [&>button]:right-4 [&>button]:top-4 [&>button]:z-50 [&>button]:rounded-full [&>button]:bg-background/90 [&>button]:backdrop-blur-md [&>button]:border [&>button]:border-border [&>button]:shadow-md [&>button]:p-2 [&>button]:opacity-100 [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button]:text-foreground hover:[&>button]:bg-background">
          {selected?.details ? (
            <StartupModalBody audience={selected} details={selected.details} />
          ) : selected ? (
            <ComingSoonBody audience={selected} />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const ComingSoonBody = ({ audience }: { audience: Audience }) => {
  const Icon = audience.icon;
  return (
    <div className="p-8 sm:p-12">
      <DialogHeader>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[hsl(109_53%_50%/0.12)] border border-[hsl(109_53%_50%/0.25)] text-brand-dark">
            <Icon className="w-6 h-6" strokeWidth={1.75} />
          </div>
          <DialogTitle className="font-display text-3xl md:text-4xl font-semibold text-foreground text-left">
            {audience.title}
          </DialogTitle>
        </div>
        <DialogDescription className="text-muted-foreground text-base md:text-lg leading-relaxed pt-3 text-left">
          {audience.description}
        </DialogDescription>
      </DialogHeader>
      <p className="mt-8 text-base md:text-lg text-muted-foreground">Detailed information coming soon.</p>
    </div>
  );
};

const StartupModalBody = ({
  audience,
  details,
}: {
  audience: Audience;
  details: StartupDetails;
}) => {
  const Icon = audience.icon;
  return (
    <div className="overflow-y-auto max-h-[92vh] bg-background">
      {/* HERO — editorial, minimal */}
      <header className="relative px-8 sm:px-16 pt-16 sm:pt-20 pb-14 bg-background border-b border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.2)] text-brand-dark">
              <Icon className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              For {audience.title}
            </span>
          </div>
          <DialogTitle className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground text-left max-w-3xl">
            {details.hero.headline}
          </DialogTitle>
          <DialogDescription className="text-lg md:text-xl text-muted-foreground leading-relaxed pt-6 text-left max-w-2xl font-light">
            {details.hero.sub}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-10 flex items-center gap-4">
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background text-base rounded-full px-6">
            <Calendar className="w-4 h-4" />
            {details.hero.cta}
          </Button>
          <span className="text-sm text-muted-foreground hidden sm:inline">Free 30-min discovery call</span>
        </div>
      </header>

      {/* WHY — the problem we solve */}
      <Section eyebrow="01 — Why" kicker="The problem">
        <SectionHeader
          title={details.problems.title}
          subtitle={details.problems.subtitle}
        />
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

      {/* WHAT — what we deliver */}
      <Section eyebrow="02 — What" kicker="The solution" muted>
        <SectionHeader
          title={details.offerings.title}
          subtitle={details.offerings.subtitle}
        />
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

      {/* HOW — horizontal connected timeline */}
      <Section eyebrow="03 — How" kicker="The process">
        <SectionHeader
          title={details.approach.title}
          subtitle={details.approach.subtitle}
        />
        <div className="mt-12 relative">
          {/* connector line */}
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-5 h-px bg-border" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden md:block absolute left-0 right-0 top-5 h-px bg-brand origin-left"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {details.approach.steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="relative md:pr-4"
              >
                {/* node */}
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

      {/* WHY US */}
      <Section eyebrow="04 — Why us" kicker="The difference" muted>
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

      {/* FINAL CTA — editorial */}
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
            <Button size="lg" className="bg-brand hover:bg-brand-dark text-white text-base rounded-full px-6">
              <Calendar className="w-4 h-4" />
              {details.finalCta.primary}
            </Button>
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