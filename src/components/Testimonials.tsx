import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "We've been very impressed with the level of professionalism and attention to detail Aswin brings to the valuation process. He digs deep below the surface to discover the unique nature of our company.",
    author: 'Compliance Head',
    company: 'Top MNC Firm',
  },
  {
    quote:
      "You're in good hands. Aswin made sure we developed great rapport, and their dedication to work is evident in our growth. We appreciate their proactive response and timely delivery.",
    author: 'Founder',
    company: 'Successful Start-up',
  },
  {
    quote:
      'P A A has been a highly valued and trusted advisor — instrumental throughout our funding process. The team handled key issues impeccably and helped us achieve an attractive valuation.',
    author: 'Management',
    company: 'VC Funded Business',
  },
  {
    quote:
      'Their tax team navigated a complex international restructuring for us with clarity and confidence. We finally have a partner who actually explains the why, not just the what.',
    author: 'CFO',
    company: 'Cross-border SaaS',
  },
  {
    quote:
      'From statutory audits to monthly reviews, the team is sharp, responsive, and refreshingly proactive. They flag issues before they become problems.',
    author: 'Finance Director',
    company: 'Manufacturing Group',
  },
  {
    quote:
      'P A A helped us close our Series A diligence in record time. Their financial modeling and projections held up beautifully under investor scrutiny.',
    author: 'Co-founder',
    company: 'D2C Brand',
  },
  {
    quote:
      'A rare blend of old-school rigour and modern, digitized workflows. Documents, queries, signoffs — everything just moves faster with them.',
    author: 'Head of Compliance',
    company: 'Listed Entity',
  },
  {
    quote:
      'They treat our books like their own. The partners are personally accessible, which is something you simply do not get with the larger firms.',
    author: 'Managing Director',
    company: 'Family-run Business',
  },
  {
    quote:
      'Their valuation report stood up to two rounds of investor and legal review without a single change. That kind of credibility is invaluable.',
    author: 'CEO',
    company: 'Series B Fintech',
  },
  {
    quote:
      'Honest, ethical, and deeply technical — exactly the qualities you want in a CA. We have grown from 5 to 200 people with P A A by our side every step of the way.',
    author: 'Founder',
    company: 'High-growth Startup',
  },
];

// Duplicate the list so the marquee loops seamlessly
const marquee = [...testimonials, ...testimonials];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.06)]" />
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            What Our Clients <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Say </span>
            <span className="text-brand italic">About Us.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            Don't just take our word for it — here's what founders, CFOs, and compliance leaders
            we've worked with have to say.
          </p>
        </motion.div>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative group">
        {/* edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max gap-6 lg:gap-8 px-6 animate-marquee group-hover:[animation-play-state:paused]">
          {marquee.map((t, i) => (
            <figure
              key={i}
              className="relative w-[320px] md:w-[400px] shrink-0 rounded-3xl border border-border bg-card p-8 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-end mb-6">
                <Quote className="w-6 h-6 text-brand" strokeWidth={1.5} />
              </div>
              <blockquote className="font-display text-base md:text-lg text-foreground leading-relaxed font-medium">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-medium text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-brand mt-1">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};