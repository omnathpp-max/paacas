import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, X, Upload } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const perks = [
  {
    title: 'Work on real, high-stakes mandates',
    description:
      'From cross-border structuring to startup valuations, you\u2019ll handle work that actually moves the needle for clients.',
  },
  {
    title: 'Learn directly from the partners',
    description:
      'Small team, flat structure. You\u2019ll get mentorship from professionals with decades of practice — not just a desk in a back office.',
  },
  {
    title: 'A modern, digitized workplace',
    description:
      'No paper-pushing. Our workflows are fully digital so your time goes into thinking, not chasing files.',
  },
  {
    title: 'Build a long-term career path',
    description:
      'Articleship, qualified roles, and partner-track opportunities — we invest in people who want to grow with us.',
  },
];

export const JoinUs = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const file = formData.get('resume') as File | null;

    try {
      let resumePath = '';
      let resumeFilename = '';

      if (file && file.size > 0) {
        resumeFilename = file.name;
        const ext = resumeFilename.split('.').pop();
        resumePath = `${crypto.randomUUID()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(resumePath, file, { contentType: file.type });
        if (uploadError) throw new Error('Resume upload failed');
      }

      const data = Object.fromEntries(
        [...formData.entries()].filter(([k]) => k !== 'resume')
      );

      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-application`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ ...data, resumePath, resumeFilename }),
        }
      );

      if (!res.ok) throw new Error('Failed to submit');

      toast({
        title: 'Application submitted',
        description: "Thanks for applying. Our team will review and get back to you within 3–5 business days.",
      });
      form.reset();
      setFileName('');
      setOpen(false);
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly at info@paacas.in',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="join-us" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.08)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
              <Sparkles className="w-3.5 h-3.5 animate-sparkle" strokeWidth={2} />
              Join Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
              Build Your <br className="hidden md:block" />
              <span className="italic font-light text-muted-foreground">Career With </span>
              <span className="text-brand italic">People Who Care.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-md font-light leading-relaxed">
              We're always looking for sharp, curious people — articled assistants,
              qualified CAs, and finance professionals who want to do meaningful work.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 mt-10 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              Send us your CV
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </button>
          </motion.div>

          {/* RIGHT — perks list */}
          <div className="lg:col-span-7 border-y border-border">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="py-7 md:py-8 border-b border-border last:border-b-0"
              >
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-secondary/40 border-border max-sm:!w-screen max-sm:!h-[100dvh] max-sm:!max-h-[100dvh] max-sm:!max-w-none max-sm:!rounded-none max-sm:!left-0 max-sm:!top-0 max-sm:!translate-x-0 max-sm:!translate-y-0 max-sm:overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* LEFT — Form */}
            <div className="bg-card p-8 md:p-10">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Submit Your Profile
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Application form to join P A A & Associates
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5 max-h-[70vh] overflow-y-auto pr-6">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" required maxLength={50} />
                  <Field label="Last Name" name="lastName" required maxLength={50} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Email Address" name="email" type="email" required maxLength={120} />
                  <Field label="Phone Number" name="phone" type="tel" required maxLength={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Current Location" name="location" required maxLength={80} />
                  <Field label="Years of Experience" name="experience" type="number" required min={0} />
                </div>
                <Field label="Current Role/Position" name="role" maxLength={80} />
                <Field label="Qualification" name="qualification" required maxLength={120} />
                <Field label="LinkedIn Profile URL" name="linkedin" type="url" maxLength={200} />

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                    About You <span className="text-brand">*</span>
                  </label>
                  <textarea
                    name="about"
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Tell us about your background, skills, and what type of opportunities you're interested in…"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                    Upload Resume (PDF, DOCX) <span className="text-brand">*</span>
                  </label>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-border bg-background hover:border-brand/50 hover:bg-secondary/50 transition cursor-pointer">
                    <Upload className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-muted-foreground truncate">
                      {fileName || 'Choose file…'}
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                    />
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-medium rounded-full py-6 text-base"
                >
                  {submitting ? 'Submitting…' : 'Submit Application'}
                </Button>
              </form>
            </div>

            {/* RIGHT — Process */}
            <div className="bg-card p-8 md:p-10 border-l border-border">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Application Process
              </h3>
              <ol className="mt-8 space-y-7">
                {[
                  {
                    title: 'Submit Your Profile',
                    body: 'Complete the form with your personal details, experience, and upload your resume. Make sure all required fields are filled accurately to help us understand your background.',
                  },
                  {
                    title: 'Profile Review & Assessment',
                    body: 'Our talent acquisition team will carefully review your profile within 3–5 business days. We\u2019ll assess your qualifications, experience, and match them against current and upcoming opportunities.',
                  },
                  {
                    title: 'Interview & Evaluation',
                    body: 'When suitable opportunities arise, we\u2019ll contact you for interviews. This typically includes 2–3 rounds: technical assessment, team fit interview, and final discussion with the partner.',
                  },
                  {
                    title: 'Offer & Onboarding',
                    body: 'Successful candidates will receive a comprehensive offer including compensation, benefits, and growth opportunities. We\u2019ll guide you through onboarding into your new role at P A A & Associates.',
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-brand text-white font-display font-semibold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-foreground text-base mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  min?: number;
};

const Field = ({ label, name, type = 'text', required, maxLength, min }: FieldProps) => (
  <div>
    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
      {label} {required && <span className="text-brand">*</span>}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      maxLength={maxLength}
      min={min}
      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/50 transition"
    />
  </div>
);