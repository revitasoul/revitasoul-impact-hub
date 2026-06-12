import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Repeat,
  Heart,
  Package,
  Truck,
  LineChart,
  CheckCircle2,
  Leaf,
  HandHeart,
  Quote,
  ClipboardList,
  BarChart3,
  Building2,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import { submitEmailSignup } from "@/lib/email-signup.functions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/hero-family.jpg";
import groceriesImg from "@/assets/groceries.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RevitaSoul — Help Feed Families Every Month" },
      {
        name: "description",
        content:
          "Join a community helping sponsor food support for families facing food insecurity. Become a monthly RevitaSoul member.",
      },
      { property: "og:title", content: "RevitaSoul — Help Feed Families Every Month" },
      {
        property: "og:description",
        content:
          "A simple monthly membership funding community-driven food support for families in need.",
      },
    ],
  }),
  component: Landing,
});

const SHOPIFY_URL =
  "https://revitasoul.com/products/the-essentialist-25-monthly?variant=52416381845811";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-base font-semibold tracking-tight">RevitaSoul</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#impact" className="hover:text-white">Impact</a>
          <a href="#transparency" className="hover:text-white">Transparency</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a
          href={SHOPIFY_URL}
          className="hidden md:inline-flex btn-primary text-sm"
          style={{ padding: "0.6rem 1.1rem" }}
        >
          Become a Member
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-sm font-medium"
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-5 rounded-2xl border border-white/10 bg-charcoal-soft p-5 text-white/90">
          <div className="flex flex-col gap-4 text-sm">
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a href="#impact" onClick={() => setOpen(false)}>Impact</a>
            <a href="#transparency" onClick={() => setOpen(false)}>Transparency</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href={SHOPIFY_URL} onClick={() => setOpen(false)} className="btn-primary mt-2">
              Become a Member
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A family receiving fresh grocery bags from a volunteer"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal" />
      </div>

      <div className="container-page relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            A social impact membership
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            One Membership. <span className="text-primary">Consistent Impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Join a community helping provide food support for individuals and families
            facing food insecurity through consistent monthly action.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={SHOPIFY_URL} className="btn-primary">
              Become a Member <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost-light">
              Learn How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-charcoal-soft/60 backdrop-blur">
        <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-8">
          {[
            { icon: LineChart, label: "Monthly Impact Updates" },
            { icon: Users, label: "Growing Community" },
            { icon: Repeat, label: "Cancel Anytime" },
            { icon: HandHeart, label: "Consistent Food Support" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 text-white/85">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <s.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityImpact() {
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Community Impact</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Community Impact</h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg leading-relaxed">
            RevitaSoul is committed to documenting and sharing the impact created through member support.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg leading-relaxed">
            Members receive periodic updates highlighting food support efforts, distributions, and community impact.
          </p>
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-display">Impact Reports</h3>
          <p className="mt-4 text-base text-muted-foreground md:text-lg leading-relaxed">
            RevitaSoul shares periodic updates documenting food support efforts and community impact.
          </p>
          <div className="mt-10">
            <p className="text-sm font-medium text-muted-foreground mb-4">Impact Report Archive</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4">
                <span className="text-sm font-medium text-foreground">August 2026</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Coming Soon</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4">
                <span className="text-sm font-medium text-foreground">September 2026</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: Heart, title: "Join", body: "Become a RevitaSoul member with a simple monthly membership." },
    { n: "02", icon: Users, title: "We Coordinate", body: "We organize food support efforts through community distribution initiatives." },
    { n: "03", icon: Package, title: "Impact Happens", body: "Food support reaches individuals and families facing food insecurity." },
  ];
  return (
    <section id="how" className="bg-background py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">The process</span>
          <h2 className="mt-4 text-3xl md:text-5xl">How RevitaSoul works</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Three simple steps turn a monthly membership into ongoing food support
            delivered through community efforts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-3xl border border-border bg-card p-8 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgb(0_0_0/0.2)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm text-muted-foreground">{s.n}</span>
              </div>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  const cards = [
    { icon: Repeat, title: "Consistent Impact", body: "Support food assistance every month — sustained help, not one-off gestures." },
    { icon: Users, title: "Community Driven", body: "Join others committed to helping families in need through coordinated effort." },
    { icon: LineChart, title: "Transparent Updates", body: "Receive regular impact updates showing what the community has made possible." },
  ];
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Why join</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A simple way to make a difference.</h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            Membership turns small monthly actions into meaningful, ongoing support
            for the families that need it most.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl bg-card p-8 ring-1 ring-border">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const items = [
    { icon: Package, label: "Grocery Care Packages" },
    { icon: Truck, label: "Bulk Food Support" },
    { icon: Users, label: "Community Distribution Efforts" },
    { icon: LineChart, label: "Ongoing Impact Updates" },
  ];
  const placeholders = [
    { icon: Package, title: "Food Purchased" },
    { icon: ClipboardList, title: "Distribution Updates" },
    { icon: BarChart3, title: "Community Growth" },
  ];
  return (
    <section id="impact" className="bg-background py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Impact</span>
            <h2 className="mt-4 text-3xl md:text-5xl">What members make possible.</h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Every membership contributes to real, tangible food support — coordinated
              through community-driven efforts and reported back to you.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <i.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{i.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-dashed border-border bg-muted/50 p-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Impact reports
              </div>
              <p className="mt-1.5">
                Our first impact report will be published following our initial food support distribution.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {placeholders.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card px-5 py-6 text-center">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <h4 className="mt-3 text-sm font-medium text-foreground">{p.title}</h4>
                  <span className="mt-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={groceriesImg}
                alt="Fresh groceries: produce, bread, rice and pantry staples"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-12 overflow-hidden rounded-3xl">
              <img
                src={communityImg}
                alt="Community volunteers packing grocery bags for distribution"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section id="transparency" className="bg-charcoal py-24 text-white md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust & Transparency
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl">Built for long-term impact.</h2>
        </div>
        <div className="space-y-6 text-white/80 md:text-lg">
          <p>
            RevitaSoul is a for-profit social enterprise built around a social impact mission.
          </p>
          <p>
            Our membership model is designed to create sustainable, long-term food
            support through community-driven efforts.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p>
                Memberships are <span className="font-semibold text-white">not charitable donations</span> and are not tax-deductible.
                You're supporting a social enterprise mission, not a registered charity.
              </p>
            </div>
          </div>
          <p className="text-sm text-white/60">
            We believe trust is earned through transparency, consistency, and documented impact.
          </p>
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow">Founder</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Why I Started RevitaSoul</h2>
          <div className="mt-10 relative rounded-3xl border border-border bg-card p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
            <blockquote className="relative text-lg md:text-xl leading-relaxed text-foreground">
              Food insecurity affects millions of people, yet support is often inconsistent.
              I created RevitaSoul to build a simple membership model that helps create
              ongoing food support through community-driven efforts. My goal is to make
              consistent impact simple, transparent, and sustainable.
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                U
              </div>
              <div>
                <p className="font-medium text-foreground">Umair</p>
                <p className="text-sm text-muted-foreground">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How does my monthly membership help?", a: "Your membership funds coordinated food support efforts including grocery care packages, bulk food distribution, and community-driven initiatives that reach families facing food insecurity." },
    { q: "Is my membership a tax-deductible donation?", a: "No. RevitaSoul is a for-profit social enterprise, not a registered charity. Memberships support our mission but are not tax-deductible." },
    { q: "Can I cancel anytime?", a: "Yes. You can pause or cancel your membership at any time, no questions asked." },
    { q: "Will I see where my support goes?", a: "Yes. Members receive regular impact updates summarizing community distribution efforts and the food support delivered." },
    { q: "Who do you support?", a: "Individuals and families facing food insecurity, reached through community distribution initiatives." },
  ];
  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Questions, answered.</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before becoming a member.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-charcoal px-8 py-16 text-white md:px-16 md:py-24">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="eyebrow">Join the movement</span>
            <h2 className="mt-5 text-3xl md:text-5xl">Make food support part of your month.</h2>
            <p className="mt-5 text-white/75 md:text-lg">
              Become a RevitaSoul member today and help fund consistent, community-driven
              food support for families who need it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={SHOPIFY_URL} className="btn-primary">
                Become a Member <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="btn-ghost-light">
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalTrustBanner() {
  return (
    <section className="bg-charcoal py-16 text-white md:py-20">
      <div className="container-page text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl">Building Long-Term Impact</h2>
        <p className="mt-5 text-white/75 md:text-lg">
          RevitaSoul is designed to create sustainable food support through a growing
          community of members committed to consistent action.
        </p>
        <div className="mt-9">
          <a href={SHOPIFY_URL} className="btn-primary">
            Become a Member <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ForBusinesses() {
  const tiers = [
    { price: "$250", families: "~6", label: "Monthly Partnership" },
    { price: "$500", families: "~15", label: "Monthly Partnership" },
    { price: "$1,000", families: "~30", label: "Monthly Partnership" },
  ];
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">For Businesses</span>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Turn Your Brand Into a Force for Good.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            RevitaSoul corporate partnerships let your company feed families every month —
            we handle everything, you get the impact report and the recognition.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.price}
              className="relative rounded-3xl border border-border bg-card p-8 text-center transition hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_rgb(0_0_0/0.2)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mx-auto">
                <Building2 className="h-5 w-5" />
              </span>
              <div className="mt-6">
                <span className="text-4xl font-display font-medium text-foreground">{t.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.label}</p>
              <div className="mt-6 rounded-2xl bg-muted/50 px-5 py-4">
                <p className="text-2xl font-display font-medium text-foreground">{t.families}</p>
                <p className="mt-1 text-sm text-muted-foreground">families supported</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:admin@revitasoul.com"
            className="btn-primary inline-flex"
          >
            Enquire About a Partnership <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const result = await submitEmailSignup({ data: { email } });
      setStatus("success");
      setMessage(result.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Send className="h-3.5 w-3.5" />
            Newsletter
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl">Stay Updated on Our Impact</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Get monthly impact reports delivered to your inbox. No spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="h-12 w-full rounded-full border border-border bg-card px-5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 sm:w-80"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : status === "success" ? "Subscribed" : "Subscribe"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${status === "success" ? "text-primary" : "text-destructive"}`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-base font-semibold text-white">RevitaSoul</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} RevitaSoul. A social enterprise.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#transparency" className="hover:text-white">Transparency</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <CommunityImpact />
      <HowItWorks />
      <WhyJoin />
      <Impact />
      <Transparency />
      <FounderStory />
      <FAQ />
      <FinalCTA />
      <FinalTrustBanner />
      <ForBusinesses />
      <Footer />
    </main>
  );
}
