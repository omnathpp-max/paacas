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
  Building2,
  FileText,
  ScrollText,
  Calculator,
  Settings2,
  CalendarCheck,
  Receipt,
  Layers,
  Briefcase,
  LineChart,
  Target,
  Activity,
  Compass,
  Plane,
  ShieldCheck,
  Users2,
  Landmark,
  Scale,
  HandCoins,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { ServiceDetailModal, type ServiceDetails } from './ServiceDetailModal';

type Service = {
  icon: ComponentType<LucideProps>;
  title: string;
  short: string;
  description: string;
  outcome: string;
  details: ServiceDetails;
};

const services: Service[] = [
  {
    icon: Package,
    title: 'Startup Launch & Compliance Stack',
    short: 'Launch & Compliance',
    description:
      'From incorporation to filings — we set up your entire compliance backbone.',
    outcome: 'Zero confusion, fully compliant from day one.',
    details: {
      eyebrow: 'Startup Launch & Compliance Stack',
      hero: {
        headline: 'From Idea to Fully Compliant Business — Done Right',
        sub: 'We don\u2019t just help you register a company. We set up a complete compliance and finance foundation that supports you from day one to scale.',
        cta: 'Book a Free Consultation',
      },
      problems: {
        title: 'What This Solves',
        subtitle: 'We eliminate guesswork and set things up right the first time.',
        items: [
          'Confusion on entity type (Pvt Ltd, LLP, etc.)',
          'Delays and errors in incorporation',
          'Missing initial compliance requirements',
          'No clarity on post-incorporation filings',
          'Poor financial structure from the start',
        ],
      },
      offerings: {
        title: 'Our End-to-End Coverage',
        subtitle: 'Six pillars that make up a complete startup foundation.',
        groups: [
          {
            icon: Building2,
            label: 'Entity Structuring & Incorporation',
            items: [
              'Choosing the right entity (Pvt Ltd / LLP / etc.)',
              'Name approval, incorporation, PAN, TAN',
              'Drafting MOA, AOA & incorporation documents',
            ],
          },
          {
            icon: FileText,
            label: 'Founder & Legal Setup',
            items: ['Founder agreements', 'Shareholding structure', 'ESOP framework setup'],
          },
          {
            icon: ScrollText,
            label: 'Registrations & Compliance Setup',
            items: [
              'GST registration',
              'Shops & Establishment / local registrations',
              'Professional tax & statutory registrations',
            ],
          },
          {
            icon: Calculator,
            label: 'Finance & Compliance Backbone',
            items: [
              'Accounting system setup',
              'Chart of accounts design',
              'Compliance calendar (GST, ROC, IT)',
            ],
          },
          {
            icon: Settings2,
            label: 'Process & Documentation',
            items: [
              'Invoicing & documentation templates',
              'Expense tracking systems',
              'Record-keeping structure',
            ],
          },
          {
            icon: CalendarCheck,
            label: 'Ongoing Compliance Management',
            items: ['GST filings', 'Income tax filings', 'ROC compliance & tracking'],
          },
        ],
      },
      approach: {
        title: 'How We Execute',
        subtitle: 'A founder-friendly process that gets it right from day one.',
        steps: [
          'Understand your business model & growth plan',
          'Design the right, tax-efficient structure',
          'Set up systems & compliance end to end',
          'Enable financial visibility from day one',
        ],
      },
      outcomes: {
        title: 'What You Get',
        subtitle: 'A startup foundation built to support real growth.',
        points: [
          'Fully compliant business from day one',
          'Clear structure for growth and funding',
          'No missed deadlines or penalties',
          'Organised financial and legal systems',
          'Confidence to focus on building',
        ],
      },
      why: {
        title: 'Why Founders Choose This',
        points: [
          'End-to-end setup (not fragmented services)',
          'Built for scale, not just compliance',
          'Fast, structured execution',
          'Founder-friendly guidance',
        ],
      },
      finalCta: {
        headline: 'Ready to set up your startup the right way?',
        primary: 'Book a Free Consultation',
        secondary: 'Chat on WhatsApp',
      },
    },
  },
  {
    icon: BarChart3,
    title: 'Tax Optimization & Structuring',
    short: 'Tax Optimization',
    description:
      'We don\u2019t just file returns — we reduce your tax liability legally.',
    outcome: 'More cash retained, smarter structuring.',
    details: {
      eyebrow: 'Tax Optimization & Structuring',
      hero: {
        headline: 'Pay Less Tax. Legally. Strategically.',
        sub: 'Most businesses overpay tax because no one designs their structure proactively. We do.',
        cta: 'Book a Tax Review',
      },
      problems: {
        title: 'What This Solves',
        subtitle: 'Common tax leakages we plug for founders and growing companies.',
        items: [
          'Paying more tax than legally required',
          'No long-term tax planning, only filing',
          'Inefficient business or shareholding structure',
          'Missed deductions, exemptions and incentives',
          'Cross-entity transactions done without planning',
        ],
      },
      offerings: {
        title: 'How We Optimise Your Tax',
        subtitle: 'A complete tax strategy layer over your business.',
        groups: [
          {
            icon: Layers,
            label: 'Entity & Group Structuring',
            items: ['Holding & subsidiary design', 'Promoter & founder structuring', 'Asset protection layout'],
          },
          {
            icon: Receipt,
            label: 'Direct Tax Planning',
            items: ['Income tax strategy', 'Capital gains planning', 'Dividend & distribution structuring'],
          },
          {
            icon: BarChart3,
            label: 'GST & Indirect Tax',
            items: ['GST advisory & structuring', 'Input credit optimisation', 'Sector-specific advisory'],
          },
          {
            icon: ShieldCheck,
            label: 'Tax Risk & Litigation',
            items: ['Notice handling', 'Assessments & appeals', 'Representation before authorities'],
          },
        ],
      },
      approach: {
        title: 'Our Approach',
        subtitle: 'Strategy first, filing second.',
        steps: [
          'Diagnose current tax position',
          'Design an optimised structure',
          'Implement with full compliance',
          'Review and refine every year',
        ],
      },
      outcomes: {
        title: 'What You Get',
        points: [
          'Lower effective tax rate, legally',
          'More cash retained in the business',
          'A structure that scales with you',
          'Audit and notice readiness',
        ],
      },
      why: {
        title: 'Why Clients Choose Us',
        points: [
          'Proactive planning, not reactive filing',
          'Deep cross-domain expertise',
          'Aggressive yet fully compliant',
          'Long-term partnership approach',
        ],
      },
      finalCta: {
        headline: 'Stop overpaying. Start structuring.',
        primary: 'Book a Tax Review',
        secondary: 'Chat on WhatsApp',
      },
    },
  },
  {
    icon: TrendingUp,
    title: 'Virtual CFO & Growth Advisory',
    short: 'Virtual CFO',
    description: 'Financial clarity, MIS, forecasting, and strategic guidance.',
    outcome: 'Better decisions, faster growth.',
    details: {
      eyebrow: 'Virtual CFO & Growth Advisory',
      hero: {
        headline: 'A CFO\u2019s Brain, Without the CFO\u2019s Cost.',
        sub: 'Get the financial clarity, controls and strategy of a full-time CFO — built around your stage and ambition.',
        cta: 'Book a Discovery Call',
      },
      problems: {
        title: 'What This Solves',
        subtitle: 'Most growing businesses lack the financial visibility to make confident decisions.',
        items: [
          'No clarity on burn, runway or unit economics',
          'Decisions made on gut instead of numbers',
          'No reliable MIS or monthly reporting',
          'Cash flow surprises and missed forecasts',
          'No one owning finance strategy',
        ],
      },
      offerings: {
        title: 'What a Virtual CFO Engagement Includes',
        subtitle: 'A complete finance leadership layer for your business.',
        groups: [
          {
            icon: LineChart,
            label: 'MIS & Financial Reporting',
            items: ['Monthly MIS dashboards', 'KPI & metric tracking', 'Board-ready reports'],
          },
          {
            icon: Target,
            label: 'Budgeting & Forecasting',
            items: ['Annual budgets', 'Rolling forecasts', 'Scenario planning'],
          },
          {
            icon: Activity,
            label: 'Cash Flow & Working Capital',
            items: ['Cash flow management', 'Runway tracking', 'Working capital optimisation'],
          },
          {
            icon: Compass,
            label: 'Strategic Advisory',
            items: ['Pricing & margin reviews', 'Growth strategy support', 'Investor & board advisory'],
          },
        ],
      },
      approach: {
        title: 'How We Engage',
        subtitle: 'Embedded with your team, on a clear cadence.',
        steps: [
          'Diagnose finance & data maturity',
          'Set up reporting & forecasting',
          'Run monthly review cadence',
          'Drive strategic decisions with data',
        ],
      },
      outcomes: {
        title: 'What You Get',
        points: [
          'Real-time financial visibility',
          'Confident, data-backed decisions',
          'Better cash & runway control',
          'A finance partner who thinks like a founder',
        ],
      },
      why: {
        title: 'Why Founders Choose Us',
        points: [
          'CFO-level thinking, fractional cost',
          'Hands-on, not just advisory',
          'Tech-enabled workflows',
          'Experience across stages and sectors',
        ],
      },
      finalCta: {
        headline: 'Get financial clarity. Grow with confidence.',
        primary: 'Book a Discovery Call',
        secondary: 'Chat on WhatsApp',
      },
    },
  },
  {
    icon: Globe2,
    title: 'FEMA & Cross-Border Advisory',
    short: 'Cross-Border',
    description: 'FDI, ODI, ESOPs, and international structuring handled right.',
    outcome: 'No regulatory surprises.',
    details: {
      eyebrow: 'FEMA & Cross-Border Advisory',
      hero: {
        headline: 'Cross-Border, Without the Compliance Headaches.',
        sub: 'FDI, ODI, ESOPs, transfer pricing and global structuring — handled the right way, the first time.',
        cta: 'Talk to a FEMA Expert',
      },
      problems: {
        title: 'What This Solves',
        subtitle: 'Cross-border transactions are full of regulatory landmines. We help you avoid all of them.',
        items: [
          'Confusion around FEMA, RBI and FDI rules',
          'Wrong structuring of foreign investments',
          'Non-compliance in ESOPs to overseas employees',
          'Risk of penalties on inbound / outbound flows',
          'No clarity on tax and treaty implications',
        ],
      },
      offerings: {
        title: 'What We Cover',
        subtitle: 'Full-spectrum cross-border advisory for businesses and individuals.',
        groups: [
          {
            icon: Plane,
            label: 'Inbound Investment (FDI)',
            items: ['FDI structuring', 'Sectoral cap analysis', 'RBI reporting & filings'],
          },
          {
            icon: Globe2,
            label: 'Outbound Investment (ODI)',
            items: ['Overseas subsidiary setup', 'ODI compliance', 'Cross-border holding structures'],
          },
          {
            icon: Users2,
            label: 'ESOPs & Cross-Border Talent',
            items: ['Global ESOP structuring', 'Cross-border tax impact', 'Compliance for overseas grants'],
          },
          {
            icon: ShieldCheck,
            label: 'FEMA Compliance & Advisory',
            items: ['FEMA opinions & memos', 'Compounding & remediation', 'Ongoing compliance support'],
          },
        ],
      },
      approach: {
        title: 'Our Approach',
        subtitle: 'Practical, risk-aware, and execution-focused.',
        steps: [
          'Map your cross-border footprint',
          'Design the optimal structure',
          'Execute filings and approvals',
          'Maintain ongoing compliance',
        ],
      },
      outcomes: {
        title: 'What You Get',
        points: [
          'Fully compliant cross-border setup',
          'No regulatory or RBI surprises',
          'Tax-efficient global structure',
          'Confidence to scale internationally',
        ],
      },
      why: {
        title: 'Why Clients Choose Us',
        points: [
          'Deep FEMA & international tax expertise',
          'End-to-end execution capability',
          'Strong relationships with authorities',
          'Trusted by NRIs and global founders',
        ],
      },
      finalCta: {
        headline: 'Go global with confidence.',
        primary: 'Talk to a FEMA Expert',
        secondary: 'Chat on WhatsApp',
      },
    },
  },
  {
    icon: Wallet,
    title: 'Valuation & Transaction Support',
    short: 'Valuation & Deals',
    description:
      'Business valuations for funding, compliance, restructuring, and strategic decisions.',
    outcome: 'Defensible valuations that stand up to investors and regulators.',
    details: {
      eyebrow: 'Valuation & Transaction Support',
      hero: {
        headline: 'Valuations That Stand Up to Investors and Regulators.',
        sub: 'Whether you\u2019re raising capital, restructuring, or planning an exit — we deliver defensible, decision-ready valuations.',
        cta: 'Request a Valuation',
      },
      problems: {
        title: 'What This Solves',
        subtitle: 'Most valuations fall apart under scrutiny. Ours don\u2019t.',
        items: [
          'Valuation reports rejected by investors or regulators',
          'No clarity on the right valuation methodology',
          'Surprises during due diligence',
          'Tax issues from poorly priced transactions',
          'Complex deal structures with no clear advisory',
        ],
      },
      offerings: {
        title: 'What We Cover',
        subtitle: 'A complete valuation and deal-support practice.',
        groups: [
          {
            icon: HandCoins,
            label: 'Fundraising Valuations',
            items: ['Equity round valuations', 'Convertible & SAFE pricing', 'Investor-ready models'],
          },
          {
            icon: Landmark,
            label: 'Regulatory Valuations',
            items: ['Income Tax (Rule 11UA)', 'FEMA / RBI valuations', 'Companies Act valuations'],
          },
          {
            icon: Briefcase,
            label: 'M&A & Transaction Support',
            items: ['Buy-side & sell-side advisory', 'Financial due diligence', 'Deal structuring'],
          },
          {
            icon: Scale,
            label: 'Restructuring & Special Situations',
            items: ['Internal restructuring', 'Demerger & slump sale', 'ESOP & buyback valuations'],
          },
        ],
      },
      approach: {
        title: 'How We Work',
        subtitle: 'Rigorous methodology, clear narrative, defensible numbers.',
        steps: [
          'Understand the purpose and audience',
          'Select the right methodology',
          'Build a defensible model & report',
          'Support you through scrutiny & negotiation',
        ],
      },
      outcomes: {
        title: 'What You Get',
        points: [
          'Defensible, regulator-ready valuations',
          'Stronger negotiating position',
          'Cleaner due diligence outcomes',
          'Confidence in every deal',
        ],
      },
      why: {
        title: 'Why Clients Choose Us',
        points: [
          'Registered valuers with deep deal experience',
          'Multi-disciplinary team (tax + finance + legal)',
          'Trusted by founders, investors and counsels',
          'Reports that hold up under scrutiny',
        ],
      },
      finalCta: {
        headline: 'Get a valuation built to defend.',
        primary: 'Request a Valuation',
        secondary: 'Chat on WhatsApp',
      },
    },
  },
];

export const Services = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];
  const ActiveIcon = active.icon;

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
            <Sparkles className="w-3.5 h-3.5 animate-sparkle" strokeWidth={2} />
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            Not Just Services. <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Solutions That </span>
            <span className="text-brand italic">Move the Needle.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            Built for founders and growing companies that value impact, clarity, and
            execution that delivers.
          </p>
        </motion.div>

        {/* Mobile: clean vertical list of tappable service cards */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.button
                key={s.title}
                type="button"
                onClick={() => setOpenIdx(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative w-full text-left rounded-2xl border border-border bg-card p-5 flex items-start gap-4 active:scale-[0.99] transition-transform"
                aria-label={`View details for ${s.title}`}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)] text-brand-dark shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed font-light">
                    {s.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-brand shrink-0" strokeWidth={2} />
                    <p className="text-xs text-foreground/85 font-medium leading-snug">
                      {s.outcome}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-muted-foreground shrink-0 mt-0.5">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop: interactive rail + showcase panel */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_1.4fr] gap-12 items-start">
          {/* Left rail: tab list */}
          <div
            role="tablist"
            aria-label="Services"
            className="flex flex-col gap-1.5"
          >
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeIdx;
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`group relative flex items-center gap-4 px-5 py-4 min-h-[5.25rem] rounded-2xl border text-left transition-all duration-500 ${
                    isActive
                      ? 'bg-card border-brand/40 shadow-[0_15px_45px_-25px_hsl(109_53%_50%/0.45)]'
                      : 'bg-transparent border-border hover:border-brand/30 hover:bg-card/60'
                  }`}
                >
                  {/* Active indicator bar */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-brand transition-all duration-500 ${
                      isActive ? 'h-8 opacity-100' : 'h-0 opacity-0'
                    }`}
                  />
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-500 ${
                      isActive
                        ? 'bg-brand text-white'
                        : 'bg-[hsl(109_53%_50%/0.08)] text-brand-dark border border-[hsl(109_53%_50%/0.2)] group-hover:bg-[hsl(109_53%_50%/0.15)]'
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-[1.02rem] font-semibold leading-tight tracking-tight transition-colors ${
                        isActive ? 'text-foreground' : 'text-foreground/80'
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right showcase */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2rem] border border-border bg-card overflow-hidden"
          >
            {/* Decorative background */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-[120px] bg-[hsl(109_53%_50%/0.18)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            <div className="relative p-12 lg:p-14 flex flex-col gap-8 min-h-[26rem]">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand text-white shadow-[0_15px_40px_-15px_hsl(109_53%_50%/0.6)]">
                  <ActiveIcon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-dark">
                  {active.short}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl lg:text-[2.1rem] font-semibold text-foreground leading-tight tracking-tight">
                  {active.title}
                </h3>
                <p className="text-muted-foreground text-lg mt-4 max-w-xl font-light leading-relaxed">
                  {active.description}
                </p>
              </div>

              <div className="mt-auto flex flex-row items-center justify-between gap-6 pt-6 border-t border-border/70">
                <div className="flex items-start gap-3 max-w-md">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[hsl(109_53%_50%/0.12)] text-brand-dark shrink-0">
                    <Target className="w-4 h-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      The Outcome
                    </p>
                    <p className="text-foreground font-medium leading-snug">
                      {active.outcome}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIdx(activeIdx)}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-brand transition-all duration-300 shrink-0"
                >
                  Explore full breakdown
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" strokeWidth={2} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ServiceDetailModal
        open={openIdx !== null}
        onOpenChange={(o) => !o && setOpenIdx(null)}
        icon={openIdx !== null ? services[openIdx].icon : Package}
        title={openIdx !== null ? services[openIdx].title : ''}
        details={openIdx !== null ? services[openIdx].details : null}
      />
    </section>
  );
};