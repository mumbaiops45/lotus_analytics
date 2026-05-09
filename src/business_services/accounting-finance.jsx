// AccountingFinance.jsx
// ✦ 3D flip cards: front = image, back = service info on hover
// ✦ Dual auto-scroll marquee strips (opposite directions)
// ✦ All previous animations preserved
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  HiOutlineCalculator, HiOutlineChartBar, HiOutlineCurrencyDollar,
  HiOutlineDatabase, HiOutlineShieldCheck, HiOutlineTrendingUp,
  HiOutlineSparkles, HiArrowRight,
} from "react-icons/hi";

const T = {
  cream:"#F5F0E8", creamDark:"#EDE6D8", white:"#FAFAF8", charcoal:"#141410",
  sage:"#4A7260", sageMid:"#6B9B87", sageLight:"#B5CFC0", gold:"#C9A96E",
  goldLight:"#E8D5B0", muted:"#6B7B72", border:"rgba(90,128,112,0.14)",
};
const ease = [0.16,1,0.3,1];
const fadeUp = { hidden:{opacity:0,y:44}, show:{opacity:1,y:0} };

/* ── Counter ──────────────────────────────────────────────── */
function Counter({ target, duration=1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  useEffect(() => {
    if (!inView) return;
    if (target==="24/7") return;
    const num = parseFloat(target.replace(/[^0-9.]/g,""));
    if (isNaN(num)) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now-start)/duration,1);
      setCount(Math.round((1-Math.pow(1-p,4))*num));
      if (p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  if (target==="24/7") return <span ref={ref}>24/7</span>;
  const suffix = target.includes("+") ? "+" : target.includes("%") ? "%" : "";
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Reveal wrapper ───────────────────────────────────────── */
const Reveal = ({children, delay=0}) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show"
    viewport={{once:true,amount:.15}} transition={{duration:.85,delay,ease}}>
    {children}
  </motion.div>
);

/* ── 3D FLIP CARD ─────────────────────────────────────────── */
function FlipCard({ svc, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity:0, y:56 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:.12 }}
      transition={{ delay:.08*index, duration:.78, ease }}
      style={{ perspective:1400, height:360, cursor:"pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(v => !v)}
    >
      <div style={{
        width:"100%", height:"100%", position:"relative",
        transformStyle:"preserve-3d",
        transition:"transform 0.68s cubic-bezier(0.22,1,0.36,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* ── FRONT ──────────────────────────────── */}
        <div style={{
          position:"absolute", inset:0, backfaceVisibility:"hidden",
          WebkitBackfaceVisibility:"hidden",
          borderRadius:26, overflow:"hidden",
          boxShadow:"0 8px 32px rgba(20,20,16,0.1)",
          border:`1px solid ${T.border}`,
        }}>
          <img src={svc.img} alt={svc.title}
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block",
              transition:"transform 0.7s ease",
              transform: flipped ? "scale(1.1)" : "scale(1.0)" }} />
          {/* gradient */}
          <div style={{ position:"absolute", inset:0,
            background:"linear-gradient(to top, rgba(10,10,8,0.82) 0%, rgba(10,10,8,0.08) 55%, transparent 100%)" }}/>
          {/* front content */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"22px 20px" }}>
            <div style={{ width:46, height:46, borderRadius:12, background:T.sage, color:"#fff",
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:10,
              boxShadow:"0 4px 16px rgba(74,114,96,0.4)" }}>
              {svc.icon}
            </div>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700,
              color:"#fff", margin:0, lineHeight:1.2 }}>{svc.title}</h3>
            <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:8,
              color:T.sageLight, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase" }}>
              Hover to reveal <HiArrowRight style={{fontSize:13}}/>
            </div>
          </div>
        </div>

        {/* ── BACK ───────────────────────────────── */}
        <div style={{
          position:"absolute", inset:0, backfaceVisibility:"hidden",
          WebkitBackfaceVisibility:"hidden",
          transform:"rotateY(180deg)",
          borderRadius:26, overflow:"hidden",
          background:`linear-gradient(148deg, #111a14 0%, #1c2e23 100%)`,
          border:"1px solid rgba(74,114,96,0.28)",
          boxShadow:"0 28px 72px rgba(74,114,96,0.25)",
          display:"flex", flexDirection:"column", padding:"28px 24px 24px",
        }}>
          {/* top accent line */}
          <div style={{ position:"absolute", top:0, left:24, right:24, height:2,
            background:`linear-gradient(90deg, ${T.sage}, ${T.gold}, transparent)`,
            borderRadius:"0 0 3px 3px" }}/>

          {/* icon */}
          <div style={{ width:52, height:52, borderRadius:14, background:"rgba(74,114,96,0.18)",
            border:"1px solid rgba(74,114,96,0.3)", color:T.sageLight,
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, marginBottom:16 }}>
            {svc.icon}
          </div>

          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700,
            color:"#fff", lineHeight:1.15, marginBottom:12 }}>{svc.title}</h3>

          <p style={{ fontSize:14, lineHeight:1.8, color:"rgba(255,255,255,0.58)", flex:1 }}>
            {svc.desc}
          </p>

          {/* tags */}
          <div style={{ display:"flex", gap:7, flexWrap:"wrap", margin:"16px 0" }}>
            {svc.tags.map((tag,i) => (
              <span key={i} style={{ padding:"4px 11px", borderRadius:100, fontSize:10,
                fontWeight:700, letterSpacing:1.2, textTransform:"uppercase",
                background:"rgba(74,114,96,0.2)", color:T.sageLight,
                border:"1px solid rgba(74,114,96,0.22)" }}>
                {tag}
              </span>
            ))}
          </div>

          <a href="#contact"
            style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"11px 20px",
              borderRadius:10, background:T.sage, color:"#fff", fontSize:12, fontWeight:700,
              letterSpacing:1.5, textTransform:"uppercase", textDecoration:"none",
              transition:"background .25s", width:"fit-content" }}
            onMouseEnter={e => e.currentTarget.style.background=T.gold}
            onMouseLeave={e => e.currentTarget.style.background=T.sage}>
            Get Started <HiArrowRight/>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── AUTO-SCROLL STRIP ────────────────────────────────────── */
const scrollItems = [
  "Bookkeeping","General Ledger","Accounts Payable","Accounts Receivable",
  "Financial Reporting","Audit & Compliance","Tax Management","Payroll",
  "Budget Forecasting","Cash Flow Analysis","Reconciliation","Cost Accounting",
];

function AutoScrollStrip({ reverse=false, bg=T.cream }) {
  const items = [...scrollItems,...scrollItems,...scrollItems,...scrollItems];
  return (
    <div style={{ overflow:"hidden", position:"relative", padding:"13px 0",
      background:bg, borderTop:`1px solid ${T.border}`, borderBottom:`1px solid ${T.border}` }}>
      <div style={{ position:"absolute",left:0,top:0,bottom:0,width:80,
        background:`linear-gradient(to right,${bg},transparent)`,zIndex:2,pointerEvents:"none" }}/>
      <div style={{ position:"absolute",right:0,top:0,bottom:0,width:80,
        background:`linear-gradient(to left,${bg},transparent)`,zIndex:2,pointerEvents:"none" }}/>
      <motion.div
        style={{ display:"flex", width:"max-content" }}
        animate={{ x: reverse ? ["0%","-50%"] : ["-50%","0%"] }}
        transition={{ duration:35, repeat:Infinity, ease:"linear" }}>
        {items.map((item,i) => (
          <div key={i} style={{ display:"flex",alignItems:"center",whiteSpace:"nowrap",padding:"0 20px" }}>
            <span style={{ fontSize:12,fontWeight:600,color:T.muted,letterSpacing:2,textTransform:"uppercase" }}>
              {item}
            </span>
            <span style={{ width:4,height:4,borderRadius:"50%",background:T.gold,opacity:.5,marginLeft:20,flexShrink:0 }}/>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── DATA ─────────────────────────────────────────────────── */
const services = [
  { title:"Bookkeeping",         icon:<HiOutlineCalculator/>,    desc:"Maintain accurate financial records with streamlined bookkeeping and automated transaction management for error-free books.", img:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=900&auto=format&fit=crop", tags:["Automated","Accurate","Real-time"] },
  { title:"General Ledger",      icon:<HiOutlineDatabase/>,       desc:"Organized and reconciled ledger management with complete transparency and real-time financial tracking across all accounts.", img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop", tags:["Organized","Reconciled","Live"] },
  { title:"Accounts Payable",    icon:<HiOutlineCurrencyDollar/>, desc:"Automate invoice processing and vendor payments to dramatically improve operational efficiency and reduce manual overhead.", img:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=900&auto=format&fit=crop", tags:["Automated","Fast","Compliant"] },
  { title:"Accounts Receivable", icon:<HiOutlineTrendingUp/>,     desc:"Improve cash flow with efficient receivable management, automated follow-ups, and intelligent collection tracking systems.", img:"https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900&auto=format&fit=crop", tags:["Cash Flow","Tracking","Efficient"] },
  { title:"Financial Reporting", icon:<HiOutlineChartBar/>,       desc:"Powerful analytics dashboards and automated reports that give you smarter, faster insights for critical business decisions.", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop", tags:["Analytics","Dashboard","Insights"] },
  { title:"Audit & Compliance",  icon:<HiOutlineShieldCheck/>,    desc:"Reliable compliance support and audit-ready financial documentation at every stage of your business operations.", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop", tags:["Secure","Compliant","Auditable"] },
];

const features = [
  "Maximizing Growth & Perfecting Performance","Affordable Solutions Without Compromising Quality",
  "24/7 Accessibility From Anywhere","Highly Customizable & Scalable Solutions",
  "Industry Expertise Backed By Smart Technology","Real-Time Financial Monitoring & Insights",
];

const stats = [
  {val:"98%",label:"Client Satisfaction Rate"}, {val:"24/7",label:"Accessibility & Support"},
  {val:"500+",label:"Financial Reports Delivered"}, {val:"10+",label:"Years Of Experience"},
];

/* ════════════════════════════════════════════════════════════ */
export default function AccountingFinance() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target:heroRef, offset:["start start","end start"] });
  const heroY  = useTransform(scrollYProgress,[0,1],[0,110]);
  const heroOp = useTransform(scrollYProgress,[0,0.7],[1,0]);

  return (
    <div style={{ background:T.cream, color:T.charcoal, fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:${T.cream}}::-webkit-scrollbar-thumb{background:${T.sageMid};border-radius:3px}
        .af-display{font-family:'Cormorant Garamond',Georgia,serif}
        .af-eyebrow{font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:${T.gold};margin-bottom:16px;display:block}
        .af-btn-primary{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:14px;background:${T.sage};color:#fff;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:none;cursor:pointer;transition:background .3s,transform .25s,box-shadow .3s;text-decoration:none}
        .af-btn-primary:hover{background:${T.charcoal};transform:translateY(-2px);box-shadow:0 16px 40px rgba(20,20,16,0.25)}
        .af-btn-outline{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:14px;background:transparent;color:${T.sage};font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:2px solid ${T.sage};cursor:pointer;transition:all .3s;text-decoration:none}
        .af-btn-outline:hover{background:${T.sage};color:#fff;transform:translateY(-2px)}
        .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        .stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .feat-pill{border-radius:16px;padding:16px 18px;display:flex;gap:12px;align-items:flex-start;background:${T.cream};border:1px solid rgba(181,207,192,0.35);transition:background .3s,transform .3s,border-color .3s;cursor:default}
        .feat-pill:hover{background:rgba(181,207,192,0.35);border-color:rgba(74,114,96,0.25);transform:translateY(-3px)}
        .feat-dot{width:9px;height:9px;border-radius:50%;background:${T.sage};flex-shrink:0;margin-top:5px;transition:transform .3s,box-shadow .3s}
        .feat-pill:hover .feat-dot{transform:scale(1.6);box-shadow:0 0 0 4px rgba(74,114,96,0.15)}
        .stat-card{border-radius:28px;padding:38px 30px;text-align:center;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(16px);transition:transform .35s,background .35s;position:relative;overflow:hidden;cursor:default}
        .stat-card:hover{transform:translateY(-8px);background:rgba(255,255,255,0.13)}
        .grain-after{position:relative}
        .grain-after::after{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");pointer-events:none;z-index:1;opacity:0.4}
        @media(max-width:1100px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}.stat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){.svc-grid{grid-template-columns:1fr!important}.feat-grid{grid-template-columns:1fr!important}.stat-grid{grid-template-columns:repeat(2,1fr)!important}.hero-grid,.about-grid{grid-template-columns:1fr!important}}
        @media(max-width:480px){.stat-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section ref={heroRef} className="grain-after hero-grid" style={{
        position:"relative",minHeight:"100vh",overflow:"hidden",
        background:`linear-gradient(150deg,${T.cream} 0%,${T.creamDark} 100%)`,
        display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:48,padding:"120px 6%",
      }}>
        <motion.div style={{position:"absolute",top:-160,right:-100,width:560,height:560,borderRadius:"50%",background:`radial-gradient(circle,rgba(181,207,192,0.35) 0%,transparent 70%)`,filter:"blur(80px)",pointerEvents:"none",y:heroY,opacity:heroOp}}/>
        <motion.div style={{position:"absolute",bottom:-80,left:"10%",width:320,height:320,borderRadius:"50%",background:`radial-gradient(circle,rgba(201,169,110,0.2) 0%,transparent 70%)`,filter:"blur(60px)",pointerEvents:"none"}}
          animate={{y:[0,-24,0]}} transition={{repeat:Infinity,duration:8,ease:"easeInOut"}}/>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",opacity:.05,zIndex:0}} viewBox="0 0 1400 900">
          <line x1="0" y1="900" x2="1400" y2="0" stroke={T.sage} strokeWidth="1.5"/>
          <line x1="200" y1="900" x2="1400" y2="200" stroke={T.sage} strokeWidth="1"/>
          <line x1="0" y1="600" x2="1200" y2="0" stroke={T.sage} strokeWidth="1"/>
        </svg>

        {/* Left */}
        <motion.div style={{position:"relative",zIndex:2}} initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}} transition={{duration:1,ease}}>
          <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.2,duration:.7,ease}}
            style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(181,207,192,0.25)",border:"1px solid rgba(74,114,96,0.2)",color:T.sage,padding:"10px 20px",borderRadius:100,fontSize:12,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:28}}>
            <HiOutlineSparkles style={{fontSize:16}}/> Smart Accounting Solutions
          </motion.div>
          <motion.h1 className="af-display" style={{fontSize:"clamp(48px,5vw,80px)",fontWeight:700,lineHeight:1.05,color:T.charcoal,marginBottom:24}}
            initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:1,ease}}>
            Accounting &amp;<br/><em style={{color:T.sage,fontStyle:"italic"}}>Finance</em>
          </motion.h1>
          <motion.p style={{fontSize:17,lineHeight:1.8,color:T.muted,maxWidth:480,marginBottom:40}}
            initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.45,duration:.9,ease}}>
            Lotus Analytics delivers intelligent finance solutions designed to improve efficiency, optimize reporting, automate workflows, and drive long-term business growth.
          </motion.p>
          <motion.div style={{display:"flex",gap:14,flexWrap:"wrap"}} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.6,duration:.8,ease}}>
            <motion.a href="#services" className="af-btn-primary" whileHover={{scale:1.03}} whileTap={{scale:.97}}>Get Started <HiArrowRight/></motion.a>
            <motion.a href="#about" className="af-btn-outline" whileHover={{scale:1.03}} whileTap={{scale:.97}}>Explore Services</motion.a>
          </motion.div>
          <motion.div style={{display:"flex",gap:28,marginTop:52}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.85,duration:.8}}>
            {[["500+","Reports Delivered"],["98%","Satisfaction"],["10yr","Experience"]].map(([v,l],i)=>(
              <div key={i} style={{borderLeft:`2px solid ${[T.sage,T.gold,T.sageMid][i]}`,paddingLeft:14}}>
                <div className="af-display" style={{fontSize:28,fontWeight:700,color:T.charcoal,lineHeight:1}}>{v}</div>
                <div style={{fontSize:11,color:T.muted,letterSpacing:1,textTransform:"uppercase",marginTop:3}}>{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div style={{position:"relative",zIndex:2}} initial={{opacity:0,x:60,scale:.94}} animate={{opacity:1,x:0,scale:1}} transition={{duration:1.1,ease}}>
          <div style={{position:"absolute",inset:-20,border:"1px solid rgba(74,114,96,0.1)",borderRadius:52,pointerEvents:"none"}}/>
          <motion.img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop" alt="Finance"
            style={{width:"100%",height:580,objectFit:"cover",borderRadius:40,boxShadow:"0 40px 100px rgba(20,20,16,0.2)",display:"block",position:"relative"}}
            whileHover={{scale:1.02,transition:{duration:.6,ease}}}/>
          <motion.div style={{position:"absolute",bottom:32,left:-32,background:"rgba(250,250,248,0.93)",backdropFilter:"blur(20px)",borderRadius:20,padding:"18px 22px",boxShadow:"0 20px 48px rgba(0,0,0,0.14)",border:`1px solid rgba(181,207,192,0.3)`,minWidth:190}}
            animate={{y:[0,-10,0]}} transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}>
            <div style={{fontSize:10,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:T.muted,marginBottom:5}}>Revenue Growth</div>
            <div className="af-display" style={{fontSize:38,fontWeight:700,color:T.charcoal,lineHeight:1}}>+34%</div>
            <div style={{display:"flex",alignItems:"center",gap:6,marginTop:6}}>
              <span style={{width:8,height:8,borderRadius:"50%",background:"#22c55e",display:"block"}}/>
              <span style={{fontSize:12,color:T.muted}}>This Quarter</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ AUTO-SCROLL STRIPS ══════════════════════════════ */}
      <div style={{background:T.creamDark,display:"flex",flexDirection:"column",gap:0}}>
        <AutoScrollStrip reverse={false} bg={T.creamDark}/>
        <AutoScrollStrip reverse={true}  bg={T.creamDark}/>
      </div>

      {/* ══ ABOUT ═══════════════════════════════════════════ */}
      <section id="about" style={{background:T.white,padding:"100px 6%"}}>
        <div className="about-grid" style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>
          <Reveal>
            <div style={{position:"relative"}}>
              <motion.img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop" alt="Finance Team"
                style={{borderRadius:36,boxShadow:"0 32px 80px rgba(0,0,0,0.12)",objectFit:"cover",height:580,width:"100%",display:"block"}}
                whileHover={{scale:1.02,transition:{duration:.5}}}/>
              <motion.div style={{position:"absolute",bottom:28,left:28,background:"rgba(250,250,248,0.94)",backdropFilter:"blur(20px)",padding:"18px 26px",borderRadius:20,boxShadow:"0 16px 40px rgba(0,0,0,0.12)",border:`1px solid ${T.border}`}}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.4,duration:.7,ease}}>
                <div className="af-display" style={{fontSize:42,fontWeight:700,color:T.sage,lineHeight:1}}>10+</div>
                <div style={{fontSize:13,color:T.muted,marginTop:4,fontWeight:500}}>Years Industry Experience</div>
              </motion.div>
              <div style={{position:"absolute",top:-20,right:-20,width:72,height:72,background:T.gold,borderRadius:18,opacity:.15}}/>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="af-eyebrow">About Our Expertise</span></Reveal>
            <Reveal delay={.08}><h2 className="af-display" style={{fontSize:"clamp(34px,4vw,54px)",fontWeight:700,lineHeight:1.1,color:T.charcoal,marginBottom:22}}>Elevate Your Business With Reliable <em style={{color:T.sage}}>Financial Intelligence</em></h2></Reveal>
            <Reveal delay={.16}><p style={{fontSize:16,lineHeight:1.85,color:T.muted,marginBottom:32}}>We combine experienced finance professionals with advanced technology to help businesses manage finances efficiently, improve reporting accuracy, and unlock scalable growth.</p></Reveal>
            <div className="feat-grid">
              {features.map((feat,i)=>(
                <motion.div key={i} className="feat-pill" initial={{opacity:0,x:16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.08+i*.07,duration:.55,ease}}>
                  <span className="feat-dot"/><span style={{fontSize:14,fontWeight:600,color:T.charcoal,lineHeight:1.6}}>{feat}</span>
                </motion.div>
              ))}
            </div>
            <Reveal delay={.4}><motion.a href="#contact" className="af-btn-primary" whileHover={{scale:1.03}} whileTap={{scale:.97}} style={{display:"inline-flex",marginTop:32}}>Learn More <HiArrowRight/></motion.a></Reveal>
          </div>
        </div>
      </section>

      {/* ══ FLIP CARD SERVICES ══════════════════════════════ */}
      <section id="services" style={{padding:"100px 6%",background:`linear-gradient(175deg,${T.cream} 0%,${T.creamDark} 100%)`}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <Reveal>
            <div style={{textAlign:"center",maxWidth:700,margin:"0 auto 64px"}}>
              <span className="af-eyebrow">Our Services</span>
              <h2 className="af-display" style={{fontSize:"clamp(36px,4vw,58px)",fontWeight:700,color:T.charcoal,lineHeight:1.1,marginBottom:18}}>
                Comprehensive Accounting &amp;<br/><em style={{color:T.sage}}>Finance Solutions</em>
              </h2>
              <p style={{fontSize:15,lineHeight:1.8,color:T.muted}}>
                Hover each card to flip and reveal full service details — tailored solutions for every financial need.
              </p>
            </div>
          </Reveal>
          <div className="svc-grid">
            {services.map((svc,i) => <FlipCard key={i} svc={svc} index={i}/>)}
          </div>
        </div>
      </section>

      {/* ══ STATS ═══════════════════════════════════════════ */}
      <section style={{background:T.sage,padding:"88px 6%",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",right:-80,top:-80,width:320,height:320,opacity:.07,pointerEvents:"none"}} viewBox="0 0 400 400">
          <ellipse cx="200" cy="250" rx="60" ry="120" fill="#fff"/><ellipse cx="200" cy="250" rx="60" ry="120" fill="#fff" transform="rotate(40 200 250)"/>
          <ellipse cx="200" cy="250" rx="60" ry="120" fill="#fff" transform="rotate(-40 200 250)"/><ellipse cx="200" cy="250" rx="60" ry="120" fill="#fff" transform="rotate(80 200 250)"/>
          <ellipse cx="200" cy="250" rx="60" ry="120" fill="#fff" transform="rotate(-80 200 250)"/><circle cx="200" cy="240" r="40" fill="#E8D5B0"/>
        </svg>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:52}}>
            <span style={{fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase",color:"rgba(255,255,255,0.5)",display:"block",marginBottom:12}}>By The Numbers</span>
            <h2 className="af-display" style={{fontSize:"clamp(32px,3.5vw,52px)",fontWeight:700,color:"#fff",lineHeight:1.15}}>Results That <em>Speak</em> For Themselves</h2>
          </div></Reveal>
          <div className="stat-grid">
            {stats.map((s,i)=>(
              <motion.div key={i} className="stat-card" initial={{opacity:0,scale:.88}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:.1*i,duration:.65,ease}}>
                <div className="af-display" style={{fontSize:"clamp(44px,4vw,60px)",fontWeight:700,color:T.goldLight,lineHeight:1,marginBottom:12}}><Counter target={s.val}/></div>
                <p style={{color:"rgba(255,255,255,0.72)",fontSize:15,lineHeight:1.6,fontWeight:500}}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════ */}
      <section style={{background:T.white,padding:"100px 6%"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <Reveal><div style={{textAlign:"center",maxWidth:600,margin:"0 auto 60px"}}>
            <span className="af-eyebrow">How It Works</span>
            <h2 className="af-display" style={{fontSize:"clamp(34px,3.8vw,54px)",fontWeight:700,color:T.charcoal,lineHeight:1.12}}>From Onboarding to <em style={{color:T.sage}}>Insights</em></h2>
          </div></Reveal>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:2,position:"relative"}}>
            <div style={{position:"absolute",top:40,left:"12.5%",right:"12.5%",height:1,background:`linear-gradient(90deg,${T.sage},${T.gold},${T.sage})`,opacity:.2,pointerEvents:"none"}}/>
            {[{num:"01",title:"Discovery",desc:"We audit your finance stack and identify gaps."},{num:"02",title:"Setup",desc:"Rapid onboarding with zero disruption."},{num:"03",title:"Automate",desc:"Smart workflows and reporting pipelines."},{num:"04",title:"Scale",desc:"Continuous optimization as you grow."}].map((step,i)=>(
              <motion.div key={i} initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.12*i,duration:.7,ease}} style={{padding:"28px 20px",textAlign:"center"}}>
                <div style={{width:80,height:80,borderRadius:"50%",background:i%2===0?T.cream:T.white,border:`2px solid ${i===0||i===2?T.sage:T.gold}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:`0 0 0 6px ${T.white}`}}>
                  <span className="af-display" style={{fontSize:24,fontWeight:700,color:i%2===0?T.sage:T.gold}}>{step.num}</span>
                </div>
                <h4 style={{fontSize:20,fontWeight:700,fontFamily:"'Cormorant Garamond',serif",color:T.charcoal,marginBottom:8}}>{step.title}</h4>
                <p style={{fontSize:14,lineHeight:1.7,color:T.muted}}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════ */}
      <section id="contact" style={{position:"relative",padding:"120px 6%",overflow:"hidden",minHeight:520,display:"flex",alignItems:"center"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:`url(https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop)`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.3) saturate(1.2)"}}/>
        <div style={{position:"absolute",inset:0,background:`linear-gradient(120deg,rgba(20,20,16,0.88) 0%,rgba(74,114,96,0.38) 100%)`}}/>
        <motion.div style={{position:"relative",zIndex:2,maxWidth:780,margin:"0 auto",textAlign:"center",width:"100%"}}
          initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.9,ease}}>
          <span style={{fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase",color:T.goldLight,opacity:.65,display:"block",marginBottom:22}}>Let's Work Together</span>
          <h2 className="af-display" style={{fontSize:"clamp(40px,5.5vw,72px)",fontWeight:700,color:"#fff",lineHeight:1.07,marginBottom:26}}>
            Transform Your Financial Operations<br/><em style={{color:T.gold}}>With Lotus Analytics</em>
          </h2>
          <p style={{fontSize:17,lineHeight:1.8,color:"rgba(255,255,255,0.6)",maxWidth:560,margin:"0 auto 44px"}}>
            Build a smarter finance ecosystem with automated workflows, intelligent reporting, and scalable accounting solutions.
          </p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <motion.a href="mailto:contact@lotusanalytics.com" className="af-btn-primary" style={{background:T.gold,color:T.charcoal}}
              whileHover={{scale:1.05,boxShadow:`0 20px 50px rgba(201,169,110,0.4)`}} whileTap={{scale:.97}}>
              Schedule Consultation <HiArrowRight/>
            </motion.a>
            <motion.a href="#services" className="af-btn-outline" style={{borderColor:"rgba(255,255,255,0.28)",color:"rgba(255,255,255,0.78)"}}
              whileHover={{background:"rgba(255,255,255,0.08)",borderColor:"rgba(255,255,255,0.55)",color:"#fff",scale:1.03}} whileTap={{scale:.97}}>
              View Services
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}