import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Brain, FileText, Zap, Lock , Hammer, Triangle, Rocket, Telescope , Video} from "lucide-react"

const Hero = () => {

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Workflow mapping, data audit, ROI modelling — identifying where AI can create the most measurable business impact.",
    },
    {
      number: "02",
      title: "Architect",
      description:
        "System design tailored to your infrastructure, security requirements, and integration architecture.",
    },
    {
      number: "03",
      title: "Deploy",
      description:
        "Production rollout with full governance, compliance controls, and integration into live operational systems.",
    },
    {
      number: "04",
      title: "Optimise",
      description:
        "Continuous accuracy tuning, cost optimisation, and expansion — AI systems that improve after go-live, not degrade.",
    },
  ]

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#061a2b] to-[#02111f] text-white pt-24 pb-40">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-teal-400 tracking-widest text-sm mb-4">
              ENTERPRISE AI — PRODUCTION GRADE
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Most enterprise AI
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
                never leaves the
              </span>
              pilot.
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Enterprises invest in AI and get dashboards. We build AI that
              integrates into operations, replaces manual complexity, and
              delivers measurable outcomes — in production, not in demos.
            </p>

            <div className="flex gap-4 mb-10">
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3">
                Schedule a Discovery →
              </Button>

              <Button variant="outline" className="border-gray-500 text-white">
                See What We Build
              </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-bold text-white">40–70%</h3>
                <p className="text-sm">Reduction in manual processing time</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Q1–Q2</h3>
                <p className="text-sm">Time to measurable ROI</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">60–80%</h3>
                <p className="text-sm">AI infrastructure cost savings</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">

            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex items-center gap-4 p-6">
                <Brain className="text-green-400" />
                <div>
                  <h4 className="font-semibold">Knowledge & Compliance AI</h4>
                  <p className="text-sm text-gray-400">
                    Grounded in your data — zero hallucination risk
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex items-center gap-4 p-6">
                <FileText className="text-blue-400" />
                <div>
                  <h4 className="font-semibold">Document Intelligence</h4>
                  <p className="text-sm text-gray-400">
                    Contracts, filings, reports — structured at scale
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex items-center gap-4 p-6">
                <Zap className="text-yellow-400" />
                <div>
                  <h4 className="font-semibold">Autonomous Workflow Agents</h4>
                  <p className="text-sm text-gray-400">
                    End-to-end operations without manual loops
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="flex items-center gap-4 p-6">
                <Lock className="text-cyan-400" />
                <div>
                  <h4 className="font-semibold">Private AI Deployment</h4>
                  <p className="text-sm text-gray-400">
                    Your models, your infrastructure, your data
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* PROBLEM SECTION */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6 text-center">

          <p className="text-teal-500 tracking-widest text-sm mb-4">
            THE PROBLEM
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Where Enterprise AI Programmes Break Down
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 mb-16">
            The technology works. The implementations don't. Three structural
            failures account for the majority of enterprise AI spending that
            produces no business value.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <Card className="text-left shadow-md border-t-4 border-green-400">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">
                  Data That's Rich but Unreachable
                </h3>
                <p className="text-gray-500 text-sm">
                  Decades of institutional knowledge lives in PDFs, contracts,
                  emails, and legacy systems — invisible to decision-makers and
                  inaccessible to AI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left shadow-md border-t-4 border-blue-400">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">
                  Pilots That Can't Survive the Enterprise
                </h3>
                <p className="text-gray-500 text-sm">
                  Proof-of-concepts work in controlled conditions and fail in
                  production due to compliance constraints, integration
                  requirements, and governance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left shadow-md border-t-4 border-indigo-400">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">
                  AI Spend Without a Business Case
                </h3>
                <p className="text-gray-500 text-sm">
                  Organisations buy models and platforms but cannot connect
                  them to measurable business outcomes.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <section className="bg-[#0b2447] text-white py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="tracking-widest text-sm text-gray-400 mb-4">
            WHERE WE COME IN
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            We build the bridge
            <br />
            between AI potential and
            <br />
            enterprise reality.
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"></div>

          <p className="text-gray-300 mb-10 max-w-xl">
            Tuning Research was built for exactly this gap. We are not a model
            vendor, not a platform play, and not a demo factory. We are an
            enterprise AI consultancy that owns the full journey from discovery
            to live production — with explicit accountability for outcomes.
          </p>

          <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3">
            Talk to Us →
          </Button>
        </div>


        {/* RIGHT SIDE CARDS */}
        <div className="space-y-6">

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="flex gap-4 p-6">
              <Hammer className="text-green-400 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">
                  Built for Enterprise Complexity
                </h4>
                <p className="text-gray-400 text-sm">
                  Every system we design accounts for governance requirements,
                  integration architecture, compliance constraints, and
                  security posture — not bolted on afterward.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="flex gap-4 p-6">
              <Triangle className="text-blue-400 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">
                  ROI-First Methodology
                </h4>
                <p className="text-gray-400 text-sm">
                  Every engagement begins with a business outcome thesis and
                  measurable ROI target. Architecture decisions flow from the
                  business case.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="flex gap-4 p-6">
              <Rocket className="text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">
                  Production, Not Prototypes
                </h4>
                <p className="text-gray-400 text-sm">
                  We take full ownership from pilot to enterprise rollout —
                  engineering, deployment, tuning, and optimisation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur">
            <CardContent className="flex gap-4 p-6">
              <Telescope className="text-cyan-400 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">
                  Deep Technical Specialisation
                </h4>
                <p className="text-gray-400 text-sm">
                  RAG architecture, agentic systems, private LLM deployment,
                  document intelligence — these are our core disciplines.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
      </section>

      <section className="w-full py-20 bg-slate-50" id="capabilities">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3">
            WHAT WE BUILD
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Five Core AI Capabilities for <br /> Enterprise Operations
          </h2>

          <p className="text-slate-500 mt-6 text-base md:text-lg">
            Each capability targets a distinct category of enterprise operational
            complexity — and can be deployed independently or combined into a
            full transformation programme.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <Card className="rounded-2xl border bg-slate-50 border-slate-200 shadow-sm">
            <CardContent className="p-8">

              <p className="text-sm text-slate-400 mb-6 font-medium">01</p>

              <div className="flex items-start gap-4">

                <div className="bg-slate-900 text-white p-3 rounded-lg">
                  <Brain size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Retrieval-Augmented Generation (RAG)
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-5">
                    Enterprise AI that reasons over your internal knowledge —
                    policies, contracts, research, operational data — and
                    responds with precision, citations, and zero hallucination
                    risk. From compliance assistants to research automation to
                    customer-facing knowledge bots, RAG grounds AI firmly in
                    what your organisation actually knows.
                  </p>

                  <Badge
                    variant="secondary"
                    className="bg-emerald-50 text-emerald-700 rounded-full px-4 py-1"
                  >
                    Zero hallucination · Citation-backed · Grounded in your data
                  </Badge>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-2xl border bg-slate-50 border-slate-200 shadow-sm">
            <CardContent className="p-8">

              <p className="text-sm text-slate-400 mb-6 font-medium">02</p>

              <div className="flex items-start gap-4">

                <div className="bg-slate-900 text-white p-3 rounded-lg">
                  <FileText size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Document Intelligence
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-5">
                    Structured extraction, classification, and analysis of
                    unstructured enterprise content — contracts, filings,
                    invoices, reports — converted into decision-ready
                    intelligence at scale.
                  </p>

                  <Badge
                    variant="secondary"
                    className="bg-emerald-50 text-emerald-700 rounded-full px-4 py-1"
                  >
                    Unstructured → structured · Auditable
                  </Badge>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>


        <div className="grid md:grid-cols-3 mt-8 gap-8">

          {/* Card 03 */}
          <Card className="rounded-2xl border bg-slate-50 border-slate-200 shadow-sm">
            <CardContent className="p-8">

              <p className="text-sm text-slate-400 mb-6 font-medium">03</p>

              <div className="flex flex-col gap-4">

                <div className="bg-slate-900 text-white p-3 w-fit rounded-lg">
                  <Zap size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Agentic AI & Autonomous Workflows
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Multi-agent systems that plan, execute, and optimise complex
                  operational workflows end-to-end — removing manual
                  bottlenecks from research, procurement, compliance, and
                  operations cycles.
                </p>

                <Badge className="w-fit rounded-full bg-emerald-50 text-emerald-700 px-4 py-1">
                  End-to-end automation · Decision agents
                </Badge>

              </div>
            </CardContent>
          </Card>

          {/* Card 04 (Dark Card) */}
          <Card className="rounded-2xl bg-[#0f2747] text-white border-none shadow-sm">
            <CardContent className="p-5">

              <p className="text-sm text-slate-300 mb-6 font-medium">04</p>

              <div className="flex flex-col gap-4">

                <div className="bg-slate-700/40 text-white p-3 w-fit rounded-lg">
                  <Lock size={20} />
                </div>

                <h3 className="text-xl font-semibold">
                  Private LLM Deployment
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Fine-tuned, self-hosted models within your own infrastructure
                  — built for enterprises where data sovereignty, regulatory
                  compliance, and cost predictability are non-negotiable.
                  60–80% reduction in inference costs versus frontier APIs.
                </p>

                <Badge className="w-fit  rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-1">
                  Full sovereignty · 60–80% cost savings · Zero data exposure
                </Badge>

              </div>
            </CardContent>
          </Card>

          {/* Card 05 */}
          <Card className="rounded-2xl border bg-slate-50 border-slate-200 shadow-sm">
            <CardContent className="p-8">

              <p className="text-sm text-slate-400 mb-6 font-medium">05</p>

              <div className="flex flex-col gap-4">

                <div className="bg-slate-900 text-white p-3 w-fit rounded-lg">
                  <Video size={20} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Video-Based AI Intelligence
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  Enterprises generate vast volumes of video data across
                  operations, facilities, and customer interactions — most of
                  it unanalysed. We convert live and recorded video streams
                  into structured operational intelligence.
                </p>

                <Badge className="w-fit rounded-full bg-emerald-50 text-emerald-700 px-4 py-1">
                  Operational monitoring · Safety compliance · Multimodal AI
                </Badge>

              </div>
            </CardContent>
          </Card>

        </div>

      </div>

       
    </section>

    <section className="w-full bg-[#F6F8FB] py-24" id="case-studies">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#13233a]">
            AI That Moved the Business Needle
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            How Tuning Research has taken enterprise AI from theoretical to
            operational across complex environments.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-[24px] overflow-hidden shadow-sm border border-slate-200 bg-white">

          <div className="grid lg:grid-cols-[40%_60%]">

            {/* LEFT PANEL */}
            <div className="bg-[#112a4d] text-white p-12 flex flex-col justify-between">

              <div>
                <p className="text-emerald-400 tracking-[0.2em] text-xs mb-6">
                  MANUFACTURING & INDUSTRIAL
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  Turning a costly, low-adoption ERP into an AI-native
                  operational nerve centre
                </h3>
              </div>

              <div>
                <p className="text-6xl font-bold text-emerald-400">5</p>

                <p className="text-slate-300 mt-2 max-w-xs">
                  ERP modules fully automated and accessible via plain-language AI
                </p>
              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="bg-[#F3F6F8] p-12">

              <div className="mb-10">
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  THE OPERATIONAL PROBLEM
                </p>

                <p className="text-slate-600 leading-relaxed">
                  An industrial manufacturer had deployed ERPNext across its
                  core business functions — CRM, Sales, Inventory, Accounting,
                  and HR — but adoption was critically low. Key operations were
                  still being managed manually. Data was fragmented across silos
                  with no real-time visibility, and the complex interface meant
                  most employees simply avoided the system altogether.
                </p>
              </div>

              <div>
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  WHAT WE DELIVERED
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  A RAG-powered natural language interface deployed across all
                  ERP modules, enabling any employee to query, interact with,
                  and act on operational data using plain language — no training
                  required. An agentic AI layer automated repetitive workflows
                  end-to-end while escalating only when human judgment was needed.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#222] text-white text-xs px-3 py-1 rounded-full">
                    RAG
                  </span>

                  <span className="bg-[#222] text-white text-xs px-3 py-1 rounded-full">
                    Agentic AI Workflows
                  </span>

                  <span className="bg-[#222] text-white text-xs px-3 py-1 rounded-full">
                    ERP Integration
                  </span>

                  <span className="bg-[#222] text-white text-xs px-3 py-1 rounded-full">
                    Conversational Interface
                  </span>
                </div>
              </div>

            </div>

          </div>
          

        </div>


      <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-sm bg-white mt-8">

          <div className="grid lg:grid-cols-[60%_40%]">

            {/* LEFT CONTENT PANEL */}
            <div className="bg-[#F3F6F8] p-12">

              <div className="mb-10">
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  THE OPERATIONAL PROBLEM
                </p>

                <p className="text-slate-600 leading-relaxed">
                  A capital markets exchange required its review teams to compare IPO
                  prospectus documents — DRHP to RHP — running 500+ pages each.
                  Reviewers had approximately two days to complete the analysis,
                  creating significant risk of missing material regulatory changes.
                  There was no structured system to track additions, deletions, or
                  modifications across versions.
                </p>
              </div>

              <div>
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  WHAT WE DELIVERED
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  A Document Intelligence platform that ingested scanned and
                  unstructured IPO filings, performed line-by-line comparison across
                  DRHP, RHP, and addendums, and auto-classified every detected change
                  by severity — Low, Medium, or High. A RAG-powered regulatory risk
                  detection layer cross-referenced all changes against the SEBI
                  knowledge base.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Document Intelligence
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Change Classification
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    RAG — Regulatory Risk
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Audit-Ready Output
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT DARK PANEL */}
            <div className="bg-[#112a4d] text-white p-12 flex flex-col justify-between">

              <div>
                <p className="text-emerald-400 tracking-[0.2em] text-xs mb-6">
                  BFSI & CAPITAL MARKETS
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  Compressing multi-day IPO document review cycles to under
                  four hours
                </h3>
              </div>

              <div>
                <p className="text-6xl font-bold text-emerald-400">~4 hrs</p>

                <p className="text-slate-300 mt-2 max-w-xs">
                  Full DRHP–RHP review and regulatory change classification,
                  down from 2–3 days
                </p>
              </div>

            </div>

          </div>

      </div>

         <div className="rounded-[24px] overflow-hidden border border-slate-200 shadow-sm mt-8">

          <div className="grid lg:grid-cols-[40%_60%]">

            {/* LEFT DARK PANEL */}
            <div className="bg-[#112a4d] text-white p-12 flex flex-col justify-between">

              <div>
                <p className="text-emerald-400 tracking-[0.2em] text-xs mb-6">
                  ENERGY & INFRASTRUCTURE
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  Replacing hours of manual Excel analysis with instant
                  natural-language portfolio intelligence
                </h3>
              </div>

              <div>
                <p className="text-6xl font-bold text-emerald-400">70%</p>

                <p className="text-slate-300 mt-2 max-w-xs">
                  Reduction in manual effort across Excel-based portfolio workflows
                </p>
              </div>

            </div>

            {/* RIGHT CONTENT PANEL */}
            <div className="bg-[#F3F6F8] p-12">

              <div className="mb-10">
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  THE OPERATIONAL PROBLEM
                </p>

                <p className="text-slate-600 leading-relaxed">
                  A large renewable energy developer managed a complex portfolio
                  of solar, wind, and hybrid assets — but performance data was
                  scattered across hundreds of Excel files, vendor reports, and
                  legacy monitoring systems. Asset managers spent hours each week
                  manually compiling KPIs and financial metrics across plant
                  entities.
                </p>
              </div>

              <div>
                <p className="text-emerald-600 text-xs tracking-[0.2em] font-semibold mb-4">
                  WHAT WE DELIVERED
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  A RAG-powered financial intelligence layer over structured
                  data migrated from standardised Excel models into a governed
                  database — enabling natural-language queries that return
                  source-backed, traceable answers and multi-entity comparative
                  analysis across the portfolio.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    RAG — Financial Intelligence
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Agentic Orchestration
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Document Intelligence
                  </span>

                  <span className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full">
                    Report Automation
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <section className="w-full bg-[#F6F8FB] py-24" id="how-we-work">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.25em] text-emerald-600 font-semibold mb-3">
            HOW WE WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#13233a]">
            How We Take AI to Production
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            A structured four-phase methodology that takes AI from business case
            to production — with full accountability at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 via-blue-500 to-blue-600"></div>

          <div className="grid md:grid-cols-4 gap-12 text-center relative">

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">

                {/* Circle */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full text-white font-bold text-xl
                bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-[#13233a]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-500 max-w-[220px]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>

        <section className="w-full bg-[#F6F8FB] py-24" id="team">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-emerald-600 font-semibold mb-3">
            THE TEAM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#13233a]">
            Built by People Who Have Sat on Both Sides
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Tuning Research was founded by operators who have seen enterprise AI
            fail from the inside — and built the firm to solve for those exact
            failure modes.
          </p>
        </div>

        {/* Cards */}
  {/* Cards */}
<div className="grid md:grid-cols-2 gap-8">

  {/* Card 1 */}
  <Card className="p-12 rounded-[28px] border border-slate-200 shadow-sm bg-white">
    <div className="flex gap-10 items-start">

      {/* Avatar */}
      <div className="w-28 h-28 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-teal-500 to-blue-600 text-white text-3xl font-bold">
        SA
      </div>

      {/* Content */}
      <div className="flex-1">

        <h3 className="text-2xl font-bold text-[#0f223d]">
          Sonam Agarwal
        </h3>

        <p className="text-emerald-600 font-semibold mt-2">
          Co-Founder & CEO · Enterprise Strategy
        </p>

        <p className="text-slate-500 mt-6 leading-relaxed">
          A two-time entrepreneur with deep experience advising large
          enterprises on transformation. Former Partner at EY, where she
          led digital and AI advisory engagements across financial
          services, manufacturing, and professional services.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            2× Founder
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            Ex-EY Partner
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            Enterprise Advisory
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            AI Transformation
          </Badge>

        </div>

      </div>

    </div>
  </Card>


  {/* Card 2 */}
  <Card className="p-12 rounded-[28px] border border-slate-200 shadow-sm bg-white">
    <div className="flex gap-10 items-start">

      {/* Avatar */}
      <div className="w-28 h-28 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-teal-500 to-blue-600 text-white text-3xl font-bold">
        SJ
      </div>

      {/* Content */}
      <div className="flex-1">

        <h3 className="text-2xl font-bold text-[#0f223d]">
          Sabhay Jain
        </h3>

        <p className="text-emerald-600 font-semibold mt-2">
          Co-Founder & CTO · AI/ML Engineering
        </p>

        <p className="text-slate-500 mt-6 leading-relaxed">
          A deep technologist from IIT Kanpur with extensive research
          and applied experience in machine learning and AI systems.
          Sabhay has spent his career building AI at the intersection
          of research and production.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            IIT Kanpur
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            AI / ML
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            RAG Architecture
          </Badge>

          <Badge variant="secondary" className="px-4 py-1 rounded-full">
            Applied Research
          </Badge>

        </div>

      </div>

    </div>
  </Card>

</div>

      </div>
    </section>

      <section className="w-full bg-[#F6F8FB] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-emerald-600 font-semibold mb-3">
            WHERE WE WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#13233a]">
            Industries Where AI Complexity Is Highest
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We focus on sectors where data is dense, compliance is non-negotiable,
            and the cost of getting AI wrong is significant.
          </p>
        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Manufacturing Card */}
          <Card className="p-10 rounded-[24px] border border-slate-200 shadow-sm bg-white">

            <div className="text-3xl mb-4">⚙️</div>

            <h3 className="text-xl font-semibold text-[#13233a] mb-3">
              Manufacturing & Industrial
            </h3>

            <p className="text-slate-500 leading-relaxed mb-6">
              Production environments generate continuous operational data —
              from shop floors and supply chains to quality control and ERP
              systems. AI transforms how manufacturers monitor, automate,
              and optimise these complex multi-site operations.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 text-slate-600 mb-6">

              <li className="flex gap-2">
                <span className="text-emerald-500">→</span>
                Real-time safety compliance and PPE monitoring via Video AI
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-500">→</span>
                Predictive maintenance through anomaly detection
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-500">→</span>
                Natural-language access to ERP, MES, and production data
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-500">→</span>
                Automated quality inspection and defect classification
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-500">→</span>
                SOP adherence tracking and incident report automation
              </li>

            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Video AI</Badge>
              <Badge variant="outline">RAG</Badge>
              <Badge variant="outline">Agentic Workflows</Badge>
              <Badge variant="outline">Document Intelligence</Badge>
            </div>

          </Card>



          {/* BFSI Card */}
          <Card className="p-10 rounded-[24px] border border-slate-200 shadow-sm bg-[#0f2747] text-white">

            <div className="text-3xl mb-4">🏦</div>

            <h3 className="text-xl font-semibold mb-3">
              BFSI
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Financial institutions manage massive document volumes,
              regulatory obligations, and risk decisions simultaneously.
              AI compresses review cycles and strengthens compliance.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 text-slate-300 mb-6">

              <li className="flex gap-2">
                <span className="text-emerald-400">→</span>
                Credit underwriting and loan document automation
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-400">→</span>
                IPO and regulatory prospectus review
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-400">→</span>
                Merchant fraud detection and risk scoring
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-400">→</span>
                Policy and compliance knowledge management
              </li>

              <li className="flex gap-2">
                <span className="text-emerald-400">→</span>
                Multi-source financial intelligence synthesis
              </li>

            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-slate-800 text-white">Document Intelligence</Badge>
              <Badge className="bg-slate-800 text-white">RAG</Badge>
              <Badge className="bg-slate-800 text-white">Agentic AI</Badge>
              <Badge className="bg-slate-800 text-white">Private LLM</Badge>
            </div>

          </Card>

        </div>

      </div>
    </section>

     <section className="w-full py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <Card className="p-8 rounded-[22px] border border-slate-200 bg-white shadow-sm flex flex-col">

            <div className="text-2xl mb-4">💊</div>

            <h3 className="font-semibold text-lg text-[#13233a] mb-3">
              Pharma & Healthcare
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Drug development, clinical operations, and regulatory submissions
              produce some of the most complex documentation in any industry.
              AI brings precision, traceability, and speed to workflows where
              errors carry clinical consequences.
            </p>

            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Clinical trial document review</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Regulatory submission preparation</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Medical literature synthesis</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Adverse event detection</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>QA documentation automation</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              <Badge variant="default">Document Intelligence</Badge>
              <Badge variant="default">RAG</Badge>
              <Badge variant="default">Private LLM</Badge>
            </div>

          </Card>


          {/* Card 2 (Highlighted) */}
          <Card className="p-8 rounded-[22px] border border-emerald-500 bg-white shadow-sm flex flex-col">

            <div className="text-2xl mb-4">⚡</div>

            <h3 className="font-semibold text-lg text-[#13233a] mb-3">
              Energy, Oil & Gas
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Asset-intensive portfolios across distributed sites demand
              continuous performance monitoring, compliance reporting, and
              financial visibility — without analyst bottlenecks.
            </p>

            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Portfolio performance monitoring</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Natural-language KPI querying</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Automated ESG reporting</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Asset inspection intelligence</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Vendor contract intelligence</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              <Badge variant="default">RAG</Badge>
              <Badge variant="default">Agentic Orchestration</Badge>
              <Badge variant="default">Video AI</Badge>
            </div>

          </Card>


          {/* Card 3 */}
          <Card className="p-8 rounded-[22px] border border-slate-200 bg-white shadow-sm flex flex-col">

            <div className="text-2xl mb-4">🛍️</div>

            <h3 className="font-semibold text-lg text-[#13233a] mb-3">
              Retail & Consumer Products
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The pace of retail across stores, supply chains, and export
              operations demands real-time intelligence and fast automation.
            </p>

            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li className="flex gap-2"><span className="text-emerald-500">→</span>In-store compliance monitoring</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Demand forecasting</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Export-import automation</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Vendor contract intelligence</li>
              <li className="flex gap-2"><span className="text-emerald-500">→</span>Customer sentiment analysis</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              <Badge variant="default">Video AI</Badge>
              <Badge variant="default">RAG</Badge>
              <Badge variant="default">Document Intelligence</Badge>
            </div>

          </Card>

        </div>

      </div>
    </section>

    <section className="w-full bg-[#071a2d]  text-white" id="contact">

      {/* CTA */}
      <div className="max-w-5xl   mx-auto px-6 py-28 text-center">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to move beyond
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            the proof of concept?
          </span>
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          We work with a small number of enterprise clients each year. If you
          have a clear AI mandate and a production problem to solve, let's talk.
        </p>

        <div className="mt-10">
          <Button className="px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90">
            Schedule a Discovery Session →
          </Button>
        </div>

        <p className="text-slate-500 mt-8 max-w-2xl mx-auto text-sm">
          We start every engagement with a structured Discovery — workflow
          mapping, data audit, and ROI modelling. No commitment beyond the
          first session.
        </p>

      </div>


      {/* Footer */}
      <div className="border-t bg-gray-950 border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <span className="text-lg font-bold">TR</span>
            <span className="text-sm tracking-wide">TUNING RESEARCH</span>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a className="hover:text-white" href="#">Capabilities</a>
            <a className="hover:text-white" href="#">Case Studies</a>
            <a className="hover:text-white" href="#">Methodology</a>
            <a className="hover:text-white" href="#">Team</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-500 pb-6">
          © 2026 Tuning Research. All rights reserved.
        </div>

      </div>

    </section>

    </div>
  )
}

export default Hero