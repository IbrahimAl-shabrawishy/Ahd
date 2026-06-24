import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, Globe, Menu, X, MessageCircle, ArrowRight,
  ShieldCheck, Lightbulb, Heart, Clock, Users, Handshake,
  Sparkles, Hammer, Snowflake, Flame, Camera, Leaf, Umbrella,
  Square, Zap, Droplets, Paintbrush, Layers, Settings, Wrench,
  Building2, CheckCircle2, ArrowUpRight,
} from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import blueprints from "@/assets/blueprints.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectMosque from "@/assets/project-mosque.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import logoAhd from "@/assets/logo-new.png";
// Client logos
import logoTelad from "@/assets/logo1.png";
import logoModel from "@/assets/logo2.png";
import logoRawaf from "@/assets/logo3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مؤسسة عهد الأولى التجارية | Ahd Al-Oula Trading Establishment" },
      { name: "description", content: "شريكك نحو التميز والنجاح — مقاولات عامة وأعمال تشطيب في القصيم. General contracting and finishing works in Qassim, Saudi Arabia." },
      { property: "og:title", content: "Ahd Al-Oula Trading Establishment" },
      { property: "og:description", content: "Your Partner Towards Excellence and Success — General contracting & finishing works in Qassim, Saudi Arabia." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Lang = "ar" | "en";

const t = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "مجالات عملنا", clients: "عملاؤنا", work: "أعمالنا", contact: "تواصل معنا" },
    hero: {
      location: "المملكة العربية السعودية · القصيم · بريدة",
      title: "مؤسسة عهد الأولى التجارية",
      sub: "شريكك نحو التميز والنجاح",
      desc: "مقاولات عامة وأعمال تشطيب بأعلى معايير الجودة والاحترافية.",
      cta1: "تواصل معنا", cta2: "خدماتنا",
    },
    about: {
      kicker: "نبذة عن المؤسسة",
      title: "بُنينا على الثقة، ونرتقي بالتنفيذ",
      body: "انطلقت مؤسسة عهد الأولى التجارية عام 2021 من قلب مدينة بريدة بمنطقة القصيم، بخطى ثابتة ورؤية طموحة نحو الريادة في مجال المقاولات العامة وأعمال التشطيب. نعتز بتقديم خدمات متكاملة ترتكز على الجودة، الدقة، والاحترافية في التنفيذ، مع التزام تام بتلبية تطلعات عملائنا وتحقيق أعلى معايير الرضا والثقة.",
      banner: "من الفكرة إلى التنفيذ — نصنع مشاريع تليق بتطلعاتكم",
    },
    vm: {
      kicker: "رؤيتنا ورسالتنا",
      title: "نحو ريادة مستدامة",
      visionTitle: "رؤيتنا",
      visionBody: "أن نكون الخيار الأول في المملكة العربية السعودية في مجال المقاولات العامة وأعمال التشطيب، عبر تقديم حلول مبتكرة تجمع بين الجودة والإبداع والاستدامة.",
      missionTitle: "رسالتنا",
      missionBody: "نهدف في مؤسسة عهد الأولى التجارية إلى تقديم خدمات مقاولات تعتمد على جودة التنفيذ ودقة الإنجاز، مع التزام راسخ بتسليم المشاريع في الوقت المحدد، وضمان رضا عملائنا في كل مرحلة من مراحل العمل، من التخطيط وحتى التسليم النهائي.",
    },
    values: {
      kicker: "قيمنا",
      title: "ما يقودنا في كل مشروع",
      items: [
        "الجودة والالتزام في كل مشروع",
        "الشفافية والمصداقية في التعامل",
        "الابتكار والإبداع في الحلول",
        "رضا العميل أولويتنا الدائمة",
        "الاحترافية والسرعة في التنفيذ",
        "فريق عمل ذو خبرة وكفاءة",
      ],
    },
    services: {
      kicker: "مجالات عملنا",
      title: "خدمات مقاولات متكاملة",
      intro: "نفخر بتقديم مجموعة واسعة من الخدمات في قطاع المقاولات العام تشمل:",
      items: [
        ["أعمال التشطيب", "تنفيذ التشطيبات الداخلية والخارجية بأعلى معايير الجودة والجمال."],
        ["أعمال التأهيل والترميم", "إعادة تأهيل وترميم المباني والمنشآت بما يعيد لها كفاءتها وجودتها وفق أعلى المعايير الفنية والهندسية."],
        ["أعمال التكييف والتبريد", "تركيب وصيانة أنظمة التكييف والتبريد بمختلف أنواعها."],
        ["أنظمة السلامة", "تنفيذ أنظمة إنذار وإطفاء الحريق وفق المعايير العالمية."],
        ["الأنظمة الأمنية", "تركيب أنظمة المراقبة والتحكم في الدخول."],
        ["الأعمال الزراعية وتنسيق الحدائق", "تصميم وتنفيذ المساحات الخضراء بجمال واستدامة."],
        ["تركيب المظلات", "تنفيذ مظلات مواقف السيارات والمداخل بمختلف التصاميم الحديثة."],
        ["الأعمال الزجاجية", "تركيب الزجاج والديكورات الزجاجية والاستكرشرات وأعمال الكرتنوول بأعلى دقة."],
        ["أعمال الكهرباء", "تنفيذ الأعمال الكهربائية والتمديدات بكافة أنواعها."],
        ["أعمال السباكة", "تنفيذ أعمال السباكة وتمديدات المياه بكفاءة واحترافية."],
        ["أعمال الديكور", "تصميم وتنفيذ ديكورات داخلية وخارجية تواكب أحدث الاتجاهات."],
        ["أعمال العزل", "تنفيذ العزل المائي والحراري لحماية المباني والمرافق."],
        ["أعمال الصيانة", "صيانة شاملة للمباني والمنشآت مع عقود صيانة طويلة الأمد."],
        ["أعمال النظافة", "تنظيف متكامل للمواقع والمباني أثناء وبعد التنفيذ."],
      ],
    },
    clients: { kicker: "عملاؤنا", title: "شركاء النجاح", sub: "نفخر بثقة شركاء عملنا الذين رافقونا في رحلة التميز." },
    work: {
      kicker: "أعمالنا",
      title: "مشاريع نفخر بها",
      items: [
        "تشطيب مجموعة من الفلل السكنية في مدينة الرياض وبريدة.",
        "تأسيس وتنفيذ شبكات الري والزراعة في جامع الرواف ببريدة.",
        "تأهيل وترميم فرع مطاعم القبة الدمشقية حسب الهوية الخاصة.",
      ],
    },
    stats: [["2021", "سنة التأسيس"], ["+3", "عملاء موثوقين"], ["QSM", "القصيم — بريدة"]],
    contact: {
      kicker: "تواصل معنا",
      title: "لنبدأ مشروعك القادم",
      sub: "فريقنا جاهز للرد على استفساراتكم وتقديم استشارة مجانية.",
      labels: { phone: "الهاتف", email: "البريد", web: "الموقع الإلكتروني", loc: "الموقع" },
      whatsapp: "واتساب", call: "اتصل بنا", emailBtn: "بريد إلكتروني",
    },
    footer: {
      tagline: "شريكك نحو التميز والنجاح",
      quick: "روابط سريعة",
      contact: "للتواصل",
      rights: "© 2026 مؤسسة عهد الأولى التجارية — جميع الحقوق محفوظة",
    },
    common: { service: "الخدمة", finished: "تنفيذ متكامل" },
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", clients: "Clients", work: "Our Work", contact: "Contact" },
    hero: {
      location: "Saudi Arabia · Qassim · Buraidah",
      title: "Ahd Al-Oula Trading Establishment",
      sub: "Your Partner Towards Excellence and Success",
      desc: "General contracting and finishing works at the highest standards of quality and professionalism.",
      cta1: "Contact Us", cta2: "Our Services",
    },
    about: {
      kicker: "About the Establishment",
      title: "Built on Trust, Elevated by Execution",
      body: "Ahd Al-Oula Trading Establishment was launched in 2021 in the heart of Buraidah city, Qassim region, with steady steps and an ambitious vision toward leadership in general contracting and finishing works. We pride ourselves on providing integrated services centered on quality, precision, and professionalism in execution, with full commitment to meeting our clients' expectations and achieving the highest standards of satisfaction and trust.",
      banner: "From Idea to Execution — We Build Projects Worthy of Your Aspirations",
    },
    vm: {
      kicker: "Vision & Mission",
      title: "Toward Sustainable Leadership",
      visionTitle: "Our Vision",
      visionBody: "To be the first choice in Saudi Arabia in general contracting and finishing works, through innovative solutions that combine quality, creativity, and sustainability.",
      missionTitle: "Our Mission",
      missionBody: "At Ahd Al-Oula, we aim to deliver contracting services built on execution quality and precision, with a firm commitment to on-time project delivery and ensuring client satisfaction at every stage — from planning to final handover.",
    },
    values: {
      kicker: "Our Values",
      title: "What Drives Us on Every Project",
      items: [
        "Quality and commitment in every project",
        "Transparency and credibility in dealings",
        "Innovation and creativity in solutions",
        "Client satisfaction is our constant priority",
        "Professionalism and speed in execution",
        "An experienced and skilled team",
      ],
    },
    services: {
      kicker: "Our Fields of Work",
      title: "Integrated Contracting Services",
      intro: "We are proud to offer a wide range of services in the general contracting sector, including:",
      items: [
        ["Finishing Works", "Interior and exterior finishing to the highest standards of quality and aesthetics."],
        ["Rehabilitation & Renovation", "Restoring buildings and structures per the highest technical and engineering standards."],
        ["HVAC & Cooling", "Installation and maintenance of all types of air conditioning and cooling systems."],
        ["Safety Systems", "Fire alarm and firefighting systems per international standards."],
        ["Security Systems", "Installation of surveillance and access control systems."],
        ["Landscaping & Agriculture", "Design and execution of green spaces with beauty and sustainability."],
        ["Shade Structures", "Car park and entrance shade structures in various modern designs."],
        ["Glass Works", "Glass, structures, and curtain wall works with the highest precision."],
        ["Electrical Works", "Electrical works and wiring of all kinds."],
        ["Plumbing Works", "Plumbing and water installations with efficiency and professionalism."],
        ["Decoration Works", "Interior and exterior decorations in line with the latest trends."],
        ["Insulation Works", "Waterproofing and thermal insulation for buildings and facilities."],
        ["Maintenance Works", "Comprehensive maintenance with long-term contracts for continuous performance."],
        ["Cleaning Works", "Comprehensive cleaning of sites and buildings during and after execution."],
      ],
    },
    clients: { kicker: "Our Clients", title: "Partners in Success", sub: "We are proud of the trust of our partners who have walked the path of excellence with us." },
    work: {
      kicker: "Our Projects",
      title: "Projects We're Proud Of",
      items: [
        "Finishing works for a group of residential villas in Riyadh and Buraidah.",
        "Establishment and execution of irrigation and landscaping networks at Al-Rawaf Mosque in Buraidah.",
        "Rehabilitation and renovation of an Al-Qubba Al-Dimashqiya restaurant branch per its brand identity.",
      ],
    },
    stats: [["2021", "Founded"], ["3+", "Trusted Clients"], ["QSM", "Qassim — Buraidah"]],
    contact: {
      kicker: "Contact Us",
      title: "Let's Start Your Next Project",
      sub: "Our team is ready to answer your inquiries and offer a free consultation.",
      labels: { phone: "Phone", email: "Email", web: "Website", loc: "Location" },
      whatsapp: "WhatsApp", call: "Call Us", emailBtn: "Email",
    },
    footer: {
      tagline: "Your Partner Towards Excellence and Success",
      quick: "Quick Links",
      contact: "Get in Touch",
      rights: "© 2026 Ahd Al-Oula Trading Establishment — All Rights Reserved",
    },
    common: { service: "Service", finished: "Full execution" },
  },
} as const;

const SERVICE_ICONS = [Sparkles, Hammer, Snowflake, Flame, Camera, Leaf, Umbrella, Square, Zap, Droplets, Paintbrush, Layers, Settings, Wrench];
const VALUE_ICONS = [ShieldCheck, Handshake, Lightbulb, Heart, Clock, Users];
const PROJECT_IMAGES = [projectVilla, projectMosque, projectRestaurant];

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "ar";
    setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const L = t[lang];
  const isAr = lang === "ar";

  const navItems = [
    { id: "home", label: L.nav.home },
    { id: "about", label: L.nav.about },
    { id: "services", label: L.nav.services },
    { id: "clients", label: L.nav.clients },
    { id: "work", label: L.nav.work },
    { id: "contact", label: L.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "bg-[var(--brand-navy)]/95 backdrop-blur shadow-card py-2"
            : "bg-[var(--brand-navy)]/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 text-white sm:px-6">
          <Wordmark isAr={isAr} />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-white/85 transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0555132914"
              className="hidden items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-white hover:text-[var(--brand-navy)] sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              0555132914
            </a>
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-white/20"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              {isAr ? "EN" : "AR"}
            </button>
            <button onClick={() => setMenuOpen((v) => !v)} className="rounded-md p-2 lg:hidden" aria-label="Menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[var(--brand-navy)] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-white sm:px-6">
              {navItems.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)} className="border-b border-white/5 py-3 text-sm font-medium">
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <img
          src={heroBuilding}
          alt=""
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-luminosity"
        />
        <GeometricBg />
        <div className="mx-auto max-w-7xl px-4 py-16 text-white sm:px-6 sm:py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur sm:px-4 sm:text-xs">
              <MapPin className="h-3.5 w-3.5" />
              {L.hero.location}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:mt-6 sm:text-5xl md:text-6xl">
              {L.hero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-white/95 sm:mt-4 sm:text-2xl">{L.hero.sub}</p>
            <p className="mt-2.5 max-w-xl text-sm text-white/75 sm:mt-3 sm:text-base">{L.hero.desc}</p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--brand-navy)] shadow-elevated transition hover:bg-white/90 sm:px-6 sm:py-3"
              >
                {L.hero.cta1}
                <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                {L.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            <img src={blueprints} alt="Blueprints" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <Kicker>{L.about.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--brand-navy)] sm:text-3xl md:text-4xl">{L.about.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">{L.about.body}</p>
            <div className="relative mt-6 overflow-hidden rounded-xl bg-hero-gradient p-5 text-white shadow-card sm:mt-8">
              <GeometricBg />
              <p className="relative text-center text-sm font-semibold leading-relaxed sm:text-base">{L.about.banner}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-hero-gradient py-16 text-white sm:py-20 md:py-28">
        <GeometricBg />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Kicker light>{L.vm.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">{L.vm.title}</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-2">
            {[
              { Icon: Lightbulb, title: L.vm.visionTitle, body: L.vm.visionBody },
              { Icon: ShieldCheck, title: L.vm.missionTitle, body: L.vm.missionBody },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--brand-navy)] shadow-card sm:mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/80 sm:mt-3 sm:text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Kicker>{L.values.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--brand-navy)] sm:text-3xl md:text-4xl">{L.values.title}</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-12 lg:grid-cols-3">
            {L.values.items.map((item, i) => {
              const Icon = VALUE_ICONS[i] ?? CheckCircle2;
              return (
                <div key={i} className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-[var(--brand-blue)] sm:p-6">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hero-gradient text-white sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-snug text-[var(--brand-navy)] sm:text-base">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl md:mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              <span className="inline-block h-px w-8 bg-[var(--brand-blue)]" />
              {L.services.kicker}
            </div>
            <h2 className="mt-3 text-2xl font-bold text-[var(--brand-navy)] sm:text-3xl md:text-4xl">{L.services.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">{L.services.intro}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Sticky feature card (top on mobile, sticky aside on desktop) */}
            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-navy)] text-white lg:sticky lg:top-28">
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
                  <defs>
                    <pattern id="svc-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M28 0H0V28" fill="none" stroke="white" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#svc-grid)" />
                </svg>
                <span className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-white/40" />
                <span className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-white/40" />
                <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/40" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/40" />
                <div className="relative flex flex-col gap-6 p-7 md:p-10">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    <span>{L.common.service}</span>
                    <span>
                      {String(activeService + 1).padStart(2, "0")}
                      <span className="text-white/30"> / {String(L.services.items.length).padStart(2, "0")}</span>
                    </span>
                  </div>
                  <div className="flex items-end gap-5">
                    <div className="font-mono text-6xl font-light leading-none tracking-tighter text-white sm:text-7xl md:text-8xl">
                      {String(activeService + 1).padStart(2, "0")}
                    </div>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/20 sm:h-14 sm:w-14">
                      {(() => {
                        const Icon = SERVICE_ICONS[activeService] ?? Building2;
                        return <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />;
                      })()}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                      {L.services.items[activeService][0]}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {t.en.services.items[activeService][0]}
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    {L.services.items[activeService][1]}
                  </p>
                  <div className="mt-2">
                    <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full bg-white transition-all duration-500"
                        style={{ width: `${((activeService + 1) / L.services.items.length) * 100}%` }}
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/40">
                      <span>{L.common.finished}</span>
                      <span>AAO · QASSIM</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Service list */}
            <ol className="lg:col-span-7 xl:col-span-8">
              {L.services.items.map(([title, desc], i) => {
                const Icon = SERVICE_ICONS[i] ?? Building2;
                const isActive = activeService === i;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => setActiveService(i)}
                      onMouseEnter={() => setActiveService(i)}
                      className={`group relative flex w-full items-center gap-3 border-b border-[var(--brand-navy)]/10 px-3 py-5 text-start transition-colors first:border-t sm:gap-5 md:gap-6 md:px-5 md:py-6 ${
                        isActive ? "bg-[var(--brand-navy)]/5" : "hover:bg-[var(--brand-navy)]/[0.03]"
                      }`}
                    >
                      <span
                        className={`absolute inset-y-0 w-[3px] bg-[var(--brand-navy)] transition-transform duration-300 origin-top ${
                          isAr ? "left-0" : "right-0"
                        } ${isActive ? "scale-y-100" : "scale-y-0"}`}
                      />
                      <span className="font-mono text-xs tabular-nums text-[var(--brand-navy)]/50 md:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 md:h-11 md:w-11 ${
                          isActive
                            ? "bg-[var(--brand-navy)] text-white"
                            : "bg-white text-[var(--brand-navy)] ring-1 ring-inset ring-[var(--brand-navy)]/10 group-hover:ring-[var(--brand-navy)]/30"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-bold text-[var(--brand-navy)] sm:text-base md:text-lg">
                          {title}
                        </span>
                        <span className="truncate text-xs text-muted-foreground md:text-sm">
                          {t.en.services.items[i][0]}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={`h-5 w-5 shrink-0 text-[var(--brand-navy)] transition-all duration-300 ${
                          isAr ? "-scale-x-100" : ""
                        } ${isActive ? "opacity-100" : "opacity-30 group-hover:opacity-70"}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden lg:hidden transition-[max-height,opacity] duration-500 ${
                        isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-4 pb-5 pt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Kicker>{L.clients.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--brand-navy)] sm:text-3xl md:text-4xl">
              {L.clients.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              {L.clients.sub}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 md:mt-14">
            {[
              { src: logoTelad, name: isAr ? "شركة تلاد العقارية" : "TELAD Real Estate" },
              { src: logoModel, name: isAr ? "النموذجية الدولية للمقاولات" : "International Model Contracting" },
              { src: logoRawaf, name: isAr ? "الرواف للمقاولات" : "Alrawaf Contracting" },
            ].map((c) => (
              <div
                key={c.name}
                className="group flex items-center justify-center p-2 transition hover:-translate-y-1 sm:p-4"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-24 w-auto max-w-full object-contain grayscale-[15%] transition duration-300 group-hover:grayscale-0 sm:h-36 md:h-40"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-muted/50 py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Kicker>{L.work.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--brand-navy)] sm:text-3xl md:text-4xl">{L.work.title}</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:gap-6 md:mt-12 md:grid-cols-3">
            {L.work.items.map((caption, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[i]}
                    alt=""
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">
                    {String(i + 1).padStart(2, "0")} · {L.common.finished}
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--brand-navy)]">{caption}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-hero-gradient py-16 text-white sm:py-20 md:py-28">
        <GeometricBg />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Kicker light>{L.contact.kicker}</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">{L.contact.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:mt-4 sm:text-base">{L.contact.sub}</p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10">
            <a href="https://wa.me/966555132914" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-elevated transition hover:opacity-90 sm:px-6 sm:py-3">
              <MessageCircle className="h-4 w-4" /> {L.contact.whatsapp}
            </a>
            <a href="tel:0555132914" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--brand-navy)] shadow-elevated transition hover:bg-white/90 sm:px-6 sm:py-3">
              <Phone className="h-4 w-4" /> {L.contact.call}
            </a>
            <a href="mailto:ahdoneest@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 sm:px-6 sm:py-3">
              <Mail className="h-4 w-4" /> {L.contact.emailBtn}
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-12 lg:grid-cols-4">
            <ContactCard Icon={Phone} label={L.contact.labels.phone} value="0555132914" value2="0508605516" href="tel:0555132914" />
            <ContactCard Icon={Mail} label={L.contact.labels.email} value="ahdoneest@gmail.com" href="mailto:ahdoneest@gmail.com" />
            <ContactCard Icon={Globe} label={L.contact.labels.web} value="ahdaloula.com" href="https://ahdaloula.com" />
            <ContactCard Icon={MapPin} label={L.contact.labels.loc} value={isAr ? "القصيم - بريدة" : "Qassim - Buraidah"} />
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-elevated sm:mt-10">
            <iframe
              title="Buraidah, Qassim"
              src="https://www.google.com/maps?q=Buraidah,+Qassim,+Saudi+Arabia&output=embed"
              className="h-56 w-full sm:h-72"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--brand-navy)] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <Wordmark isAr={isAr} />
            <p className="mt-4 max-w-xs text-sm text-white/70">{L.footer.tagline}</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">{L.footer.quick}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {navItems.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} className="transition hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/90">{L.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> 0555132914</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> ahdoneest@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {isAr ? "المملكة العربية السعودية - القصيم - بريدة" : "Saudi Arabia - Qassim - Buraidah"}</li>
              <li className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> @ahdaloula</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/60 sm:px-6">
          {L.footer.rights}
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/966555132914"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-110"
        style={isAr ? { left: "1.5rem" } : { right: "1.5rem" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function Wordmark({ isAr, dark = false }: { isAr: boolean; dark?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
      <img src={logoAhd} alt="AHD" className={`h-10 w-auto shrink-0 object-contain sm:h-12 ${!dark ? "brightness-0 invert" : ""}`} />
      <div className="leading-tight">
        <div className={`text-[13px] font-bold sm:text-sm ${dark ? "text-[var(--brand-navy)]" : "text-white"}`}>
          {isAr ? "عهد الأولى" : "Ahd Al-Oula"}
        </div>
        <div className={`text-[10px] font-medium ${dark ? "text-muted-foreground" : "text-white/70"}`}>
          {isAr ? "مؤسسة تجارية" : "Trading Est."}
        </div>
      </div>
    </a>
  );
}

function Kicker({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`h-px w-8 ${light ? "bg-white/40" : "bg-[var(--brand-blue)]/40"}`} />
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-[var(--brand-blue)]"}`}>
        {children}
      </span>
      <span className={`h-px w-8 ${light ? "bg-white/40" : "bg-[var(--brand-blue)]/40"}`} />
    </div>
  );
}

function ContactCard({
  Icon, label, value, value2, href,
}: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; value2?: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--brand-navy)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</div>
        <div className="mt-0.5 truncate text-sm font-bold text-white">{value}</div>
        {value2 && <div className="text-xs text-white/70">{value2}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function GeometricBg() {
  return (
    <svg className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="tri" width="60" height="52" patternUnits="userSpaceOnUse">
          <path d="M30 4 L56 48 L4 48 Z" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tri)" />
    </svg>
  );
}
