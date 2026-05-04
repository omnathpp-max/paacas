import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Building2, Globe2, Briefcase } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Audience = {
  id: string;
  icon: typeof Rocket;
  emoji: string;
  title: string;
  description: string;
  cta: string;
  modalContent: string;
};

const audiences: Audience[] = [
  {
    id: 'startups',
    icon: Rocket,
    emoji: '🚀',
    title: 'Startups & Founders',
    description:
      'Struggling with compliance, structuring, and investor readiness? We bring clarity from day one.',
    cta: 'Explore Startup Solutions',
    modalContent:
      'Detailed information about our startup solutions will be shared soon.',
  },
  {
    id: 'smes',
    icon: Building2,
    emoji: '🏢',
    title: 'SMEs & Growing Companies',
    description:
      'Outgrowing your accountant? We help you scale with systems, controls, and advisory.',
    cta: 'Explore Growth Solutions',
    modalContent:
      'Detailed information about our growth solutions will be shared soon.',
  },
  {
    id: 'global',
    icon: Globe2,
    emoji: '🌍',
    title: 'NRIs, Global Businesses & Cross-Border Clients',
    description:
      'Managing India compliance or expanding across borders? We simplify FEMA, tax, and inbound/outbound structuring.',
    cta: 'Explore Global Solutions',
    modalContent:
      'Detailed information about our global solutions will be shared soon.',
  },
  {
    id: 'hni',
    icon: Briefcase,
    emoji: '💼',
    title: 'HNIs & Professionals',
    description:
      'Doctors, consultants and professionals — paying more tax than you should? We structure your income and investments the right way.',
    cta: 'Explore Wealth & Professional Services',
    modalContent:
      'Detailed information about our wealth & professional services will be shared soon.',
  },
];

export const WhoWeHelp = () => {
  const [selected, setSelected] = useState<Audience | null>(null);

  return (
    <section
      id="who-we-help"
      className="relative py-24 overflow-hidden bg-[hsl(220_45%_8%)]"
    >
      {/* Ambient background accents to bridge with Hero */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-[-10rem] w-[36rem] h-[36rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.18)]" />
        <div className="absolute bottom-[-10rem] left-[-8rem] w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(180_60%_45%/0.15)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(45 30% 95% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(45 30% 95% / 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(109_53%_60%)] bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
            Who We Help
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[hsl(45_30%_95%)] mt-6 leading-tight">
            Built for Businesses <br className="hidden md:block" />
            That Are <span className="text-[hsl(109_53%_60%)] italic">Growing Fast</span>
          </h2>
          <p className="text-[hsl(45_20%_85%/0.7)] text-lg mt-5 max-w-2xl">
            Whatever stage you're in, we tailor our finance partnership to fit your ambition.
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
                whileHover={{ y: -4 }}
                className="group relative text-left p-8 lg:p-10 rounded-3xl border border-[hsl(45_30%_95%/0.1)] bg-[hsl(220_40%_12%/0.6)] backdrop-blur-sm hover:border-[hsl(109_53%_50%/0.5)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(600px circle at 50% 0%, hsl(109 53% 50% / 0.12), transparent 60%)',
                  }}
                />

                <div className="relative flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-[hsl(109_53%_50%/0.12)] border border-[hsl(109_53%_50%/0.3)] text-[hsl(109_53%_65%)] group-hover:bg-[hsl(109_53%_50%/0.2)] transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl lg:text-[1.65rem] font-semibold text-[hsl(45_30%_95%)] leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-[hsl(45_20%_85%/0.7)] mt-3 leading-relaxed">
                      {a.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[hsl(109_53%_60%)] group-hover:gap-3 transition-all">
                      {a.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-[hsl(220_40%_12%)] border-[hsl(45_30%_95%/0.1)] text-[hsl(45_30%_95%)]">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[hsl(109_53%_50%/0.15)] border border-[hsl(109_53%_50%/0.3)] text-[hsl(109_53%_65%)]">
                    <selected.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-[hsl(45_30%_95%)]">
                    {selected.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-[hsl(45_20%_85%/0.75)] text-base leading-relaxed pt-2">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-[hsl(45_20%_85%/0.75)] leading-relaxed">
                {selected.modalContent}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};