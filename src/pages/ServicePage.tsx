import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, Globe, ClipboardCheck, Rocket, TrendingUp, Users2, FileCheck } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const servicesData: Record<string, { icon: any; title: string; content: string[] }> = {
  'valuation': {
    icon: Calculator,
    title: 'Valuation',
    content: [
      'Business valuation determines the economic value of a business or business unit. It can be used to determine the fair value of a business for a variety of reasons, including sale value, establishing partner ownership, taxation, and even divorce proceedings.',
      'Valuation is to be performed under various statutes: Companies Act, 2013 - for allotment of shares; Income Tax Act, 1961 - to assess if shares have been transferred at less than fair value; FEMA Regulations - to comply with RBI and ensure transactions are done at fair value; SEBI regulations for listing purposes and M&A transactions.',
    ],
  },
  'international-advisory': {
    icon: Globe,
    title: 'International Advisory',
    content: [
      'We provide full support for inbound transaction needs including financial valuation, financial due diligence, tax due diligence, transfer pricing, purchase price allocation analysis, and post-transaction integration services.',
      'We assist in pre-planning of transaction structure while taking into account all local and international tax implications. Our team helps structure your business in a tax-efficient manner with strategies aligned to your objectives.',
    ],
  },
  'audit-assurance': {
    icon: ClipboardCheck,
    title: 'Audit & Assurance',
    content: [
      'Audit is about much more than just the numbers. Those numbers tell a story of accomplishments and aspirations, of projects completed and new plans laid. At P A A, audit fuels advancement by demonstrating how things are — and asking how they can be made better.',
      'We provide assurance that future visions are built on strong foundations, informed by relevant insights and guided by sound decisions. We have invested in significant digital and workforce transformation for continuous improvement.',
    ],
  },
  'startup-virtual-cfo': {
    icon: Rocket,
    title: 'Start-up & Virtual CFO Services',
    content: [
      'Given the maturing Startup Ecosystem in India, it calls for professional consultation about the industry to put the right step forward from the beginning. We help you comply with all regulations, governance, standards, policies, rules & laws.',
      'We provide solutions to startups looking to outsource their complete finance and accounting functions to a single partner. We offer end-to-end services using high-end technology like QuickBooks, ZohoBooks etc.',
    ],
  },
  'equity-funding-debt-syndication': {
    icon: TrendingUp,
    title: 'Equity Funding & Debt Syndication',
    content: [
      'P A A assists companies to achieve their funding goals by providing specialized Syndication services and consulting on when and how to raise funds. We provide end-to-end support, from strategic planning to floating of funds.',
      'The team has concluded deals aggregating to equity amount over Rs 200 crores. Our Information Memorandums have been well received by participating bankers and investors.',
    ],
  },
  'management-consultancy': {
    icon: Users2,
    title: 'Management Consultancy & Advisory',
    content: [
      'Finance Shared Services & Outsourcing assists clients in developing finance service delivery strategies including shared services, outsourcing, centers of excellence/offshoring, and suggestions on what should be retained.',
      'Finance Strategy and Transformation helps define the role of finance in driving strategic business imperatives. We help deliver fit-for-purpose financial planning and performance management frameworks.',
    ],
  },
  'regulatory-compliance': {
    icon: FileCheck,
    title: 'Regulatory & Compliance Management',
    content: [
      'For businesses, accurate tax compliance is an instrumental piece of the tax puzzle. We help prepare, manage and execute on tax filings within shifting regulatory environments for Income Tax, GST, and Companies Act.',
      'We assist with company formation, branch registration, business licenses, preparation of board & general meeting notices, minutes, and filing of necessary forms with appropriate authorities.',
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 container mx-auto px-6 text-center">
          <h1 className="font-display text-3xl">Service not found</h1>
          <Link to="/" className="text-accent mt-4 inline-block">Go back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <Link to="/#services" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center shadow-brand">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">{service.title}</h1>
            </div>
            <div className="max-w-4xl space-y-6">
              {service.content.map((para, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed">{para}</p>
              ))}
            </div>
            <a href="/#contact" className="mt-10 inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-4 rounded-lg shadow-brand hover:shadow-lg transition-all">
              Get a Consultation
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;
