import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, User, X, Linkedin } from 'lucide-react';
import aswinImg from '@/assets/team/aswin.png';
import premnathImg from '@/assets/team/premnath.png';
import amarnathImg from '@/assets/team/amarnath.png';
import kaushikImg from '@/assets/team/kaushik.png';
import thiagarajanImg from '@/assets/team/thiagarajan.png';
import jeevanImg from '@/assets/team/jeevan.png';
import gopalImg from '@/assets/team/gopal.png';

type Partner = {
  num: string;
  name: string;
  role: string;
  qualifications?: string;
  image: string | null;
  description: string;
  bio?: string[];
  linkedin?: string;
};

const partners: Partner[] = [
  {
    num: '01',
    name: 'CA P K Premnath',
    role: 'Partner',
    qualifications: 'FCA · 30+ Years in Practice',
    image: premnathImg as string | null,
    description:
      'Specialises in audits, return filings, and advisory on real estate and disputes.',
    bio: [
      'CA P K Premnath is a Partner at P A A & Associates, Chartered Accountants, with over three decades of experience in practice. He specialises in audit and assurance, including statutory audits and tax audits, and has extensive experience in handling return filings across a diverse client base.',
      'A Fellow Chartered Accountant and Commerce graduate, he advises clients on matters relating to real estate transactions, family arrangements, and dispute resolution. His practical approach and understanding of both financial and regulatory aspects enable him to provide balanced, solution-oriented guidance in sensitive and complex situations.',
      'He has also been involved in matters relating to arbitration and advisory support in family and business disputes, working closely with clients to ensure clarity, compliance, and effective resolution. His experience adds depth to the firm\u2019s capabilities across assurance and advisory services.',
    ],
  },
  {
    num: '02',
    name: 'CA P K Amarnath',
    role: 'Partner',
    qualifications: 'FCA · 30+ Years in Practice',
    image: amarnathImg as string | null,
    description:
      'Advising on taxation, assessments, and regulatory proceedings.',
    bio: [
      'CA P K Amarnath is a Partner at P A A & Associates, Chartered Accountants, with over three decades of experience in practice. He brings deep expertise in taxation, assessment proceedings, and regulatory matters, having represented clients across a wide range of industries.',
      'A Fellow Chartered Accountant and Commerce graduate, he has extensive experience in handling income tax and GST assessments, responding to statutory notices, and managing interactions with regulatory authorities. His practical understanding of procedures and departmental processes enables him to guide clients effectively through complex matters.',
      'Known for his measured approach and strong grounding in tax laws, he plays a key role in ensuring clients are well-prepared, compliant, and confidently represented before authorities. His experience continues to be a cornerstone of the firm\u2019s advisory strength.',
    ],
  },
  {
    num: '03',
    name: 'CA P A Aswin Kumaar',
    role: 'Partner',
    qualifications:
      'MBA (IIM Bangalore) · Diploma in International Taxation · IBBI Registered Valuer · Electrical Engineer',
    image: aswinImg as string | null,
    description:
      'Working with founders on advisory, tax, transactions, and financial strategy.',
    linkedin: 'https://www.linkedin.com/in/aswinkumaarpa/',
    bio: [
      "Aswin Kumaar P A is a Partner at P A A & Associates, Chartered Accountants, and leads the firm's Chennai operations. He specialises in Direct and International Taxation, advising corporates and high net worth individuals on structuring, compliance, and cross-border matters.",
      'He brings a multidisciplinary perspective, backed by qualifications as a Chartered Accountant, MBA from IIM Bangalore, Post Graduate Diploma in International Taxation, Registered Valuer (IBBI), and an Electrical Engineer. This diverse background enables him to approach complex financial and regulatory issues with both technical depth and practical clarity.',
      'His experience spans inbound and outbound investment structuring, FEMA advisory, valuation, and transaction structuring and support across fundraising and strategic deals. He works closely with businesses to navigate evolving tax and regulatory frameworks with a solution-oriented approach.',
      'With a strong focus on the startup and growth-stage ecosystem, he advises on equity fundraising, financial structuring, and investor readiness. His work includes end-to-end support—from legal structuring and financial due diligence to setting up accounting systems and ongoing financial oversight.',
      'He also leads virtual CFO engagements, helping businesses build robust financial processes and make informed strategic decisions. Known for his practical, execution-focused style, he partners with clients to deliver clarity, compliance, and long-term value.',
    ],
  },
];

const network = [
  {
    name: 'CA Kaushik Ganesh',
    firm: 'Sparkwood Advisors',
    image: kaushikImg,
    linkedin: 'https://www.linkedin.com/in/kaushikganesh/',
  },
  {
    name: 'Thiagarajan Arumugam',
    firm: 'Spark Consulting',
    image: thiagarajanImg,
    linkedin: 'https://www.linkedin.com/in/thiagarajan-arumugam/',
  },
  {
    name: 'CA Jeevan Kumar',
    firm: 'Jeevan & Associates',
    image: jeevanImg,
    linkedin: 'https://www.linkedin.com/in/jeevan-kumar/',
  },
  {
    name: 'CA Gopalakrishnan Natesan',
    firm: 'GN & Co',
    image: gopalImg,
    linkedin: 'https://www.linkedin.com/in/gopalakrishnan-natesan/',
  },
];

export const Team = () => {
  const [openPartner, setOpenPartner] = useState<Partner | null>(null);

  return (
    <section id="team" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-40 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.06)]" />
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
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            Meet Our <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Leadership </span>
            <span className="text-brand italic">& People.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            A multi-generational team of partners blending experience and fresh perspective to
            deliver advice that drives real results.
          </p>
        </motion.div>

        {/* Partners — editorial portrait cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-20 max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => p.bio && setOpenPartner(p)}
              role={p.bio ? 'button' : undefined}
              tabIndex={p.bio ? 0 : undefined}
              onKeyDown={(e) => {
                if (p.bio && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setOpenPartner(p);
                }
              }}
              className={`group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-colors duration-300 flex flex-col ${
                p.bio ? 'cursor-pointer' : ''
              }`}
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/40">
                    <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground">
                      <User className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                )}
                {/* gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent"
                />
                {/* number badge */}
                <span className="absolute top-4 left-4 font-display text-xs text-background/80 tabular-nums tracking-[0.2em] uppercase">
                  {p.num}
                </span>
                {/* role pill */}
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-brand text-white text-[0.65rem] font-semibold tracking-[0.15em] uppercase">
                  {p.role}
                </span>
                {/* name on image */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl lg:text-[1.35rem] font-semibold text-background leading-tight">
                    {p.name}
                  </h3>
                  {p.qualifications && (
                    <p className="text-[0.65rem] text-background/75 mt-1.5 tracking-wide font-light">
                      {p.qualifications}
                    </p>
                  )}
                </div>
              </div>
              {/* Description */}
              <div className="p-5 lg:p-6 flex-1 flex flex-col gap-4">
                <p className="text-muted-foreground text-[0.8rem] md:text-sm font-light leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                  {p.linkedin ? (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${p.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:bg-brand hover:text-white hover:border-brand transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </a>
                  ) : (
                    <span />
                  )}
                  {p.bio && (
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-brand font-semibold opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read more →
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-10"
        >
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Knowledge Associates
            </h3>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Trusted Collaborators
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {network.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-colors"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="font-display text-base lg:text-lg font-semibold text-foreground leading-tight">
                        {a.name}
                      </h4>
                      <p className="text-muted-foreground text-xs lg:text-sm mt-1 font-light">{a.firm}</p>
                    </div>
                    {a.linkedin && (
                      <a
                        href={a.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${a.name} on LinkedIn`}
                        className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:bg-brand hover:text-white hover:border-brand transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Partner bio modal */}
      <AnimatePresence>
        {openPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-foreground/70 backdrop-blur-sm"
            onClick={() => setOpenPartner(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-background border border-border shadow-[0_40px_120px_-30px_hsl(220_50%_15%/0.5)]"
            >
              <button
                aria-label="Close"
                onClick={() => setOpenPartner(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 border border-border flex items-center justify-center text-foreground hover:bg-brand hover:text-white hover:border-brand transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
              <div className="grid md:grid-cols-5 max-h-[90vh]">
                <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto bg-secondary overflow-hidden">
                  {openPartner.image && (
                    <img
                      src={openPartner.image}
                      alt={openPartner.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent md:hidden"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:hidden">
                    <span className="px-2.5 py-1 rounded-full bg-brand text-white text-[0.65rem] font-semibold tracking-[0.15em] uppercase">
                      {openPartner.role}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-background leading-tight mt-3">
                      {openPartner.name}
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-3 p-6 md:p-10 overflow-y-auto max-h-[90vh]">
                  <span className="hidden md:inline-flex px-2.5 py-1 rounded-full bg-brand text-white text-[0.65rem] font-semibold tracking-[0.15em] uppercase">
                    {openPartner.role}
                  </span>
                  <h3 className="hidden md:block font-display text-3xl lg:text-4xl font-semibold text-foreground leading-tight mt-4">
                    {openPartner.name}
                  </h3>
                  {openPartner.qualifications && (
                    <p className="text-xs text-muted-foreground mt-3 tracking-wide font-light">
                      {openPartner.qualifications}
                    </p>
                  )}
                  {openPartner.linkedin && (
                    <a
                      href={openPartner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-3.5 py-2 rounded-full border border-border text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-brand hover:text-white hover:border-brand transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" strokeWidth={1.75} />
                      LinkedIn
                    </a>
                  )}
                  <div className="mt-6 space-y-4">
                    {openPartner.bio?.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-foreground/80 text-sm md:text-base font-light leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};