import { motion } from 'framer-motion';
import { Sparkles, User } from 'lucide-react';
import aswinImg from '@/assets/team/aswin.png';
import premnathImg from '@/assets/team/premnath.png';
import amarnathImg from '@/assets/team/amarnath.png';
import kaushikImg from '@/assets/team/kaushik.png';
import thiagarajanImg from '@/assets/team/thiagarajan.png';
import jeevanImg from '@/assets/team/jeevan.png';
import gopalImg from '@/assets/team/gopal.png';

const partners = [
  {
    num: '01',
    name: 'CA P K Premnath',
    role: 'Partner',
    image: premnathImg as string | null,
    description:
      'Second-generation Chartered Accountant practising since 1977. Deep expertise in Statutory Audits, Tax Audits, project reports, and management consultancy.',
  },
  {
    num: '02',
    name: 'CA P K Amarnath',
    role: 'Partner',
    image: amarnathImg as string | null,
    description:
      'Second-generation Chartered Accountant practising since 1978. Specialised in Direct Taxation, from Assessment stage right through to Settlement Commission.',
  },
  {
    num: '03',
    name: 'CA P A Aswin Kumaar',
    role: 'Partner',
    qualifications: 'MBA (IIM Bangalore) · CFA (USA) · IBBI Registered Valuer',
    image: aswinImg as string | null,
    description:
      'Leads Chennai operations with expertise in valuation, international taxation, and equity funding.',
  },
];

const network = [
  { name: 'CA Kaushik Ganesh', firm: 'Sparkwood Advisors', image: kaushikImg },
  { name: 'Thiagarajan Arumugam', firm: 'Spark Consulting', image: thiagarajanImg },
  { name: 'CA Jeevan Kumar', firm: 'Jeevan & Associates', image: jeevanImg },
  { name: 'CA Gopalakrishnan Natesan', firm: 'GN & Co', image: gopalImg },
];

export const Team = () => {
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
            A small, sharp team of partners backed by a trusted network — committed to delivering
            advice that actually creates value for our clients.
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
              className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-colors duration-300 flex flex-col"
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
              <div className="p-5 lg:p-6 flex-1 flex">
                <p className="text-muted-foreground text-[0.8rem] md:text-sm font-light leading-relaxed">
                  {p.description}
                </p>
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
                  <h4 className="font-display text-base lg:text-lg font-semibold text-foreground leading-tight">
                    {a.name}
                  </h4>
                  <p className="text-muted-foreground text-xs lg:text-sm mt-1 font-light">{a.firm}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};