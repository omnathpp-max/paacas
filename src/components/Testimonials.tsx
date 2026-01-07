import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We've been very impressed with the level of professionalism and attention to detail that Aswin brings to the valuation process. He works hard to understand the complexities of our business. He digs deep below the surface to discover the unique nature of our company, asking questions and listening carefully to the answers.",
    author: 'Compliance Head',
    company: 'Top MNC Firm',
  },
  {
    quote: "You're in good hands, Aswin made sure we developed great rapport and their dedication towards work is evident in our growth. We appreciate their proactive response to our requirements & timely delivery.",
    author: 'Founder',
    company: 'Successful Start-up',
  },
  {
    quote: "P A A has been a highly valued and trusted advisor to our Company, serving an instrumental role throughout the process of funding that allowed us to grow. The team did an impeccable job in handling a series of key issues and achieved an attractive valuation.",
    author: 'Management',
    company: 'VC Funded Business',
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
            What Our Clients{' '}
            <span className="text-gradient-brand">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from some of the businesses we've helped succeed.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50 relative"
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-accent">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
