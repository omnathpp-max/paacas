import { useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Rocket,
  Building2,
  Globe2,
  Briefcase,
  CheckCircle2,
  Sparkles,
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
  problems: { title: string; items: string[] };
  offerings: {
    title: string;
    groups: { icon: ComponentType<LucideProps>; label: string; items: string[] }[];
  };
  approach: { title: string; steps: string[] };
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
    headline: 'Everything Your Startup Needs, From Day 1 to Scale',
    sub: 'From incorporation to funding and ongoing compliance, we set up your finance and legal backbone so you can focus on building your business.',
    cta: 'Book a Free Consultation',
  },
  problems: {
    title: 'Built for the Challenges Every Startup Faces',
    items: [
      'Not sure how to structure your company?',
      'Worried about missing compliance deadlines?',
      'Struggling with investor readiness?',
      'No clarity on finances, burn, or runway?',
    ],
  },
  offerings: {
    title: 'Startup Finance & Compliance, Handled End to End',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
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
                className="group relative text-left p-8 lg:p-10 rounded-3xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-transparent hover:shadow-[0_25px_60px_-15px_hsl(109_53%_50%/0.45)] overflow-hidden"
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

                {/* Soft gradient wash that fills from bottom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-[hsl(109_53%_50%/0.10)] via-transparent to-[hsl(180_35%_45%/0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Expanding spotlight from icon */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[hsl(109_53%_50%/0.25)] blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"
                />

                {/* Floating decorative number */}
                <div
                  aria-hidden
                  className="absolute top-6 right-7 font-display text-6xl font-bold text-brand/0 group-hover:text-brand/10 -translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                >
                  0{i + 1}
                </div>

                <div className="relative flex items-start gap-5">
                  <div className="relative shrink-0">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-brand/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
                    />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)] text-brand-dark group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent group-hover:rotate-[-8deg] group-hover:scale-110 transition-all duration-500 ease-out">
                      <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl lg:text-[1.65rem] font-semibold text-foreground leading-snug group-hover:text-brand-dark transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{a.description}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-dark relative">
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
        <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] sm:w-full p-0 bg-background border-border max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl [&>button]:right-4 [&>button]:top-4 [&>button]:z-50 [&>button]:rounded-full [&>button]:bg-background/90 [&>button]:backdrop-blur-md [&>button]:border [&>button]:border-border [&>button]:shadow-md [&>button]:p-2 [&>button]:opacity-100 [&>button>svg]:h-4 [&>button>svg]:w-4 [&>button]:text-foreground hover:[&>button]:bg-background">
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
    <div className="p-8 sm:p-10">
      <DialogHeader>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[hsl(109_53%_50%/0.12)] border border-[hsl(109_53%_50%/0.25)] text-brand-dark">
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-foreground text-left">
            {audience.title}
          </DialogTitle>
        </div>
        <DialogDescription className="text-muted-foreground text-base leading-relaxed pt-2 text-left">
          {audience.description}
        </DialogDescription>
      </DialogHeader>
      <p className="mt-6 text-muted-foreground">Detailed information coming soon.</p>
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
    <div className="overflow-y-auto max-h-[92vh]">
      {/* Hero */}
      <div className="relative px-6 sm:px-10 pt-8 sm:pt-10 pb-8 bg-hero-gradient text-primary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-[100px] bg-[hsl(109_53%_50%/0.4)]"
        />
        <div className="relative">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 backdrop-blur-sm">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(109_53%_70%)]">
                Startup Solutions
              </span>
            </div>
            <DialogTitle className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-left">
              {details.hero.headline}
            </DialogTitle>
            <DialogDescription className="text-base text-white/75 leading-relaxed pt-3 text-left">
              {details.hero.sub}
            </DialogDescription>
          </DialogHeader>
          <Button className="mt-6 bg-brand hover:bg-brand-dark text-white shadow-brand">
            <Calendar className="w-4 h-4" />
            {details.hero.cta}
          </Button>
        </div>
      </div>

      {/* Problems */}
      <Block title={details.problems.title}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {details.problems.items.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border"
            >
              <Sparkles className="w-4 h-4 mt-0.5 text-brand shrink-0" />
              <span className="text-sm text-foreground/80">{p}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* Offerings */}
      <Block title={details.offerings.title} muted>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.offerings.groups.map((g) => {
            const GIcon = g.icon;
            return (
              <div
                key={g.label}
                className="p-5 rounded-2xl bg-card border border-border hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[hsl(109_53%_50%/0.12)] text-brand-dark">
                    <GIcon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <h4 className="font-semibold text-foreground">{g.label}</h4>
                </div>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Block>

      {/* Approach */}
      <Block title={details.approach.title}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {details.approach.steps.map((s, i) => (
            <div
              key={s}
              className="relative p-4 rounded-xl bg-secondary border border-border"
            >
              <div className="text-xs font-bold text-brand-dark mb-2">0{i + 1}</div>
              <p className="text-sm text-foreground/80 leading-snug">{s}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* Proof */}
      <Block title={details.proof.title} muted>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {details.proof.points.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                <span className="text-sm font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>
          <blockquote className="p-5 rounded-2xl bg-card border border-border">
            <p className="text-sm italic text-foreground/80 leading-relaxed">
              &ldquo;{details.proof.quote.text}&rdquo;
            </p>
            <footer className="text-xs text-muted-foreground mt-3">
              {details.proof.quote.by}
            </footer>
          </blockquote>
        </div>
      </Block>

      {/* Why */}
      <Block title={details.why.title}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {details.why.points.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 mt-1 text-brand shrink-0" />
              <span className="text-sm text-foreground/80">{p}</span>
            </div>
          ))}
        </div>
      </Block>

      {/* Final CTA */}
      <div className="px-6 sm:px-10 py-10 bg-hero-gradient text-primary-foreground">
        <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
          {details.finalCta.headline}
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button className="bg-brand hover:bg-brand-dark text-white shadow-brand">
            <Calendar className="w-4 h-4" />
            {details.finalCta.primary}
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <MessageCircle className="w-4 h-4" />
            {details.finalCta.secondary}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Block = ({
  title,
  children,
  muted,
}: {
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) => (
  <div className={`px-6 sm:px-10 py-8 ${muted ? 'bg-secondary/50' : 'bg-background'}`}>
    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-5">
      {title}
    </h3>
    {children}
  </div>
);