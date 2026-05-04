import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    num: '01',
    quote:
      "We've been very impressed with the level of professionalism and attention to detail Aswin brings to the valuation process. He digs deep below the surface to discover the unique nature of our company.",
    author: 'Compliance Head',
    company: 'Top MNC Firm',
  },
  {
    num: '02',
    quote:
      "You're in good hands. Aswin made sure we developed great rapport, and their dedication to work is evident in our growth. We appreciate their proactive response and timely delivery.",
    author: 'Founder',
    company: 'Successful Start-up',
  },
  {
    num: '03',
    quote:
      'P A A has been a highly valued and trusted advisor — instrumental throughout our funding process. The team handled key issues impeccably and helped us achieve an attractive valuation.',
    author: 'Management',
    company: 'VC Funded Business',
  },
];

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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-8 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-sm text-muted-foreground tabular-nums">
                  {t.num}
                </span>
                <Quote className="w-6 h-6 text-brand" strokeWidth={1.5} />
              </div>
              <blockquote className="font-display text-lg md:text-xl text-foreground leading-relaxed font-medium">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="font-medium text-foreground">{t.author}</p>
                <p className="text-sm text-brand mt-1">{t.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};