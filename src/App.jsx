import {
  Activity,
  Baby,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  HeartPulse,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Stethoscope,
  Target,
  X,
} from 'lucide-react';
import { useState } from 'react';
import logo from '../logo.jpeg';
import navbarLogo from '../navbarlogo.png';
import dietitianImage from '../Dietitian.jpeg';
import inbodyResultsImage from '../inbody-results.jpeg';
import inbodyCompositionImage from '../inbody-composition.jpeg';

const phoneDisplay = '081 027 2588';
const whatsappNumber = '27810272588';
const email = 'mampanenutritionservices@gmail.com';
const whatsappMessage = encodeURIComponent('Hello Nutri-Clinix Hub, I would like to book a consultation.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['InBody', '#inbody'],
  ['Contact', '#contact'],
];

const footerNavItems = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Meet Our Dietitian', '#dietitian'],
  ['Services', '#services'],
  ['InBody Analysis', '#inbody'],
  ['Testimonials', '#testimonials'],
  ['Book Consultation', '#booking'],
  ['Contact', '#contact'],
];

const trustItems = [
  'Registered Dietitian',
  'Evidence-Based Care',
  'Personalized Plans',
  'InBody Body Composition',
  'Athlete & Fitness Support',
];

const services = [
  ['Clinical Nutrition', 'Dietetic care for nutrition-related medical conditions.', Stethoscope],
  ['Weight Management', 'Sustainable strategies for healthy weight goals.', Scale],
  ['Sports Nutrition', 'Fueling plans for training, recovery, and performance.', Dumbbell],
  ['Child Nutrition', 'Support for growth, balanced meals, and routines.', Baby],
  ['Maternal Nutrition', 'Guidance before, during, and after pregnancy.', HeartPulse],
  ['InBody Composition Analysis', 'Measures muscle mass, body fat percentage, and visceral fat.', BarChart3],
];

const inBodyFeatures = [
  ['Body Fat Percentage', Activity],
  ['Muscle Mass', Dumbbell],
  ['Visceral Fat Level', HeartPulse],
  ['Progress Tracking', LineChart],
  ['Wellness Assessment', ShieldCheck],
  ['Fitness Goal Monitoring', Target],
];

const conditions = [
  'Diabetes',
  'Hypertension',
  'High Cholesterol',
  'Kidney Disease',
  'Heart Failure',
  'Fatty Liver Disease',
  'Anaemia',
  'IBS',
  'Constipation',
  'Gout',
  'Pregnancy Nutrition',
  'Child Growth Monitoring',
];

const testimonials = [
  ['Weight Management Client', 'Practical, professional guidance that felt easy to follow.'],
  ['Fitness Client', 'Clear advice for training, recovery, and realistic goals.'],
  ['Clinical Nutrition Client', 'Clear recommendations that made nutrition changes manageable.'],
  ['Maternal Nutrition Client', 'Warm, reassuring support with evidence-based advice.'],
];

const bookingOptions = [
  ['Initial Nutrition Consultation', 'Health review, goals, nutrition priorities, and care plan.'],
  ['Follow-Up Consultation', 'Progress review, plan adjustments, and accountability.'],
  ['InBody Assessment', 'Body composition analysis with practical interpretation.'],
  ['Sports Nutrition Consultation', 'Performance nutrition for active clients and athletes.'],
  ['Family Nutrition Consultation', 'Household routines, meals, child nutrition, and habits.'],
];

const faqs = [
  [
    'Do I need a referral?',
    'A referral is not required for general nutrition support. Clients with medical conditions may bring clinical notes or recent results.',
  ],
  [
    'Do you offer online consultations?',
    'Yes. Nutri-Clinix Hub supports online and in-person appointments.',
  ],
  [
    'How long is a consultation?',
    'Initial appointments are more comprehensive. Follow-ups focus on progress, questions, and plan adjustments.',
  ],
  [
    'What should I bring to my appointment?',
    'Bring recent blood results, medication lists, referral notes, food records, and key questions where available.',
  ],
  [
    'Can I book an InBody assessment only?',
    'Yes. Clients can book a standalone InBody assessment or combine it with a nutrition consultation.',
  ],
];

const carePathway = [
  ['Assess', 'Review health goals, lifestyle, and InBody composition insights.', BarChart3],
  ['Plan', 'Create practical nutrition steps tailored to clinical or fitness needs.', Stethoscope],
  ['Support', 'Track progress and adjust the plan as goals evolve.', Target],
];

function Button({ href, children, variant = 'primary', className = '' }) {
  const base =
    'focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition duration-300 sm:w-auto';
  const styles =
    variant === 'primary'
      ? 'bg-burgundy-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-burgundy-800'
      : 'border border-burgundy-200 bg-white text-burgundy-800 hover:border-burgundy-700 hover:bg-burgundy-50';

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={light ? 'text-xs font-semibold uppercase tracking-[0.16em] text-burgundy-100 sm:text-sm' : 'eyebrow'}>{eyebrow}</p>
      <h2 className={`mt-3 text-2xl font-bold tracking-normal sm:text-4xl ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-7 ${light ? 'text-burgundy-50' : 'text-slate-600'}`}>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-8 lg:h-20 lg:px-12">
        <a href="#home" className="flex items-center gap-3">
          <img src={navbarLogo} alt="Nutri-Clinix Hub logo" className="h-10 w-auto max-w-[150px] object-contain sm:h-14 sm:max-w-[190px]" />
          <div className="sr-only">
            <p className="text-lg font-bold text-charcoal">Nutri-Clinix Hub</p>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-burgundy-700">Nutrition Practice</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-burgundy-700">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#booking">Book Consultation</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-charcoal lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="container-max grid gap-1">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-burgundy-50 hover:text-burgundy-800"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="soft-grid relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-burgundy-50 via-white/95 to-white/90 sm:h-72" />
      <div className="container-max relative grid items-center gap-9 px-4 pb-14 pt-7 sm:gap-12 sm:px-8 sm:pb-16 lg:grid-cols-[1fr_0.82fr] lg:px-12 lg:pb-24">
        <div className="reveal-card">
          <div className="inline-flex max-w-full flex-col gap-2 rounded-2xl border border-burgundy-100 bg-white/90 p-2 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:rounded-full">
            <div className="inline-flex items-center gap-2 rounded-xl bg-burgundy-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white sm:rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              InBody Analysis Available
            </div>
            <div className="inline-flex items-center gap-2 px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-burgundy-800">
              <ShieldCheck size={15} />
              Evidence-Based Nutrition Care
            </div>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-normal text-charcoal sm:text-5xl lg:text-[3.7rem]">
            Professional Nutrition & Wellness Care
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Nutri-Clinix Hub provides dietetic consultations, InBody body composition analysis, weight management, sports
            nutrition, and clinical nutrition support tailored to each client's goals.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="#booking">
              <CalendarCheck size={18} />
              Book Consultation
            </Button>
            <Button href={whatsappLink} variant="secondary">
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="reveal-card relative">
          <div className="absolute -left-5 top-12 hidden rounded-lg bg-white p-4 shadow-premium sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-burgundy-50 text-burgundy-700">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Clinical Support</p>
                <p className="text-xs text-slate-500">Personalized care plans</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-burgundy-100 bg-white p-3 shadow-premium ring-8 ring-burgundy-50/70">
            <img src={dietitianImage} alt="Professional nutrition consultation" className="h-auto max-h-[420px] w-full object-contain sm:max-h-[560px]" />
          </div>

          <div className="absolute -bottom-4 right-3 rounded-lg bg-white p-4 shadow-premium sm:-bottom-5 sm:right-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy-700">Wellness Focus</p>
            <p className="mt-1 text-xl font-bold text-charcoal sm:text-2xl">InBody</p>
            <p className="text-sm text-slate-500">Muscle, fat, visceral fat</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white px-4 py-5 sm:px-8 lg:px-12">
      <div className="container-max grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item) => (
          <div key={item} className="rounded-full border border-slate-100 bg-mist px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-700 shadow-sm">
            <CheckCircle2 className="shrink-0 text-burgundy-700" size={17} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CarePathway() {
  return (
    <section className="bg-burgundy-900 px-4 py-10 text-white sm:px-8 lg:px-12">
      <div className="container-max grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy-100 sm:text-sm">Care Pathway</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">A clear process from assessment to progress</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {carePathway.map(([title, text, Icon], index) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <Icon className="text-burgundy-100" size={24} />
                <span className="text-xs font-bold text-burgundy-100">0{index + 1}</span>
              </div>
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-burgundy-50">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    ['Clinical', 'Condition-focused care', Stethoscope],
    ['InBody', 'Muscle, fat, visceral fat', BarChart3],
    ['Performance', 'Athlete-focused support', Dumbbell],
  ];

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-max grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-xl border border-slate-100 bg-mist p-6 shadow-soft">
          <div className="rounded-lg border border-slate-100 bg-white px-4 py-8 shadow-sm sm:px-6 sm:py-10">
            <img src={navbarLogo} alt="Nutri-Clinix Hub brand mark" className="mx-auto h-auto w-full max-w-[360px] object-contain" />
          </div>

          <div className="mt-5 rounded-lg bg-burgundy-900 p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy-100">Practice Focus</p>
            <p className="mt-3 text-xl font-bold sm:text-2xl">Evidence-based nutrition care</p>
            <p className="mt-2 text-sm leading-6 text-burgundy-50">
              Clinical support, InBody composition analysis, wellness planning, and performance nutrition.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Client-centred care', 'Sustainable lifestyle change'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4">
                <CheckCircle2 className="shrink-0 text-burgundy-700" size={18} />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-200 pt-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-10 w-1 rounded-full bg-burgundy-700" />
              <p className="text-sm leading-6 text-slate-600">
                A professional nutrition practice supporting individuals, families, athletes, and clients managing
                nutrition-related conditions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">About Nutri-Clinix Hub</p>
          <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-4xl">Professional nutrition care, made practical</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Nutri-Clinix Hub is a dietetics and nutrition practice focused on personalized care, evidence-based
            interventions, and ongoing wellness support.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            The practice supports individuals, families, athletes, and clients managing nutrition-related health conditions
            with clear guidance and realistic care plans.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(([title, text, Icon]) => (
              <div key={title} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
                <Icon className="text-burgundy-700" size={22} />
                <p className="mt-3 font-bold text-charcoal">{title}</p>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Dietitian() {
  return (
    <section id="dietitian" className="section-pad bg-mist">
      <div className="container-max grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="hidden rounded-xl border border-slate-100 bg-white p-3 shadow-soft lg:order-1 lg:block">
          <img
            src={dietitianImage}
            alt="Mampane Madimetja George, Registered Dietitian at Nutri-Clinix Hub"
            className="h-auto max-h-[520px] w-full rounded-lg object-contain sm:max-h-[620px]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Meet Our Dietitian</p>
          <div className="mt-5 rounded-xl border border-slate-100 bg-white p-3 shadow-soft lg:hidden">
            <img
              src={dietitianImage}
              alt="Mampane Madimetja George, Registered Dietitian at Nutri-Clinix Hub"
              className="h-auto max-h-[440px] w-full rounded-lg object-contain"
            />
          </div>
          <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-4xl">
            Registered dietetic care led by Mampane Madimetja George
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Mampane Madimetja George is a Registered Dietitian at Nutri-Clinix Hub and an alumnus of Sefako Makgatho
            Health Sciences University.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            His areas of focus include chronic disease management, weight management, sports nutrition, and practical
            nutrition care that supports sustainable lifestyle change.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy-700">Qualifications</p>
              <p className="mt-3 font-bold text-charcoal">BSc Hons Dietetics</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">BSc Human Physiology & Psychology</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy-700">Focus Areas</p>
              <p className="mt-3 font-bold text-charcoal">Clinical, weight & sports nutrition</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Evidence-based, compassionate, practical care.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking">Book Appointment</Button>
            <Button href={whatsappLink} variant="secondary">
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-max">
        <SectionHeader
          eyebrow="Our Services"
          title="Specialist dietetic services"
          text="Structured care for clinical, lifestyle, family, and performance needs."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text, Icon]) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-burgundy-100 hover:shadow-premium"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-burgundy-700 opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-burgundy-50 text-burgundy-700 transition group-hover:bg-burgundy-700 group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-charcoal">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InBody() {
  return (
    <section id="inbody" className="soft-grid section-pad bg-burgundy-900 text-white">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy-100">Featured Service</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-5xl">Go Beyond The Scale With InBody Composition Analysis</h2>
            <p className="mt-6 text-base leading-7 text-burgundy-50 sm:text-lg sm:leading-8">
              Nutri-Clinix Hub provides InBody Composition Analysis that measures muscle mass, body fat percentage, and
              visceral fat. It is ideal for bodybuilders, athletes, and fitness enthusiasts who want precise progress tracking.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {['Muscle mass', 'Body fat percentage', 'Visceral fat level'].map((metric) => (
                <div key={metric} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.08] p-4">
                  <CheckCircle2 className="shrink-0 text-burgundy-100" size={18} />
                  <span className="font-semibold text-white">{metric}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-burgundy-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-burgundy-50 sm:w-auto"
              >
                <CalendarCheck size={18} />
                Book InBody Assessment
              </a>
              <a
                href={whatsappLink}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08] sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 shadow-premium sm:p-4">
            <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
              <div className="order-2 overflow-hidden rounded-xl border border-white/10 bg-white p-2 shadow-premium md:order-1">
                <img
                  src={inbodyResultsImage}
                  alt="InBody analysis showing trustworthy results tailored to body composition"
                  className="h-auto max-h-[360px] w-full rounded-lg object-contain sm:max-h-[540px]"
                />
                <div className="px-3 py-3">
                  <p className="text-sm font-bold text-charcoal">Precise body composition results</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Segmental analysis designed to support informed progress tracking.</p>
                </div>
              </div>
              <div className="order-1 grid gap-4 md:order-2">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-2 shadow-premium">
                  <img
                    src={inbodyCompositionImage}
                    alt="InBody composition analysis metrics including body fat, muscle mass, and visceral fat"
                    className="h-auto max-h-[320px] w-full rounded-lg object-contain sm:max-h-none"
                  />
                  <div className="px-3 py-3">
                    <p className="text-sm font-bold text-charcoal">Know what your body is made of</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Muscle mass, body fat percentage, and visceral fat level.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy-100">Ideal For</p>
                  <p className="mt-3 text-xl font-bold text-white sm:text-2xl">Bodybuilders, athletes & fitness enthusiasts</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {inBodyFeatures.map(([item, Icon]) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] p-4 backdrop-blur transition hover:bg-white/[0.14] sm:p-5">
                  <Icon className="text-burgundy-100" size={22} />
                  <p className="mt-3 text-sm font-bold leading-5 text-white sm:mt-4 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Conditions() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <SectionHeader eyebrow="Conditions Supported" title="Nutrition support for clinical needs" text="Care for common health and wellness priorities." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition hover:border-burgundy-100 hover:bg-burgundy-50"
            >
              <CheckCircle2 className="shrink-0 text-burgundy-700" size={18} />
              <span className="font-semibold text-slate-700">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-mist">
      <div className="container-max">
        <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(([label, text]) => (
            <article key={label} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-burgundy-50 text-2xl font-serif font-bold leading-none text-burgundy-700">
                "
              </div>
              <p className="mt-5 leading-7 text-slate-600">"{text}"</p>
              <p className="mt-6 font-bold text-charcoal">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="section-pad bg-white">
      <div className="container-max">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-mist shadow-premium">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-burgundy-900 p-6 text-white sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy-100 sm:text-sm">Book Consultation</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Book A Consultation</h2>
              <p className="mt-5 leading-7 text-burgundy-50">
                Choose the consultation that best fits your goals. Nutri-Clinix Hub will confirm availability and next
                steps through WhatsApp.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.08] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy-100">Appointment Enquiries</p>
                <p className="mt-3 text-2xl font-bold">Speak to Nutri-Clinix Hub</p>
                <p className="mt-2 text-sm leading-6 text-burgundy-50">
                  Share the service you are interested in and the team will guide you through the next steps.
                </p>
                <a
                  href={whatsappLink}
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-burgundy-900 transition hover:bg-burgundy-50 sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Book On WhatsApp
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <div className="grid gap-4">
                {bookingOptions.map(([title, text], index) => (
                  <article
                    key={title}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-burgundy-100 hover:shadow-soft sm:flex sm:gap-4"
                  >
                    <div className="flex items-start gap-4 sm:contents">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-burgundy-50 text-sm font-bold text-burgundy-800">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-charcoal">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                    <a
                      href={whatsappLink}
                      className="focus-ring mt-4 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-burgundy-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-burgundy-800 sm:mt-0 sm:w-auto sm:self-center sm:bg-white sm:py-2 sm:text-burgundy-800 sm:ring-1 sm:ring-burgundy-200 sm:hover:bg-burgundy-50"
                    >
                      <CalendarCheck size={16} />
                      Book
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-mist">
      <div className="container-max max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="rounded-lg border border-slate-100 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setActive(active === index ? -1 : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left font-bold text-charcoal"
              >
                <span>{question}</span>
                <ChevronDown className={`shrink-0 text-burgundy-700 transition ${active === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              {active === index && <p className="px-5 pb-5 leading-7 text-slate-600">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-max grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-4xl">Start with professional support</h2>
          <p className="mt-5 leading-8 text-slate-600">Send an enquiry or book directly through WhatsApp.</p>
          <div className="mt-8 space-y-5">
            <ContactLine icon={Phone} label="Phone / WhatsApp" value={phoneDisplay} href={whatsappLink} />
            <ContactLine icon={Mail} label="Email" value={email} href={`mailto:${email}`} />
            <ContactLine icon={MapPin} label="Hatfield" value="Imed Medical Centre, Shop B006C The Fields, 1066 Burnett Street" />
            <ContactLine icon={MapPin} label="Doornpoort" value="694 Dr Van Der Merwe Road, Pretoria" />
          </div>
        </div>

        <form className="rounded-xl border border-slate-100 bg-mist p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" />
            <Field label="Email" type="email" />
            <Field label="Phone Number" type="tel" />
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Service Interested In
              <select className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700">
                <option>Initial Nutrition Consultation</option>
                <option>Follow-Up Consultation</option>
                <option>InBody Assessment</option>
                <option>Sports Nutrition Consultation</option>
                <option>Family Nutrition Consultation</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
            Message
            <textarea rows="5" className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700" />
          </label>
          <button
            type="button"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-md bg-burgundy-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-burgundy-800"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-burgundy-50 text-burgundy-700">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-burgundy-700">{label}</p>
        <p className="mt-1 break-words leading-7 text-slate-700">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block rounded-lg transition hover:bg-burgundy-50/70">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, type = 'text' }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input type={type} className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-700" />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="container-max grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nutri-Clinix Hub logo" className="h-12 w-12 rounded-md object-cover" />
            <p className="text-xl font-bold">Nutri-Clinix Hub</p>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Professional dietetics and nutrition care for wellness, clinical health, body composition, and family nutrition.
          </p>
        </div>
        <FooterList title="Quick Links" items={footerNavItems.slice(0, 6)} />
        <FooterList title="Services" items={services.slice(0, 5).map(([title]) => [title, '#services'])} />
        <div>
          <h3 className="font-bold">Contact Details</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <p>{phoneDisplay}</p>
            <p>{email}</p>
            <p>Hatfield and Doornpoort, Pretoria</p>
          </div>
        </div>
      </div>
      <div className="container-max mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright (c) 2026 Nutri-Clinix Hub. All rights reserved.
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <div className="mt-4 grid gap-2">
        {items.map(([label, href]) => (
          <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      className="focus-ring fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="WhatsApp Nutri-Clinix Hub"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <CarePathway />
        <About />
        <Dietitian />
        <Services />
        <InBody />
        <Conditions />
        <Testimonials />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
