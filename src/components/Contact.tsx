import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const offices = [
  {
    city: 'Madurai',
    label: 'Office — Madurai',
    address: 'Plot No. 784, West Main Road, Anna Nagar, Madurai 625020, Tamil Nadu',
    mapQuery: 'Plot No. 784, West Main Road, Anna Nagar, Madurai 625020, Tamil Nadu',
  },
  {
    city: 'Chennai',
    label: 'Office — Chennai',
    address:
      'Door No. 20/12, 2nd & 3rd Floors, Plot No. 9, Wheat Croft Rd, A2, Nungambakkam, Chennai 600034, Tamil Nadu',
    mapQuery:
      'Door No. 20/12, Wheat Croft Road, Nungambakkam, Chennai 600034, Tamil Nadu',
  },
];

const contactChannels = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 44 4211 7873'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@paacas.in'],
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.06)]" />
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            Let's Talk About <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Your </span>
            <span className="text-brand italic">Next Move.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            Have a question or want to schedule a consultation? Drop us a note and our team will
            get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* LEFT — form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-brand transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="launch">Startup Launch & Compliance</option>
                  <option value="tax">Tax Optimization & Structuring</option>
                  <option value="cfo">Virtual CFO & Growth Advisory</option>
                  <option value="fema">FEMA & Cross-Border Advisory</option>
                  <option value="valuation">Valuation & Transaction Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your requirements..."
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </button>
          </motion.form>

          {/* RIGHT — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 h-full"
          >
            <div className="flex flex-col gap-5 h-full">
              {offices.map((o, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className="flex items-start gap-4 p-5">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-brand shrink-0">
                      <MapPin className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-display text-base font-semibold text-foreground">
                          {o.label}
                        </h4>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand hover:text-brand-dark transition-colors"
                        >
                          Directions <ExternalLink className="w-3 h-3" strokeWidth={2} />
                        </a>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1.5 font-light leading-relaxed">
                        {o.address}
                      </p>
                    </div>
                  </div>
                  <div className="relative h-40 w-full border-t border-border bg-secondary">
                    <iframe
                      title={`Map of ${o.city}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&output=embed`}
                      className="absolute inset-0 w-full h-full grayscale-[40%] hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-border bg-card divide-y divide-border">
                {contactChannels.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-5">
                      <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-brand shrink-0">
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-base font-semibold text-foreground">
                          {info.title}
                        </h4>
                        {info.details.map((d, j) => (
                          <p key={j} className="text-muted-foreground text-sm mt-1 font-light break-all">
                            {d}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};