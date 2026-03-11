import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// ─── COLOR TOKENS ───────────────────────────────────────────────────────────
// --ink: #0A1628  --navy: #0F1F3D  --teal: #00B4A6
// --green: #00C896  --blue: #1A56DB  --muted: #64748B

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-9" />
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {['Capabilities', 'Case Studies', 'How We Work', 'Team'].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-slate-600 hover:text-teal-500 transition-colors no-underline"
                  style={{ '--hover': '#00B4A6' }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <Button
          asChild
          className="text-sm font-bold text-white"
          style={{
            background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
            border: 'none',
          }}
        >
          <a href="#contact">Start a Conversation</a>
        </Button>
      </div>
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const pills = [
    {
      icon: '🧠',
      title: 'Knowledge & Compliance AI',
      sub: 'Grounded in your data — zero hallucination risk',
    },
    {
      icon: '📄',
      title: 'Document Intelligence',
      sub: 'Contracts, filings, reports — structured at scale',
    },
    {
      icon: '⚡',
      title: 'Autonomous Workflow Agents',
      sub: 'End-to-end operations without manual loops',
    },
    {
      icon: '🔒',
      title: 'Private AI Deployment',
      sub: 'Your models, your infrastructure, your data',
    },
  ]

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ background: '#0A1628', minHeight: '92vh', paddingTop: '96px' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -180,
          right: -120,
          width: 640,
          height: 640,
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(0,200,150,.14) 0%,transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 80,
          left: -80,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(26,86,219,.18) 0%,transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10 flex-1 grid md:grid-cols-[1.1fr_.9fr] gap-16 items-center pb-20">
        {/* Left */}
        <div>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2.5"
            style={{ color: '#00B4A6' }}
          >
            <span
              className="inline-block w-7 h-0.5"
              style={{ background: '#00B4A6' }}
            />
            Enterprise AI — Production Grade
          </p>
          <h1
            className="font-black leading-none text-white mb-6"
            style={{
              fontSize: 'clamp(36px,5vw,60px)',
              letterSpacing: '-0.03em',
            }}
          >
            Most enterprise AI
            <br />
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              never leaves the pilot.
            </em>
          </h1>
          <p
            className="text-lg mb-9 max-w-md leading-relaxed"
            style={{ color: 'rgba(255,255,255,.62)' }}
          >
            Enterprises invest in AI and get dashboards. We build AI that
            integrates into operations, replaces manual complexity, and delivers
            measurable outcomes — in production, not in demos.
          </p>
          <div className="flex gap-3 flex-wrap mb-12">
            <Button
              asChild
              className="font-bold text-white px-7 py-3"
              style={{
                background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
                border: 'none',
              }}
            >
              <a href="#contact">Schedule a Discovery →</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-bold px-7 py-3"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,.8)',
                border: '1.5px solid rgba(255,255,255,.28)',
              }}
            >
              <a href="#capabilities">See What We Build</a>
            </Button>
          </div>
          <div
            className="flex gap-7 flex-wrap pt-7"
            style={{ borderTop: '1px solid rgba(255,255,255,.09)' }}
          >
            {[
              { stat: '40–70%', label: 'Reduction in manual processing time' },
              { stat: 'Q1–Q2', label: 'Time to measurable ROI' },
              { stat: '60–80%', label: 'AI infrastructure cost savings' },
            ].map((s) => (
              <div key={s.stat}>
                <strong
                  className="block text-lg font-extrabold"
                  style={{ color: 'rgba(255,255,255,.9)' }}
                >
                  {s.stat}
                </strong>
                <span
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,.42)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — capability pills */}
        <div className="hidden md:flex flex-col gap-3.5 py-2.5">
          {pills.map((p) => (
            <div
              key={p.title}
              className="flex items-center gap-3.5 rounded-2xl px-5 py-4 cursor-default transition-all duration-200 hover:translate-x-1.5"
              style={{
                background: 'rgba(255,255,255,.055)',
                border: '1px solid rgba(255,255,255,.09)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,.10)'
                e.currentTarget.style.borderColor = 'rgba(0,200,150,.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,.055)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                style={{
                  background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
                }}
              >
                {p.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  {p.title}
                </h4>
                <p
                  className="text-xs"
                  style={{ color: 'rgba(255,255,255,.45)' }}
                >
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="relative z-10 leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="80"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

// ─── PAIN STRIP ──────────────────────────────────────────────────────────────
function PainStrip() {
  const cards = [
    {
      n: '01',
      title: "Data That's Rich but Unreachable",
      body: 'Decades of institutional knowledge lives in PDFs, contracts, emails, and legacy systems — invisible to decision-makers and inaccessible to AI. Enterprises are data-rich and intelligence-poor.',
    },
    {
      n: '02',
      title: "Pilots That Can't Survive the Enterprise",
      body: 'Proof-of-concepts work in controlled conditions and fail in production. Enterprise complexity — integration requirements, compliance constraints, data governance, legacy infrastructure — kills generic AI implementations.',
    },
    {
      n: '03',
      title: 'AI Spend Without a Business Case',
      body: 'Organisations buy models and platforms but cannot connect them to measurable business outcomes. Leadership loses confidence. Programmes stall. The ROI never appears on a P&L.',
    },
  ]

  return (
    <section className="bg-white py-20" id="problem">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            The Problem
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,44px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            Where Enterprise AI Programmes Break Down
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            The technology works. The implementations don't. Three structural
            failures account for the majority of enterprise AI spending that
            produces no business value.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {cards.map((c) => (
            <Card
              key={c.n}
              className="relative overflow-hidden rounded-3xl border-0"
              style={{ background: '#F8FAFF' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
                }}
              />
              <CardContent className="pt-9 pb-9 px-7">
                <span
                  className="absolute text-8xl font-black select-none"
                  style={{
                    color: 'rgba(0,0,0,.05)',
                    top: 16,
                    right: 18,
                    lineHeight: 1,
                  }}
                >
                  {c.n}
                </span>
                <h3
                  className="text-lg font-extrabold mb-3 leading-snug"
                  style={{ color: '#0F1F3D' }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#64748B' }}
                >
                  {c.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BRIDGE ──────────────────────────────────────────────────────────────────
function Bridge() {
  const items = [
    {
      icon: '🏗️',
      title: 'Built for Enterprise Complexity',
      body: 'Every system we design accounts for your governance requirements, integration architecture, compliance constraints, and security posture — not bolted on afterward.',
    },
    {
      icon: '📐',
      title: 'ROI-First Methodology',
      body: 'Every engagement begins with a business outcome thesis and a measurable ROI target. Architecture decisions flow from the business case, not the other way around.',
    },
    {
      icon: '🚀',
      title: 'Production, Not Prototypes',
      body: 'We take full ownership from pilot to enterprise rollout — engineering, deployment, tuning, and optimisation. We do not disappear after the demo.',
    },
    {
      icon: '🔬',
      title: 'Deep Technical Specialisation',
      body: 'RAG architecture, agentic systems, private LLM deployment, document intelligence — these are our core disciplines, not additional services on a menu.',
    },
  ]

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#0F1F3D' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,200,150,.09) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-4"
            style={{ color: 'rgba(255,255,255,.45)' }}
          >
            Where We Come In
          </span>
          <h2
            className="font-black leading-tight text-white mb-4"
            style={{
              fontSize: 'clamp(26px,3.5vw,40px)',
              letterSpacing: '-0.02em',
            }}
          >
            We build the bridge between AI potential and enterprise reality.
          </h2>
          <div
            className="w-12 h-0.5 rounded mb-5"
            style={{ background: 'linear-gradient(135deg,#00C896,#1A56DB)' }}
          />
          <p
            className="leading-relaxed mb-7"
            style={{ color: 'rgba(255,255,255,.6)', fontSize: 16 }}
          >
            Tuning Research was built for exactly this gap. We are not a model
            vendor, not a platform play, and not a demo factory. We are an
            enterprise AI consultancy that owns the full journey from discovery
            to live production — with explicit accountability for outcomes.
          </p>
          <Button
            asChild
            className="font-bold text-white"
            style={{
              background: 'linear-gradient(135deg,#00C896 0%,#1A56DB 100%)',
              border: 'none',
            }}
          >
            <a href="#contact">Talk to Us →</a>
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 items-start rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.08)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                style={{
                  background: 'linear-gradient(135deg,#00C896,#1A56DB)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,.55)' }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Wave down */}
      <div className="mt-0 leading-none">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="70"
        >
          <path
            d="M0,0 C360,70 1080,0 1440,50 L1440,70 L0,70 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

// ─── CAPABILITIES ─────────────────────────────────────────────────────────────
function Capabilities() {
  const caps = [
    {
      n: '01',
      icon: '🧠',
      title: 'Retrieval-Augmented Generation (RAG)',
      body: 'Enterprise AI that reasons over your internal knowledge — policies, contracts, research, operational data — and responds with precision, citations, and zero hallucination risk. From compliance assistants to research automation to customer-facing knowledge bots, RAG grounds AI firmly in what your organisation actually knows.',
      tag: 'Zero hallucination · Citation-backed · Grounded in your data',
      wide: true,
    },
    {
      n: '02',
      icon: '📄',
      title: 'Document Intelligence',
      body: 'Structured extraction, classification, and analysis of unstructured enterprise content — contracts, filings, invoices, reports — converted into decision-ready intelligence at scale.',
      tag: 'Unstructured → structured · Auditable',
      wide: false,
    },
    {
      n: '03',
      icon: '⚡',
      title: 'Agentic AI & Autonomous Workflows',
      body: 'Multi-agent systems that plan, execute, and optimise complex operational workflows end-to-end — removing manual bottlenecks from research, procurement, compliance, and operations cycles.',
      tag: 'End-to-end automation · Decision agents',
      wide: false,
    },
    {
      n: '04',
      icon: '🔒',
      title: 'Private LLM Deployment',
      body: 'Fine-tuned, self-hosted models within your own infrastructure — built for enterprises where data sovereignty, regulatory compliance, and cost predictability are non-negotiable. 60–80% reduction in inference costs versus frontier APIs.',
      tag: 'Full sovereignty · 60–80% cost savings · Zero data exposure',
      wide: false,
      dark: true,
    },
    {
      n: '05',
      icon: '🎥',
      title: 'Video-Based AI Intelligence',
      body: 'Enterprises generate vast volumes of video data across operations, facilities, and customer interactions — most of it unanalysed. We convert live and recorded video streams into structured operational intelligence: safety compliance monitoring, process adherence, anomaly detection, and quality scoring.',
      tag: 'Operational monitoring · Safety compliance · Multimodal AI',
      wide: false,
    },
  ]

  return (
    <section className="py-24 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            What We Build
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,42px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            Five Core AI Capabilities for Enterprise Operations
          </h2>
          <p className="max-w-xl text-base" style={{ color: '#64748B' }}>
            Each capability targets a distinct category of enterprise
            operational complexity — and can be deployed independently or
            combined into a full transformation programme.
          </p>
        </div>

        {/* Grid: first card spans 2 cols, then 2+2, then 1 wide */}
        <div className="grid md:grid-cols-2 gap-6">
          {caps.map((c) => (
            <Card
              key={c.n}
              className={`relative overflow-hidden rounded-3xl border border-slate-200 transition-shadow hover:shadow-xl${c.wide ? ' md:col-span-2' : ''}${c.dark ? ' border-transparent' : ''}`}
              style={c.dark ? { background: '#0F1F3D' } : {}}
            >
              <CardContent className="pt-8 pb-8 px-8">
                <p
                  className="text-5xl font-black mb-4 select-none"
                  style={{
                    color: c.dark ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.06)',
                  }}
                >
                  {c.n}
                </p>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3
                  className={`font-extrabold mb-3 text-lg leading-snug${c.dark ? ' text-white' : ''}`}
                  style={c.dark ? {} : { color: '#0F1F3D' }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: c.dark ? 'rgba(255,255,255,.55)' : '#64748B',
                  }}
                >
                  {c.body}
                </p>
                <Badge
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: c.dark
                      ? 'rgba(0,200,150,.12)'
                      : 'rgba(0,180,166,.09)',
                    color: c.dark ? '#00C896' : '#00B4A6',
                    border: 'none',
                  }}
                >
                  {c.tag}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CASE STUDIES ────────────────────────────────────────────────────────────
function CaseStudies() {
  const cases = [
    {
      sector: 'Manufacturing & Industrial',
      title:
        'Turning a costly, low-adoption ERP into an AI-native operational nerve centre',
      result: '5',
      resultLabel:
        'ERP modules fully automated and accessible via plain-language AI',
      problem:
        'An industrial manufacturer had deployed ERPNext across its core business functions — CRM, Sales, Inventory, Accounting, and HR — but adoption was critically low. Key operations were still being managed manually. Data was fragmented across silos with no real-time visibility.',
      solution:
        'A RAG-powered natural language interface deployed across all five ERP modules, enabling any employee to query, interact with, and act on operational data using plain language — no training required. An agentic AI layer automated repetitive, rule-based workflows end-to-end.',
      tags: [
        'RAG',
        'Agentic AI Workflows',
        'ERP Integration',
        'Conversational Interface',
      ],
    },
    {
      sector: 'BFSI & Capital Markets',
      title:
        'Compressing multi-day IPO document review cycles to under four hours',
      result: '~4 hrs',
      resultLabel:
        'Full DRHP–RHP review and regulatory change classification, down from 2–3 days',
      problem:
        'A capital markets exchange required its review teams to compare IPO prospectus documents — DRHP to RHP — running 500+ pages each. Reviewers had approximately two days to complete the analysis, creating significant risk of missing material regulatory changes.',
      solution:
        'A Document Intelligence platform that ingested scanned and unstructured IPO filings, performed complete line-by-line comparison across DRHP, RHP, and addendums, and auto-classified every detected change by severity — Low, Medium, or High.',
      tags: [
        'Document Intelligence',
        'Change Classification',
        'RAG — Regulatory Risk',
        'Audit-Ready Output',
      ],
    },
    {
      sector: 'Energy & Infrastructure',
      title:
        'Replacing hours of manual Excel analysis with instant natural-language portfolio intelligence',
      result: '70%',
      resultLabel:
        'Reduction in manual effort across Excel-based portfolio workflows',
      problem:
        'A large renewable energy developer managed a complex portfolio of solar, wind, and hybrid assets — but performance data was scattered across hundreds of Excel files, vendor reports, and legacy monitoring systems. Asset managers spent hours each week manually compiling KPIs.',
      solution:
        'A RAG-powered financial intelligence layer over structured data enabling natural-language queries that return source-backed, traceable answers and multi-entity comparative analysis across the portfolio. Access to financial insights went from hours to seconds.',
      tags: [
        'RAG — Financial Intelligence',
        'Agentic Orchestration',
        'Document Intelligence',
        'Report Automation',
      ],
    },
  ]

  return (
    <section className="py-24" style={{ background: '#F8FAFF' }} id="results">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            Results
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,42px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            AI That Moved the Business Needle
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: '#64748B' }}
          >
            How Tuning Research has taken enterprise AI from theoretical to
            operational across complex environments.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {cases.map((c, i) => (
            <Card
              key={c.sector}
              className={`overflow-hidden rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow grid md:grid-cols-[1fr_2fr]${i % 2 !== 0 ? ' md:[direction:rtl]' : ''}`}
            >
              {/* Left panel */}
              <div
                className="p-10 flex flex-col justify-between"
                style={{ background: '#0F1F3D', direction: 'ltr' }}
              >
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{ color: '#00B4A6' }}
                  >
                    {c.sector}
                  </p>
                  <h3 className="text-xl font-extrabold text-white leading-snug mb-6">
                    {c.title}
                  </h3>
                </div>
                <div>
                  <div
                    className="text-5xl font-black mb-1.5 leading-none"
                    style={{
                      background: 'linear-gradient(135deg,#00C896,#1A56DB)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {c.result}
                  </div>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(255,255,255,.5)' }}
                  >
                    {c.resultLabel}
                  </p>
                </div>
              </div>
              {/* Right panel */}
              <CardContent
                className="p-10 flex flex-col justify-between bg-white"
                style={{ direction: 'ltr' }}
              >
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2.5"
                    style={{ color: '#00B4A6' }}
                  >
                    The Operational Problem
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-7"
                    style={{ color: '#334155' }}
                  >
                    {c.problem}
                  </p>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2.5"
                    style={{ color: '#0F1F3D' }}
                  >
                    What We Delivered
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#334155' }}
                  >
                    {c.solution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {c.tags.map((t) => (
                    <Badge
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(0,180,166,.09)',
                        color: '#00B4A6',
                        border: 'none',
                      }}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── METHODOLOGY ─────────────────────────────────────────────────────────────
function Methodology() {
  const steps = [
    {
      n: '01',
      title: 'Discover',
      body: 'Workflow mapping, data audit, ROI modelling — identifying where AI can create the most measurable business impact.',
    },
    {
      n: '02',
      title: 'Architect',
      body: 'System design tailored to your infrastructure, security requirements, and integration architecture.',
    },
    {
      n: '03',
      title: 'Deploy',
      body: 'Production rollout with full governance, compliance controls, and integration into live operational systems.',
    },
    {
      n: '04',
      title: 'Optimise',
      body: 'Continuous accuracy tuning, cost optimisation, and expansion — AI systems that improve after go-live, not degrade.',
    },
  ]

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#F8FAFF' }}
      id="how-we-work"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(0,200,150,.07) 0%,transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            How We Work
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,42px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            How We Take AI to Production
          </h2>
          <p
            className="max-w-md mx-auto text-base"
            style={{ color: '#64748B' }}
          >
            A structured four-phase methodology that takes AI from business case
            to production — with full accountability at every stage.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div
            className="absolute hidden md:block"
            style={{
              top: 44,
              left: 'calc(12.5% + 8px)',
              right: 'calc(12.5% + 8px)',
              height: 2,
              background: 'linear-gradient(135deg,#00C896,#1A56DB)',
              zIndex: 0,
            }}
          />
          {steps.map((s) => (
            <div key={s.n} className="text-center px-4 relative z-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-black text-white mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg,#00C896,#1A56DB)',
                  boxShadow: '0 6px 24px rgba(0,180,166,.32)',
                }}
              >
                {s.n}
              </div>
              <h3
                className="font-extrabold mb-2.5"
                style={{ color: '#0F1F3D', fontSize: 17 }}
              >
                {s.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#64748B' }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FOUNDERS ────────────────────────────────────────────────────────────────
function Founders() {
  const founders = [
    {
      initials: 'SA',
      name: 'Sonam Agarwal',
      role: 'Co-Founder & CEO · Enterprise Strategy',
      bio: "A two-time entrepreneur with deep experience advising large enterprises on transformation. Former Partner at EY, where she led digital and AI advisory engagements across financial services, manufacturing, and professional services. Sonam brings the enterprise buyer's perspective — she understands what it takes to move AI from boardroom mandate to operational reality inside complex organisations.",
      tags: [
        '2× Founder',
        'Ex-EY Partner',
        'Enterprise Advisory',
        'AI Transformation',
      ],
    },
    {
      initials: 'SJ',
      name: 'Sabhay Jain',
      role: 'Co-Founder & CTO · AI/ML Engineering',
      bio: 'A deep technologist from IIT Kanpur with extensive research and applied experience in machine learning and AI systems. Sabhay has spent his career building AI at the intersection of research and production — from foundational model work to enterprise-grade RAG architectures and agentic systems.',
      tags: ['IIT Kanpur', 'AI / ML', 'RAG Architecture', 'Applied Research'],
    },
  ]

  return (
    <section className="py-24 bg-white" id="team">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-15">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            The Team
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,42px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            Built by People Who Have Sat on Both Sides
          </h2>
          <p
            className="max-w-md mx-auto text-base"
            style={{ color: '#64748B' }}
          >
            Tuning Research was founded by operators who have seen enterprise AI
            fail from the inside — and built the firm to solve for those exact
            failure modes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {founders.map((f) => (
            <Card
              key={f.name}
              className="rounded-3xl border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-10 grid grid-cols-[auto_1fr] gap-7 items-start">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white shrink-0"
                  style={{
                    background: 'linear-gradient(135deg,#00C896,#1A56DB)',
                    boxShadow: '0 6px 24px rgba(0,180,166,.3)',
                  }}
                >
                  {f.initials}
                </div>
                <div>
                  <h3
                    className="text-xl font-extrabold mb-1"
                    style={{ color: '#0F1F3D' }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-4"
                    style={{ color: '#00B4A6' }}
                  >
                    {f.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#64748B' }}
                  >
                    {f.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: '#F8FAFF',
                          color: '#334155',
                          borderColor: '#E2E8F0',
                        }}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── INDUSTRIES ──────────────────────────────────────────────────────────────
function Industries() {
  const industries = [
    {
      icon: '⚙️',
      title: 'Manufacturing & Industrial',
      desc: 'Production environments generate continuous operational data. AI transforms how manufacturers monitor, automate, and optimise complex multi-site operations.',
      uses: [
        'Real-time safety compliance and PPE monitoring via Video AI',
        'Predictive maintenance through anomaly detection in operational feeds',
        'Natural-language access to ERP, MES, and production data',
        'Automated quality inspection and defect classification',
      ],
      tags: ['Video AI', 'RAG', 'Agentic Workflows', 'Document Intelligence'],
      wide: true,
    },
    {
      icon: '🏦',
      title: 'BFSI',
      desc: 'Financial institutions manage massive document volumes, regulatory obligations, and risk decisions simultaneously. AI compresses review cycles, strengthens compliance posture.',
      uses: [
        'Credit underwriting and loan document automation',
        'IPO and regulatory prospectus review and change detection',
        'Merchant fraud detection and risk scoring at scale',
        'Policy and compliance knowledge management via RAG',
      ],
      tags: ['Document Intelligence', 'RAG', 'Agentic AI', 'Private LLM'],
      wide: true,
      dark: true,
    },
    {
      icon: '💊',
      title: 'Pharma & Healthcare',
      desc: 'Drug development, clinical operations, and regulatory submissions produce some of the most complex documentation in any industry.',
      uses: [
        'Clinical trial document review and structured data extraction',
        'Regulatory submission preparation and cross-referencing',
        'Medical literature synthesis and research acceleration',
      ],
      tags: ['Document Intelligence', 'RAG', 'Private LLM'],
    },
    {
      icon: '⚡',
      title: 'Energy, Oil & Gas',
      desc: 'Asset-intensive portfolios across distributed sites demand continuous performance monitoring, compliance reporting, and financial visibility.',
      uses: [
        'Portfolio performance monitoring and variance analysis',
        'Natural-language querying of financial and operational KPIs',
        'Automated ESG and regulatory reporting',
      ],
      tags: ['RAG', 'Agentic Orchestration', 'Video AI'],
    },
    {
      icon: '🛍️',
      title: 'Retail & Consumer Products',
      desc: 'The pace of retail demands real-time intelligence and fast automation across stores, supply chains, and export operations.',
      uses: [
        'In-store footfall and shelf compliance monitoring via Video AI',
        'Demand forecasting and inventory optimisation',
        'Export-import compliance automation and HS code classification',
      ],
      tags: ['Video AI', 'RAG', 'Document Intelligence'],
    },
  ]

  return (
    <section
      className="py-24"
      style={{ background: '#F8FAFF' }}
      id="industries"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#00B4A6' }}
          >
            Where We Work
          </span>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(26px,4vw,38px)',
              color: '#0F1F3D',
              letterSpacing: '-0.02em',
            }}
          >
            Industries Where AI Complexity Is Highest
          </h2>
          <p className="max-w-lg mx-auto text-sm" style={{ color: '#64748B' }}>
            We focus on sectors where data is dense, compliance is
            non-negotiable, and the cost of getting AI wrong is significant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {industries.map((ind) => (
            <Card
              key={ind.title}
              className={`rounded-3xl border transition-all hover:-translate-y-1 hover:shadow-xl overflow-hidden${ind.wide ? ' md:col-span-2' : ''}${ind.dark ? ' border-transparent' : ' border-slate-200'}`}
              style={
                ind.dark ? { background: '#0F1F3D' } : { background: '#ffffff' }
              }
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3
                  className={`font-extrabold mb-2.5 leading-snug${ind.dark ? ' text-white' : ''}`}
                  style={ind.dark ? {} : { color: '#0A1628' }}
                >
                  {ind.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: ind.dark ? 'rgba(255,255,255,.5)' : '#64748B',
                  }}
                >
                  {ind.desc}
                </p>
                <ul className="flex flex-col gap-2 mb-5 flex-1">
                  {ind.uses.map((u) => (
                    <li
                      key={u}
                      className="text-xs flex items-start gap-2 leading-snug"
                      style={{
                        color: ind.dark ? 'rgba(255,255,255,.65)' : '#334155',
                      }}
                    >
                      <span
                        className="font-bold shrink-0 mt-0.5"
                        style={{ color: ind.dark ? '#00C896' : '#00B4A6' }}
                      >
                        →
                      </span>
                      {u}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {ind.tags.map((t) => (
                    <Badge
                      key={t}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: ind.dark
                          ? 'rgba(0,200,150,.12)'
                          : 'rgba(0,180,166,.08)',
                        color: ind.dark ? '#00C896' : '#00B4A6',
                        border: 'none',
                      }}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section
      className="py-24 text-center relative overflow-hidden"
      style={{ background: '#0A1628' }}
      id="contact"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 900,
          height: 500,
          background:
            'radial-gradient(ellipse, rgba(0,200,150,.12) 0%, transparent 65%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2
          className="font-black text-white mb-5 leading-tight"
          style={{ fontSize: 'clamp(28px,5vw,52px)', letterSpacing: '-0.02em' }}
        >
          Ready to move beyond
          <br />
          <em
            className="not-italic"
            style={{
              background: 'linear-gradient(135deg,#00C896,#1A56DB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            the proof of concept?
          </em>
        </h2>
        <p
          className="max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,.55)', fontSize: 17 }}
        >
          We work with a small number of enterprise clients each year. If you
          have a clear AI mandate and a production problem to solve, let's talk.
        </p>
        <Button
          asChild
          className="font-bold text-white text-base px-10 py-4"
          style={{
            background: 'linear-gradient(135deg,#00C896,#1A56DB)',
            border: 'none',
          }}
        >
          <a href="mailto:hello@tuningresearch.com">
            Schedule a Discovery Session →
          </a>
        </Button>
        <p className="mt-5 text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>
          We start every engagement with a structured Discovery — workflow
          mapping, data audit, and ROI modelling. No commitment beyond the first
          session.
        </p>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10" style={{ background: '#060D1A' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="flex items-center justify-between flex-wrap gap-5 pb-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,.06)' }}
        >
          <span
            className="text-lg font-black"
            style={{ color: 'rgba(255,255,255,.6)' }}
          >
            Tuning<span style={{ color: '#00B4A6' }}>Research</span>
          </span>
          <ul className="flex gap-6 list-none flex-wrap">
            {[
              'Capabilities',
              'Case Studies',
              'Methodology',
              'Team',
              'Contact',
            ].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-xs no-underline transition-colors hover:text-teal-400"
                  style={{ color: 'rgba(255,255,255,.35)' }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p
          className="text-center text-xs mt-5"
          style={{ color: 'rgba(255,255,255,.2)' }}
        >
          © 2026 Tuning Research. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function TuningResearchLanding() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <PainStrip />
      <Bridge />
      <Capabilities />
      <CaseStudies />
      <Methodology />
      <Founders />
      <Industries />
      <CTA />
      <Footer />
    </div>
  )
}
