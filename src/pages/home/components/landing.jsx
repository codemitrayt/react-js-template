import { useState } from 'react'

const LOGO_SRC = '/logo.png'

export default function TuningResearch() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        background: '#fff',
        color: '#334155',
        lineHeight: '1.65',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --ink: #0A1628; --navy: #0F1F3D; --navy2: #1a2f55;
          --teal: #00B4A6; --green: #00C896; --blue: #1A56DB;
          --sky: #93C5FD; --slate: #334155; --muted: #64748B;
          --light: #F8FAFF; --border: #E2E8F0; --white: #FFFFFF;
          --grad: linear-gradient(135deg,#00C896 0%,#1A56DB 100%);
          --grad-r: linear-gradient(135deg,#1A56DB 0%,#00C896 100%);
        }
        html { scroll-behavior: smooth; }
        .tr-container { max-width: 1160px; margin: 0 auto; padding: 0 40px; }
        .tr-gt { background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .tr-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 30px; border-radius: 8px; font-weight: 700; font-size: 15px; cursor: pointer; text-decoration: none; transition: all .22s ease; border: none; letter-spacing: -.01em; }
        .tr-btn-primary { background: var(--grad); color: #fff; box-shadow: 0 4px 20px rgba(0,180,166,.28); }
        .tr-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,180,166,.4); }
        .tr-btn-ghost { background: transparent; color: rgba(255,255,255,.8); border: 1.5px solid rgba(255,255,255,.28); }
        .tr-btn-ghost:hover { background: rgba(255,255,255,.08); color: #fff; }
        .tr-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--teal); display: inline-block; margin-bottom: 14px; }
        .tr-eyebrow-light { color: rgba(255,255,255,.45); }
        /* NAV */
        .tr-nav { position: sticky; top: 0; z-index: 200; background: rgba(255,255,255,.96); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
        .tr-nav-row { display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .tr-logo img { height: 38px; width: auto; display: block; }
        .tr-nav-links { display: flex; gap: 30px; list-style: none; }
        .tr-nav-links a { font-size: 14px; font-weight: 500; color: var(--slate); text-decoration: none; transition: color .2s; }
        .tr-nav-links a:hover { color: var(--teal); }
        .tr-nav-cta .tr-btn { padding: 9px 22px; font-size: 14px; }
        /* HERO */
        .tr-hero { background: var(--ink); padding: 96px 0 0; position: relative; overflow: hidden; min-height: 92vh; display: flex; flex-direction: column; }
        .tr-hero::before { content:''; position:absolute; top:-180px; right:-120px; width:640px; height:640px; border-radius:50%; background:radial-gradient(circle,rgba(0,200,150,.14) 0%,transparent 65%); pointer-events:none; }
        .tr-hero::after { content:''; position:absolute; bottom:80px; left:-80px; width:500px; height:500px; border-radius:50%; background:radial-gradient(circle,rgba(26,86,219,.18) 0%,transparent 65%); pointer-events:none; }
        .tr-hero-body { flex:1; position:relative; z-index:2; display:grid; grid-template-columns:1.1fr .9fr; gap:60px; align-items:center; padding-bottom:80px; }
        .tr-hero-kicker { font-size:12px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--teal); margin-bottom:22px; display:flex; align-items:center; gap:10px; }
        .tr-hero-kicker::before { content:''; display:block; width:28px; height:2px; background:var(--teal); }
        .tr-hero h1 { font-size:clamp(36px,5vw,60px); font-weight:900; line-height:1.06; color:#fff; margin-bottom:26px; letter-spacing:-.03em; }
        .tr-hero h1 em { font-style:normal; background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .tr-hero-sub { font-size:17px; color:rgba(255,255,255,.62); line-height:1.75; margin-bottom:38px; max-width:460px; }
        .tr-hero-actions { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:52px; }
        .tr-hero-proof { display:flex; gap:28px; flex-wrap:wrap; padding-top:28px; border-top:1px solid rgba(255,255,255,.09); }
        .tr-proof-stat strong { display:block; font-size:18px; font-weight:800; color:rgba(255,255,255,.9); line-height:1; margin-bottom:4px; }
        .tr-proof-stat span { font-size:12px; color:rgba(255,255,255,.42); }
        .tr-hero-visual { position:relative; display:flex; flex-direction:column; gap:14px; padding:10px 0; }
        .tr-cap-pill { background:rgba(255,255,255,.055); border:1px solid rgba(255,255,255,.09); border-radius:14px; padding:18px 22px; display:flex; align-items:center; gap:14px; backdrop-filter:blur(8px); transition:all .25s; cursor:default; }
        .tr-cap-pill:hover { background:rgba(255,255,255,.10); border-color:rgba(0,200,150,.35); transform:translateX(6px); }
        .tr-cap-pill-icon { width:42px; height:42px; border-radius:10px; background:var(--grad); display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .tr-cap-pill h4 { font-size:14px; font-weight:700; color:#fff; margin-bottom:2px; }
        .tr-cap-pill p { font-size:12px; color:rgba(255,255,255,.45); }
        .tr-hero-wave { position:relative; z-index:2; margin-top:auto; line-height:0; display:block; }
        .tr-hero-wave svg { display:block; }
        /* PAIN */
        .tr-pain-strip { background:#fff; padding:80px 0 60px; position:relative; }
        .tr-pain-strip .tr-eyebrow { display:block; text-align:center; }
        .tr-pain-intro { text-align:center; margin-bottom:56px; }
        .tr-pain-intro h2 { font-size:clamp(26px,4vw,44px); font-weight:900; color:var(--navy); line-height:1.15; letter-spacing:-.02em; margin-bottom:16px; }
        .tr-pain-intro p { font-size:17px; color:var(--muted); max-width:600px; margin:0 auto; }
        .tr-pain-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
        .tr-pain-card { padding:36px 30px; border-radius:20px; position:relative; overflow:hidden; background:var(--light); }
        .tr-pain-card::before { content:''; position:absolute; left:0; top:0; width:100%; height:4px; background:var(--grad); }
        .tr-pain-num { font-size:68px; font-weight:900; line-height:1; color:rgba(0,0,0,.05); position:absolute; top:20px; right:22px; font-variant-numeric:tabular-nums; }
        .tr-pain-card h3 { font-size:19px; font-weight:800; color:var(--navy); margin-bottom:12px; line-height:1.2; }
        .tr-pain-card p { font-size:14px; color:var(--muted); line-height:1.7; }
        /* BRIDGE */
        .tr-bridge { background:var(--navy); padding:80px 0; position:relative; overflow:hidden; }
        .tr-bridge::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,200,150,.09) 0%, transparent 70%); }
        .tr-bridge-inner { position:relative; z-index:2; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .tr-bridge-left h2 { font-size:clamp(26px,3.5vw,40px); font-weight:900; color:#fff; line-height:1.15; letter-spacing:-.02em; margin-bottom:22px; }
        .tr-bridge-left p { font-size:16px; color:rgba(255,255,255,.6); line-height:1.75; margin-bottom:28px; }
        .tr-bridge-divider { width:48px; height:3px; background:var(--grad); border-radius:2px; margin-bottom:28px; }
        .tr-bridge-right { display:flex; flex-direction:column; gap:20px; }
        .tr-bridge-item { display:flex; gap:16px; align-items:flex-start; padding:20px 24px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); border-radius:14px; }
        .tr-bridge-icon { width:40px; height:40px; flex-shrink:0; background:var(--grad); border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:17px; }
        .tr-bridge-item h4 { font-size:15px; font-weight:700; color:#fff; margin-bottom:4px; }
        .tr-bridge-item p { font-size:13px; color:rgba(255,255,255,.5); line-height:1.6; }
        .tr-wave-down { line-height:0; }
        .tr-wave-down svg { display:block; }
        /* CAPABILITIES */
        .tr-capabilities { background:#fff; padding:96px 0 80px; }
        .tr-caps-header { max-width:620px; margin:0 auto 64px; text-align:center; }
        .tr-caps-header h2 { font-size:clamp(26px,4vw,42px); font-weight:900; color:var(--navy); letter-spacing:-.02em; margin-bottom:14px; }
        .tr-caps-header p { font-size:16px; color:var(--muted); }
        .tr-caps-grid { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto; gap:22px; }
        .tr-cap-card { padding:34px 30px; border-radius:18px; border:1px solid var(--border); transition:all .25s ease; position:relative; overflow:hidden; }
        .tr-cap-card:hover { border-color:transparent; box-shadow:0 20px 50px rgba(0,180,166,.12); transform:translateY(-4px); }
        .tr-cap-card.wide { grid-column:span 2; }
        .tr-cap-card.dark { background:var(--navy); border-color:transparent; }
        .tr-cap-n { font-size:11px; font-weight:700; letter-spacing:2px; color:#CBD5E1; margin-bottom:14px; }
        .tr-cap-ico { width:50px; height:50px; border-radius:12px; background:var(--navy); display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:18px; transition:background .25s; }
        .tr-cap-card:not(.dark):hover .tr-cap-ico { background:var(--grad); }
        .tr-cap-card.dark .tr-cap-ico { background:rgba(255,255,255,.1); }
        .tr-cap-card h3 { font-size:18px; font-weight:800; color:var(--navy); margin-bottom:10px; line-height:1.2; }
        .tr-cap-card.dark h3 { color:#fff; }
        .tr-cap-card p { font-size:14px; color:var(--muted); line-height:1.68; }
        .tr-cap-card.dark p { color:rgba(255,255,255,.55); }
        .tr-cap-tag { display:inline-block; margin-top:18px; font-size:12px; font-weight:600; padding:6px 14px; border-radius:20px; background:rgba(0,180,166,.09); color:var(--teal); }
        .tr-cap-card.dark .tr-cap-tag { background:rgba(0,200,150,.12); color:var(--green); }
        /* STATS */
        .tr-stats-flow { background:var(--ink); padding:72px 0; position:relative; overflow:hidden; }
        .tr-stats-flow::before { content:''; position:absolute; top:-60px; left:50%; transform:translateX(-50%); width:800px; height:200px; border-radius:50%; background:radial-gradient(ellipse, rgba(0,200,150,.1) 0%, transparent 70%); }
        .tr-stats-inner { position:relative; z-index:2; display:flex; align-items:center; justify-content:center; gap:0; }
        .tr-stat-block { flex:1; text-align:center; padding:28px 16px; border-right:1px solid rgba(255,255,255,.07); }
        .tr-stat-block:last-child { border-right:none; }
        .tr-stat-n { font-size:clamp(36px,5vw,58px); font-weight:900; line-height:1; background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:8px; letter-spacing:-.02em; }
        .tr-stat-l { font-size:14px; font-weight:600; color:#fff; margin-bottom:6px; }
        .tr-stat-d { font-size:12px; color:rgba(255,255,255,.38); line-height:1.6; max-width:160px; margin:0 auto; }
        /* CASES */
        .tr-cases { background:#fff; padding:96px 0; }
        .tr-cases-header { text-align:center; margin-bottom:64px; }
        .tr-cases-header h2 { font-size:clamp(26px,4vw,42px); font-weight:900; color:var(--navy); letter-spacing:-.02em; margin-bottom:14px; }
        .tr-cases-header p { font-size:16px; color:var(--muted); max-width:560px; margin:0 auto; }
        .tr-cases-stack { display:flex; flex-direction:column; gap:40px; }
        .tr-case-card { display:grid; grid-template-columns:1fr 2fr; gap:0; border-radius:22px; overflow:hidden; border:1px solid var(--border); transition:box-shadow .25s; }
        .tr-case-card:hover { box-shadow:0 16px 48px rgba(0,0,0,.08); }
        .tr-case-card.even { direction:rtl; }
        .tr-case-card.even > * { direction:ltr; }
        .tr-case-left { padding:48px 40px; display:flex; flex-direction:column; justify-content:space-between; background:var(--navy); }
        .tr-case-sector { font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--teal); margin-bottom:16px; }
        .tr-case-title { font-size:22px; font-weight:800; color:#fff; line-height:1.25; margin-bottom:24px; }
        .tr-case-result { font-size:48px; font-weight:900; line-height:1; background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:6px; }
        .tr-case-result-label { font-size:13px; color:rgba(255,255,255,.5); }
        .tr-case-right { padding:48px; background:var(--light); display:flex; flex-direction:column; justify-content:space-between; }
        .tr-case-problem h4 { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:var(--teal); margin-bottom:10px; }
        .tr-case-problem p { font-size:15px; color:var(--slate); line-height:1.7; margin-bottom:28px; }
        .tr-case-solution h4 { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:var(--navy); margin-bottom:10px; }
        .tr-case-solution p { font-size:15px; color:var(--slate); line-height:1.7; }
        .tr-case-tags { display:flex; gap:8px; flex-wrap:wrap; margin-top:24px; }
        .tr-case-tag { font-size:12px; font-weight:600; padding:5px 12px; border-radius:20px; background:rgba(0,180,166,.09); color:var(--teal); }
        /* METHOD */
        .tr-method { background:var(--light); padding:96px 0; position:relative; overflow:hidden; }
        .tr-method::before { content:''; position:absolute; bottom:-80px; right:-80px; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(0,200,150,.07) 0%,transparent 70%); }
        .tr-method-header { text-align:center; margin-bottom:64px; }
        .tr-method-header h2 { font-size:clamp(26px,4vw,42px); font-weight:900; color:var(--navy); letter-spacing:-.02em; margin-bottom:14px; }
        .tr-method-header p { font-size:16px; color:var(--muted); max-width:540px; margin:0 auto; }
        .tr-method-flow { display:grid; grid-template-columns:repeat(4,1fr); gap:0; position:relative; max-width:960px; margin:0 auto; }
        .tr-method-flow::before { content:''; position:absolute; top:44px; left:calc(12.5% + 8px); right:calc(12.5% + 8px); height:2px; background:var(--grad); z-index:0; }
        .tr-method-step { text-align:center; padding:0 18px; position:relative; z-index:1; }
        .tr-m-num { width:88px; height:88px; border-radius:50%; background:var(--grad); display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:900; color:#fff; margin:0 auto 24px; box-shadow:0 6px 24px rgba(0,180,166,.32); position:relative; z-index:2; }
        .tr-method-step h3 { font-size:17px; font-weight:800; color:var(--navy); margin-bottom:10px; }
        .tr-method-step p { font-size:13px; color:var(--muted); line-height:1.65; }
        /* FOUNDERS */
        .tr-founders { background:#fff; padding:96px 0; }
        .tr-founders-header { text-align:center; margin-bottom:60px; }
        .tr-founders-header h2 { font-size:clamp(26px,4vw,42px); font-weight:900; color:var(--navy); letter-spacing:-.02em; margin-bottom:14px; }
        .tr-founders-header p { font-size:16px; color:var(--muted); max-width:520px; margin:0 auto; }
        .tr-founders-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; }
        .tr-founder-card { padding:44px 40px; border-radius:22px; border:1px solid var(--border); display:grid; grid-template-columns:auto 1fr; gap:28px; align-items:start; transition:box-shadow .25s, transform .25s; }
        .tr-founder-card:hover { box-shadow:0 16px 48px rgba(0,0,0,.08); transform:translateY(-3px); }
        .tr-founder-avatar { width:90px; height:90px; border-radius:50%; background:var(--grad); display:flex; align-items:center; justify-content:center; font-size:28px; font-weight:900; color:#fff; flex-shrink:0; letter-spacing:-.02em; box-shadow:0 6px 24px rgba(0,180,166,.3); }
        .tr-founder-name { font-size:22px; font-weight:800; color:var(--navy); margin-bottom:4px; }
        .tr-founder-role { font-size:13px; font-weight:600; color:var(--teal); margin-bottom:16px; }
        .tr-founder-bio { font-size:14px; color:var(--muted); line-height:1.72; margin-bottom:18px; }
        .tr-founder-tags { display:flex; gap:8px; flex-wrap:wrap; }
        .tr-f-tag { font-size:12px; font-weight:600; padding:5px 12px; border-radius:20px; background:var(--light); color:var(--slate); border:1px solid var(--border); }
        /* SECTORS */
        .tr-sectors { background:var(--light); padding:100px 0; }
        .tr-sectors-header { text-align:center; margin-bottom:56px; }
        .tr-sectors-header h2 { font-size:clamp(26px,4vw,38px); font-weight:900; color:var(--navy); letter-spacing:-.02em; margin-bottom:14px; }
        .tr-sectors-header p { font-size:15px; color:var(--muted); max-width:600px; margin:0 auto; }
        .tr-ind-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:20px; }
        .tr-ind-card { grid-column:span 2; background:var(--white); border:1px solid var(--border); border-radius:16px; padding:32px; transition:transform .22s, box-shadow .22s, border-color .22s; display:flex; flex-direction:column; }
        .tr-ind-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,.09); border-color:var(--teal); }
        .tr-ind-card.dark { background:var(--navy); border-color:transparent; }
        .tr-ind-card.dark:hover { border-color:var(--teal); }
        .tr-ind-card.wide { grid-column:span 3; }
        .tr-ind-ico { font-size:30px; margin-bottom:14px; line-height:1; }
        .tr-ind-card h3 { font-size:16px; font-weight:800; color:var(--ink); margin-bottom:10px; line-height:1.3; letter-spacing:-.01em; }
        .tr-ind-card.dark h3 { color:#fff; }
        .tr-ind-desc { font-size:13.5px; color:var(--muted); line-height:1.65; margin-bottom:20px; }
        .tr-ind-card.dark .tr-ind-desc { color:rgba(255,255,255,.5); }
        .tr-ind-uses { list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:22px; flex:1; }
        .tr-ind-uses li { font-size:13px; color:var(--slate); display:flex; align-items:flex-start; gap:9px; line-height:1.45; }
        .tr-ind-uses li::before { content:'→'; color:var(--teal); font-weight:700; flex-shrink:0; margin-top:1px; }
        .tr-ind-card.dark .tr-ind-uses li { color:rgba(255,255,255,.65); }
        .tr-ind-card.dark .tr-ind-uses li::before { color:var(--green); }
        .tr-ind-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:auto; padding-top:4px; }
        .tr-ind-tag { font-size:11px; font-weight:600; padding:4px 10px; border-radius:20px; background:rgba(0,180,166,.08); color:var(--teal); }
        .tr-ind-card.dark .tr-ind-tag { background:rgba(0,200,150,.12); color:var(--green); }
        /* CTA */
        .tr-cta-section { background:var(--ink); padding:100px 0; position:relative; overflow:hidden; text-align:center; }
        .tr-cta-section::before { content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:900px; height:500px; background:radial-gradient(ellipse, rgba(0,200,150,.12) 0%, transparent 65%); }
        .tr-cta-section h2 { font-size:clamp(28px,5vw,52px); font-weight:900; color:#fff; letter-spacing:-.02em; line-height:1.1; margin-bottom:20px; position:relative; }
        .tr-cta-section h2 em { font-style:normal; background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .tr-cta-section > .tr-container > p { font-size:17px; color:rgba(255,255,255,.55); max-width:540px; margin:0 auto 40px; line-height:1.7; position:relative; }
        .tr-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; position:relative; }
        .tr-cta-guarantee { font-size:13px; color:rgba(255,255,255,.3); margin-top:22px; position:relative; }
        /* FOOTER */
        .tr-footer { background:#060D1A; padding:40px 0 28px; }
        .tr-footer-row { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; padding-bottom:20px; border-bottom:1px solid rgba(255,255,255,.06); margin-bottom:20px; }
        .tr-footer img { height:30px; filter:brightness(0) invert(1) opacity(.6); }
        .tr-footer-links { display:flex; gap:24px; list-style:none; }
        .tr-footer-links a { font-size:13px; color:rgba(255,255,255,.35); text-decoration:none; }
        .tr-footer-links a:hover { color:var(--teal); }
        .tr-footer-copy { font-size:12px; color:rgba(255,255,255,.2); text-align:center; }
        /* RESPONSIVE */
        @media(max-width:960px) {
          .tr-hero-body { grid-template-columns:1fr; }
          .tr-hero-visual { display:none; }
          .tr-bridge-inner { grid-template-columns:1fr; gap:40px; }
          .tr-pain-cards { grid-template-columns:1fr; gap:20px; }
          .tr-caps-grid { grid-template-columns:1fr 1fr; }
          .tr-cap-card.wide { grid-column:span 2; }
          .tr-founders-grid { grid-template-columns:1fr; }
          .tr-case-card { grid-template-columns:1fr; direction:ltr !important; }
          .tr-case-card.even { direction:ltr; }
          .tr-method-flow { grid-template-columns:repeat(2,1fr); }
          .tr-method-flow::before { display:none; }
          .tr-stats-inner { flex-wrap:wrap; }
          .tr-stat-block { flex-basis:50%; border-right:none; border-bottom:1px solid rgba(255,255,255,.07); }
          .tr-ind-grid { grid-template-columns:1fr 1fr; }
          .tr-ind-card { grid-column:span 1; }
          .tr-ind-card.wide { grid-column:span 1; }
        }
        @media(max-width:640px) {
          .tr-container { padding:0 22px; }
          .tr-caps-grid { grid-template-columns:1fr; }
          .tr-cap-card.wide { grid-column:span 1; }
          .tr-nav-links { display:none; }
          .tr-founders-grid { grid-template-columns:1fr; }
          .tr-founder-card { grid-template-columns:1fr; }
          .tr-stat-block { flex-basis:100%; }
          .tr-ind-grid { grid-template-columns:1fr; }
          .tr-ind-card { grid-column:span 1; }
          .tr-ind-card.wide { grid-column:span 1; }
        }
      `}</style>

      {/* NAV */}
      <nav className="tr-nav">
        <div className="tr-container">
          <div className="tr-nav-row">
            <a href="#" className="tr-logo">
              <img src={LOGO_SRC} alt="Tuning Research" />
            </a>
            <ul className="tr-nav-links">
              <li>
                <a href="#capabilities">Capabilities</a>
              </li>
              <li>
                <a href="#results">Case Studies</a>
              </li>
              <li>
                <a href="#process">How We Work</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
            <div className="tr-nav-cta">
              <a href="#cta" className="tr-btn tr-btn-primary">
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="tr-hero">
        <div className="tr-container">
          <div className="tr-hero-body">
            <div>
              <p className="tr-hero-kicker">Enterprise AI — Production Grade</p>
              <h1>
                Most enterprise AI
                <br />
                <em>never leaves the pilot.</em>
              </h1>
              <p className="tr-hero-sub">
                Enterprises invest in AI and get dashboards. We build AI that
                integrates into operations, replaces manual complexity, and
                delivers measurable outcomes — in production, not in demos.
              </p>
              <div className="tr-hero-actions">
                <a href="#cta" className="tr-btn tr-btn-primary">
                  Schedule a Discovery →
                </a>
                <a href="#capabilities" className="tr-btn tr-btn-ghost">
                  See What We Build
                </a>
              </div>
              <div className="tr-hero-proof">
                <div className="tr-proof-stat">
                  <strong>40–70%</strong>
                  <span>Reduction in manual processing time</span>
                </div>
                <div className="tr-proof-stat">
                  <strong>Q1–Q2</strong>
                  <span>Time to measurable ROI</span>
                </div>
                <div className="tr-proof-stat">
                  <strong>60–80%</strong>
                  <span>AI infrastructure cost savings</span>
                </div>
              </div>
            </div>
            <div className="tr-hero-visual">
              <div className="tr-cap-pill">
                <div className="tr-cap-pill-icon">🧠</div>
                <div>
                  <h4>Knowledge &amp; Compliance AI</h4>
                  <p>Grounded in your data — zero hallucination risk</p>
                </div>
              </div>
              <div className="tr-cap-pill">
                <div className="tr-cap-pill-icon">📄</div>
                <div>
                  <h4>Document Intelligence</h4>
                  <p>Contracts, filings, reports — structured at scale</p>
                </div>
              </div>
              <div className="tr-cap-pill">
                <div className="tr-cap-pill-icon">⚡</div>
                <div>
                  <h4>Autonomous Workflow Agents</h4>
                  <p>End-to-end operations without manual loops</p>
                </div>
              </div>
              <div className="tr-cap-pill">
                <div className="tr-cap-pill-icon">🔒</div>
                <div>
                  <h4>Private AI Deployment</h4>
                  <p>Your models, your infrastructure, your data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tr-hero-wave">
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

      {/* PAIN STRIP */}
      <section className="tr-pain-strip" id="problem">
        <div className="tr-container">
          <div className="tr-pain-intro">
            <span className="tr-eyebrow">The Problem</span>
            <h2>Where Enterprise AI Programmes Break Down</h2>
            <p>
              The technology works. The implementations don't. Three structural
              failures account for the majority of enterprise AI spending that
              produces no business value.
            </p>
          </div>
          <div className="tr-pain-cards">
            <div className="tr-pain-card">
              <span className="tr-pain-num">01</span>
              <h3>Data That's Rich but Unreachable</h3>
              <p>
                Decades of institutional knowledge lives in PDFs, contracts,
                emails, and legacy systems — invisible to decision-makers and
                inaccessible to AI. Enterprises are data-rich and
                intelligence-poor.
              </p>
            </div>
            <div className="tr-pain-card">
              <span className="tr-pain-num">02</span>
              <h3>Pilots That Can't Survive the Enterprise</h3>
              <p>
                Proof-of-concepts work in controlled conditions and fail in
                production. Enterprise complexity — integration requirements,
                compliance constraints, data governance, legacy infrastructure —
                kills generic AI implementations.
              </p>
            </div>
            <div className="tr-pain-card">
              <span className="tr-pain-num">03</span>
              <h3>AI Spend Without a Business Case</h3>
              <p>
                Organisations buy models and platforms but cannot connect them
                to measurable business outcomes. Leadership loses confidence.
                Programmes stall. The ROI never appears on a P&amp;L.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="tr-bridge">
        <div className="tr-container">
          <div className="tr-bridge-inner">
            <div className="tr-bridge-left">
              <div>
                <span className="tr-eyebrow tr-eyebrow-light">
                  Where We Come In
                </span>
                <h2>
                  We build the bridge between AI potential and enterprise
                  reality.
                </h2>
                <div className="tr-bridge-divider"></div>
                <p>
                  Tuning Research was built for exactly this gap. We are not a
                  model vendor, not a platform play, and not a demo factory. We
                  are an enterprise AI consultancy that owns the full journey
                  from discovery to live production — with explicit
                  accountability for outcomes.
                </p>
              </div>
              <a
                href="#cta"
                className="tr-btn tr-btn-primary"
                style={{ alignSelf: 'flex-start', marginTop: '32px' }}
              >
                Talk to Us →
              </a>
            </div>
            <div className="tr-bridge-right">
              <div className="tr-bridge-item">
                <div className="tr-bridge-icon">🏗️</div>
                <div>
                  <h4>Built for Enterprise Complexity</h4>
                  <p>
                    Every system we design accounts for your governance
                    requirements, integration architecture, compliance
                    constraints, and security posture — not bolted on afterward.
                  </p>
                </div>
              </div>
              <div className="tr-bridge-item">
                <div className="tr-bridge-icon">📐</div>
                <div>
                  <h4>ROI-First Methodology</h4>
                  <p>
                    Every engagement begins with a business outcome thesis and a
                    measurable ROI target. Architecture decisions flow from the
                    business case, not the other way around.
                  </p>
                </div>
              </div>
              <div className="tr-bridge-item">
                <div className="tr-bridge-icon">🚀</div>
                <div>
                  <h4>Production, Not Prototypes</h4>
                  <p>
                    We take full ownership from pilot to enterprise rollout —
                    engineering, deployment, tuning, and optimisation. We do not
                    disappear after the demo.
                  </p>
                </div>
              </div>
              <div className="tr-bridge-item">
                <div className="tr-bridge-icon">🔬</div>
                <div>
                  <h4>Deep Technical Specialisation</h4>
                  <p>
                    RAG architecture, agentic systems, private LLM deployment,
                    document intelligence — these are our core disciplines, not
                    additional services on a menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tr-wave-down" style={{ background: 'var(--navy)' }}>
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

      {/* CAPABILITIES */}
      <section className="tr-capabilities" id="capabilities">
        <div className="tr-container">
          <div className="tr-caps-header">
            <span className="tr-eyebrow">What We Build</span>
            <h2>Five Core AI Capabilities for Enterprise Operations</h2>
            <p>
              Each capability targets a distinct category of enterprise
              operational complexity — and can be deployed independently or
              combined into a full transformation programme.
            </p>
          </div>
          <div className="tr-caps-grid">
            <div className="tr-cap-card wide">
              <p className="tr-cap-n">01</p>
              <div className="tr-cap-ico">🧠</div>
              <h3>Retrieval-Augmented Generation (RAG)</h3>
              <p>
                Enterprise AI that reasons over your internal knowledge —
                policies, contracts, research, operational data — and responds
                with precision, citations, and zero hallucination risk. From
                compliance assistants to research automation to customer-facing
                knowledge bots, RAG grounds AI firmly in what your organisation
                actually knows.
              </p>
              <span className="tr-cap-tag">
                Zero hallucination · Citation-backed · Grounded in your data
              </span>
            </div>
            <div className="tr-cap-card">
              <p className="tr-cap-n">02</p>
              <div className="tr-cap-ico">📄</div>
              <h3>Document Intelligence</h3>
              <p>
                Structured extraction, classification, and analysis of
                unstructured enterprise content — contracts, filings, invoices,
                reports — converted into decision-ready intelligence at scale.
              </p>
              <span className="tr-cap-tag">
                Unstructured → structured · Auditable
              </span>
            </div>
            <div className="tr-cap-card">
              <p className="tr-cap-n">03</p>
              <div className="tr-cap-ico">⚡</div>
              <h3>Agentic AI &amp; Autonomous Workflows</h3>
              <p>
                Multi-agent systems that plan, execute, and optimise complex
                operational workflows end-to-end — removing manual bottlenecks
                from research, procurement, compliance, and operations cycles.
              </p>
              <span className="tr-cap-tag">
                End-to-end automation · Decision agents
              </span>
            </div>
            <div className="tr-cap-card dark">
              <p className="tr-cap-n">04</p>
              <div className="tr-cap-ico">🔒</div>
              <h3>Private LLM Deployment</h3>
              <p>
                Fine-tuned, self-hosted models within your own infrastructure —
                built for enterprises where data sovereignty, regulatory
                compliance, and cost predictability are non-negotiable. 60–80%
                reduction in inference costs versus frontier APIs.
              </p>
              <span className="tr-cap-tag">
                Full sovereignty · 60–80% cost savings · Zero data exposure
              </span>
            </div>
            <div className="tr-cap-card">
              <p className="tr-cap-n">05</p>
              <div className="tr-cap-ico">🎥</div>
              <h3>Video-Based AI Intelligence</h3>
              <p>
                Enterprises generate vast volumes of video data across
                operations, facilities, and customer interactions — most of it
                unanalysed. We convert live and recorded video streams into
                structured operational intelligence: safety compliance
                monitoring, process adherence, anomaly detection, and quality
                scoring — integrated with LLM systems for natural-language
                querying and automated reporting.
              </p>
              <span className="tr-cap-tag">
                Operational monitoring · Safety compliance · Multimodal AI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS FLOW */}
      <section className="tr-stats-flow">
        <div className="tr-container">
          <div className="tr-stats-inner">
            <div className="tr-stat-block">
              <div className="tr-stat-n">40–70%</div>
              <div className="tr-stat-l">Reduction in Manual Processing</div>
              <div className="tr-stat-d">
                Across document-heavy and workflow-intensive operations
              </div>
            </div>
            <div className="tr-stat-block">
              <div className="tr-stat-n">60–80%</div>
              <div className="tr-stat-l">AI Infrastructure Cost Savings</div>
              <div className="tr-stat-d">
                Through private LLM deployment vs frontier API pricing
              </div>
            </div>
            <div className="tr-stat-block">
              <div className="tr-stat-n">Q1–Q2</div>
              <div className="tr-stat-l">Time to Measurable ROI</div>
              <div className="tr-stat-d">
                From project initiation to business case delivery
              </div>
            </div>
            <div className="tr-stat-block">
              <div className="tr-stat-n">5</div>
              <div className="tr-stat-l">ERP Modules Automated</div>
              <div className="tr-stat-d">
                Via natural-language AI interface in single deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="tr-cases" id="results">
        <div className="tr-container">
          <div className="tr-cases-header">
            <span className="tr-eyebrow">Results</span>
            <h2>AI That Moved the Business Needle</h2>
            <p>
              How Tuning Research has taken enterprise AI from theoretical to
              operational across complex environments.
            </p>
          </div>
          <div className="tr-cases-stack">
            <div className="tr-case-card">
              <div className="tr-case-left">
                <div>
                  <p className="tr-case-sector">
                    Manufacturing &amp; Industrial
                  </p>
                  <h3 className="tr-case-title">
                    Turning a costly, low-adoption ERP into an AI-native
                    operational nerve centre
                  </h3>
                </div>
                <div>
                  <div className="tr-case-result">5</div>
                  <div className="tr-case-result-label">
                    ERP modules fully automated and accessible via
                    plain-language AI
                  </div>
                </div>
              </div>
              <div className="tr-case-right">
                <div>
                  <div className="tr-case-problem">
                    <h4>The Operational Problem</h4>
                    <p>
                      An industrial manufacturer had deployed ERPNext across its
                      core business functions — CRM, Sales, Inventory,
                      Accounting, and HR — but adoption was critically low. Key
                      operations were still being managed manually. Data was
                      fragmented across silos with no real-time visibility, and
                      the complex interface meant most employees simply avoided
                      the system altogether. The investment in ERP
                      infrastructure was delivering almost none of its intended
                      value.
                    </p>
                  </div>
                  <div className="tr-case-solution">
                    <h4>What We Delivered</h4>
                    <p>
                      A RAG-powered natural language interface deployed across
                      all five ERP modules, enabling any employee to query,
                      interact with, and act on operational data using plain
                      language — no training required. An agentic AI layer
                      automated repetitive, rule-based workflows end-to-end: the
                      system executes processes autonomously and only escalates
                      when human judgment is genuinely required. The ERP
                      transformed from an avoided system into the operational
                      backbone of the business — delivering the real-time
                      visibility and cross-functional intelligence it was built
                      to provide.
                    </p>
                  </div>
                </div>
                <div className="tr-case-tags">
                  <span className="tr-case-tag">RAG</span>
                  <span className="tr-case-tag">Agentic AI Workflows</span>
                  <span className="tr-case-tag">ERP Integration</span>
                  <span className="tr-case-tag">Conversational Interface</span>
                </div>
              </div>
            </div>

            <div className="tr-case-card even">
              <div className="tr-case-left">
                <div>
                  <p className="tr-case-sector">BFSI &amp; Capital Markets</p>
                  <h3 className="tr-case-title">
                    Compressing multi-day IPO document review cycles to under
                    four hours
                  </h3>
                </div>
                <div>
                  <div className="tr-case-result">~4 hrs</div>
                  <div className="tr-case-result-label">
                    Full DRHP–RHP review and regulatory change classification,
                    down from 2–3 days
                  </div>
                </div>
              </div>
              <div className="tr-case-right">
                <div>
                  <div className="tr-case-problem">
                    <h4>The Operational Problem</h4>
                    <p>
                      A capital markets exchange required its review teams to
                      compare IPO prospectus documents — DRHP to RHP — running
                      500+ pages each. Reviewers had approximately two days to
                      complete the analysis, creating significant risk of
                      missing material regulatory changes. There was no
                      structured system to track additions, deletions, or
                      modifications across versions, and manual review at that
                      scale was inherently unreliable due to reviewer fatigue
                      and the sheer volume of content.
                    </p>
                  </div>
                  <div className="tr-case-solution">
                    <h4>What We Delivered</h4>
                    <p>
                      A Document Intelligence platform that ingested scanned and
                      unstructured IPO filings, performed complete line-by-line
                      comparison across DRHP, RHP, and addendums, and
                      auto-classified every detected change by severity — Low,
                      Medium, or High. A RAG-powered regulatory risk detection
                      layer cross-referenced all changes against the SEBI
                      knowledge base, surfacing material regulatory concerns
                      with cited justification and full audit-ready rationale.
                      What previously required 2–3 days of intensive analyst
                      effort was completed in under four hours, with zero
                      reviewer fatigue and consistent coverage.
                    </p>
                  </div>
                </div>
                <div className="tr-case-tags">
                  <span className="tr-case-tag">Document Intelligence</span>
                  <span className="tr-case-tag">Change Classification</span>
                  <span className="tr-case-tag">RAG — Regulatory Risk</span>
                  <span className="tr-case-tag">Audit-Ready Output</span>
                </div>
              </div>
            </div>

            <div className="tr-case-card">
              <div className="tr-case-left">
                <div>
                  <p className="tr-case-sector">Energy &amp; Infrastructure</p>
                  <h3 className="tr-case-title">
                    Replacing hours of manual Excel analysis with instant
                    natural-language portfolio intelligence
                  </h3>
                </div>
                <div>
                  <div className="tr-case-result">70%</div>
                  <div className="tr-case-result-label">
                    Reduction in manual effort across Excel-based portfolio
                    workflows
                  </div>
                </div>
              </div>
              <div className="tr-case-right">
                <div>
                  <div className="tr-case-problem">
                    <h4>The Operational Problem</h4>
                    <p>
                      A large renewable energy developer managed a complex
                      portfolio of solar, wind, and hybrid assets — but
                      performance data was scattered across hundreds of Excel
                      files, vendor reports, and legacy monitoring systems.
                      Asset managers spent hours each week manually compiling
                      KPIs and financial metrics across plant entities. There
                      was no real-time visibility into underperforming assets,
                      report generation was manual and inconsistent, and
                      decision-makers had no way to query financial and
                      operational data without routing requests through an
                      analyst.
                    </p>
                  </div>
                  <div className="tr-case-solution">
                    <h4>What We Delivered</h4>
                    <p>
                      A RAG-powered financial intelligence layer over structured
                      data migrated from standardised Excel models into a
                      governed database — enabling natural-language queries that
                      return source-backed, traceable answers and multi-entity
                      comparative analysis across the portfolio. A deterministic
                      formula engine reproduced all Excel-equivalent
                      calculations with full dependency resolution, ensuring
                      100% parity with source models. An agentic orchestration
                      layer automated report generation: LLM-generated executive
                      summaries with embedded charts and variance analysis,
                      exportable as structured PDFs. Access to financial
                      insights went from hours to seconds.
                    </p>
                  </div>
                </div>
                <div className="tr-case-tags">
                  <span className="tr-case-tag">
                    RAG — Financial Intelligence
                  </span>
                  <span className="tr-case-tag">Agentic Orchestration</span>
                  <span className="tr-case-tag">Document Intelligence</span>
                  <span className="tr-case-tag">Report Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="tr-method" id="process">
        <div className="tr-container">
          <div className="tr-method-header">
            <span className="tr-eyebrow">How We Work</span>
            <h2>How We Take AI to Production</h2>
            <p>
              A structured four-phase methodology that takes AI from business
              case to production — with full accountability at every stage.
            </p>
          </div>
          <div className="tr-method-flow">
            <div className="tr-method-step">
              <div className="tr-m-num">01</div>
              <h3>Discover</h3>
              <p>
                Workflow mapping, data audit, ROI modelling — identifying where
                AI can create the most measurable business impact.
              </p>
            </div>
            <div className="tr-method-step">
              <div className="tr-m-num">02</div>
              <h3>Architect</h3>
              <p>
                System design tailored to your infrastructure, security
                requirements, and integration architecture.
              </p>
            </div>
            <div className="tr-method-step">
              <div className="tr-m-num">03</div>
              <h3>Deploy</h3>
              <p>
                Production rollout with full governance, compliance controls,
                and integration into live operational systems.
              </p>
            </div>
            <div className="tr-method-step">
              <div className="tr-m-num">04</div>
              <h3>Optimise</h3>
              <p>
                Continuous accuracy tuning, cost optimisation, and expansion —
                AI systems that improve after go-live, not degrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="tr-founders" id="team">
        <div className="tr-container">
          <div className="tr-founders-header">
            <span className="tr-eyebrow">The Team</span>
            <h2>Built by People Who Have Sat on Both Sides</h2>
            <p>
              Tuning Research was founded by operators who have seen enterprise
              AI fail from the inside — and built the firm to solve for those
              exact failure modes.
            </p>
          </div>
          <div className="tr-founders-grid">
            <div className="tr-founder-card">
              <div className="tr-founder-avatar">SA</div>
              <div>
                <h2 className="tr-founder-name">Sonam Agarwal</h2>
                <p className="tr-founder-role">
                  Co-Founder &amp; CEO · Enterprise Strategy
                </p>
                <p className="tr-founder-bio">
                  A two-time entrepreneur with deep experience advising large
                  enterprises on transformation. Former Partner at EY, where she
                  led digital and AI advisory engagements across financial
                  services, manufacturing, and professional services. Sonam
                  brings the enterprise buyer's perspective — she understands
                  what it takes to move AI from boardroom mandate to operational
                  reality inside complex organisations.
                </p>
                <div className="tr-founder-tags">
                  <span className="tr-f-tag">2× Founder</span>
                  <span className="tr-f-tag">Ex-EY Partner</span>
                  <span className="tr-f-tag">Enterprise Advisory</span>
                  <span className="tr-f-tag">AI Transformation</span>
                </div>
              </div>
            </div>
            <div className="tr-founder-card">
              <div className="tr-founder-avatar">SJ</div>
              <div>
                <h2 className="tr-founder-name">Sabhay Jain</h2>
                <p className="tr-founder-role">
                  Co-Founder &amp; CTO · AI/ML Engineering
                </p>
                <p className="tr-founder-bio">
                  A deep technologist from IIT Kanpur with extensive research
                  and applied experience in machine learning and AI systems.
                  Sabhay has spent his career building AI at the intersection of
                  research and production — from foundational model work to
                  enterprise-grade RAG architectures and agentic systems. He
                  brings the technical rigour that ensures Tuning Research's
                  systems are not just impressive in demos, but reliable and
                  accurate in production.
                </p>
                <div className="tr-founder-tags">
                  <span className="tr-f-tag">IIT Kanpur</span>
                  <span className="tr-f-tag">AI / ML</span>
                  <span className="tr-f-tag">RAG Architecture</span>
                  <span className="tr-f-tag">Applied Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="tr-sectors" id="industries">
        <div className="tr-container">
          <div className="tr-sectors-header">
            <span className="tr-eyebrow">Where We Work</span>
            <h2>Industries Where AI Complexity Is Highest</h2>
            <p>
              We focus on sectors where data is dense, compliance is
              non-negotiable, and the cost of getting AI wrong is significant.
            </p>
          </div>
          <div className="tr-ind-grid">
            <div className="tr-ind-card wide">
              <div className="tr-ind-ico">⚙️</div>
              <h3>Manufacturing &amp; Industrial</h3>
              <p className="tr-ind-desc">
                Production environments generate continuous operational data —
                from shop floors and supply chains to quality control and ERP
                systems. AI transforms how manufacturers monitor, automate, and
                optimise these complex multi-site operations.
              </p>
              <ul className="tr-ind-uses">
                <li>
                  Real-time safety compliance and PPE monitoring via Video AI
                </li>
                <li>
                  Predictive maintenance through anomaly detection in
                  operational feeds
                </li>
                <li>
                  Natural-language access to ERP, MES, and production data
                </li>
                <li>Automated quality inspection and defect classification</li>
                <li>SOP adherence tracking and incident report automation</li>
              </ul>
              <div className="tr-ind-tags">
                <span className="tr-ind-tag">Video AI</span>
                <span className="tr-ind-tag">RAG</span>
                <span className="tr-ind-tag">Agentic Workflows</span>
                <span className="tr-ind-tag">Document Intelligence</span>
              </div>
            </div>
            <div className="tr-ind-card wide dark">
              <div className="tr-ind-ico">🏦</div>
              <h3>BFSI</h3>
              <p className="tr-ind-desc">
                Financial institutions manage massive document volumes,
                regulatory obligations, and risk decisions simultaneously. AI
                compresses review cycles, strengthens compliance posture, and
                surfaces intelligence that analysts cannot generate at scale.
              </p>
              <ul className="tr-ind-uses">
                <li>Credit underwriting and loan document automation</li>
                <li>
                  IPO and regulatory prospectus review and change detection
                </li>
                <li>Merchant fraud detection and risk scoring at scale</li>
                <li>Policy and compliance knowledge management via RAG</li>
                <li>
                  Multi-source financial intelligence synthesis and reporting
                </li>
              </ul>
              <div className="tr-ind-tags">
                <span className="tr-ind-tag">Document Intelligence</span>
                <span className="tr-ind-tag">RAG</span>
                <span className="tr-ind-tag">Agentic AI</span>
                <span className="tr-ind-tag">Private LLM</span>
              </div>
            </div>
            <div className="tr-ind-card">
              <div className="tr-ind-ico">💊</div>
              <h3>Pharma &amp; Healthcare</h3>
              <p className="tr-ind-desc">
                Drug development, clinical operations, and regulatory
                submissions produce some of the most complex documentation in
                any industry. AI brings precision, traceability, and speed to
                workflows where errors carry clinical consequences.
              </p>
              <ul className="tr-ind-uses">
                <li>
                  Clinical trial document review and structured data extraction
                </li>
                <li>Regulatory submission preparation and cross-referencing</li>
                <li>Medical literature synthesis and research acceleration</li>
                <li>
                  Adverse event detection from unstructured clinical notes
                </li>
                <li>QA documentation management and audit trail automation</li>
              </ul>
              <div className="tr-ind-tags">
                <span className="tr-ind-tag">Document Intelligence</span>
                <span className="tr-ind-tag">RAG</span>
                <span className="tr-ind-tag">Private LLM</span>
              </div>
            </div>
            <div className="tr-ind-card">
              <div className="tr-ind-ico">⚡</div>
              <h3>Energy, Oil &amp; Gas</h3>
              <p className="tr-ind-desc">
                Asset-intensive portfolios across distributed sites demand
                continuous performance monitoring, compliance reporting, and
                financial visibility — without analyst bottlenecks. AI delivers
                real-time intelligence across the entire portfolio on demand.
              </p>
              <ul className="tr-ind-uses">
                <li>Portfolio performance monitoring and variance analysis</li>
                <li>
                  Natural-language querying of financial and operational KPIs
                </li>
                <li>Automated ESG and regulatory reporting</li>
                <li>
                  Asset inspection intelligence from video and sensor feeds
                </li>
                <li>Contract intelligence across complex vendor ecosystems</li>
              </ul>
              <div className="tr-ind-tags">
                <span className="tr-ind-tag">RAG</span>
                <span className="tr-ind-tag">Agentic Orchestration</span>
                <span className="tr-ind-tag">Video AI</span>
              </div>
            </div>
            <div className="tr-ind-card">
              <div className="tr-ind-ico">🛍️</div>
              <h3>Retail &amp; Consumer Products</h3>
              <p className="tr-ind-desc">
                The pace of retail — across stores, supply chains, and export
                operations — demands real-time intelligence and fast automation.
                AI enables retailers and consumer brands to move faster, reduce
                operational waste, and stay compliant across complex trade
                environments.
              </p>
              <ul className="tr-ind-uses">
                <li>
                  In-store footfall and shelf compliance monitoring via Video AI
                </li>
                <li>Demand forecasting and inventory optimisation</li>
                <li>
                  Export-import compliance automation and HS code classification
                </li>
                <li>Supplier and vendor contract intelligence</li>
                <li>Customer sentiment analysis from unstructured feedback</li>
              </ul>
              <div className="tr-ind-tags">
                <span className="tr-ind-tag">Video AI</span>
                <span className="tr-ind-tag">RAG</span>
                <span className="tr-ind-tag">Document Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tr-cta-section" id="cta">
        <div className="tr-container">
          <h2>
            Ready to move beyond
            <br />
            <em>the proof of concept?</em>
          </h2>
          <p>
            We work with a small number of enterprise clients each year. If you
            have a clear AI mandate and a production problem to solve, let's
            talk.
          </p>
          <div className="tr-cta-btns">
            <a
              href="mailto:hello@tuningresearch.com"
              className="tr-btn tr-btn-primary"
              style={{ fontSize: '16px', padding: '16px 40px' }}
            >
              Schedule a Discovery Session →
            </a>
          </div>
          <p className="tr-cta-guarantee">
            We start every engagement with a structured Discovery — workflow
            mapping, data audit, and ROI modelling. No commitment beyond the
            first session.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tr-footer">
        <div className="tr-container">
          <div className="tr-footer-row">
            <img src={LOGO_SRC} alt="Tuning Research" />
            <ul className="tr-footer-links">
              <li>
                <a href="#capabilities">Capabilities</a>
              </li>
              <li>
                <a href="#results">Case Studies</a>
              </li>
              <li>
                <a href="#process">Methodology</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#cta">Contact</a>
              </li>
            </ul>
          </div>
          <p className="tr-footer-copy">
            © 2026 Tuning Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
