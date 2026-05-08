// components/Testimonials.jsx — framer-motion
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { quote:"Lotus Analytics transformed how we manage our finances and HR. The Centraverse™ platform gave us visibility we never had before. Our team efficiency improved dramatically.", author:"Rajesh Kumar",role:"CEO, TechVenture Solutions",initials:"RK",color:"#4a7260" },
  { quote:"The process automation alone saved us 40 hours a week. Lotus is not just a vendor — they truly work like it's their own business. Exceptional dedication and expertise.", author:"Priya Sharma",role:"COO, Meridian Retail Group",initials:"PS",color:"#c9922a" },
  { quote:"Switching to Lotus was the best business decision we made last year. The integration was seamless, the team was responsive, and the results speak for themselves.", author:"Aditya Mehta",role:"MD, Pinnacle Manufacturing",initials:"AM",color:"#4a7260" },
];
const ease=[0.16,1,0.3,1];
const Testimonials=()=>(
  <>
    <style>{`.testimonials{background:var(--cream,#f5f0e8);padding:40px 5vw}.testimonials-inner{max-width:1280px;margin:0 auto}.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px}.testimonial-card{background:#fff;border-radius:24px;padding:40px 36px;position:relative;overflow:hidden;border:1px solid rgba(0,0,0,0.05)}.testimonial-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#4a7260,#c9a96e);transform:scaleX(0);transform-origin:left;transition:transform .5s ease}.testimonial-card:hover::before{transform:scaleX(1)}.quote-mark{font-family:'Cormorant Garamond',serif;font-size:80px;line-height:.8;color:rgba(74,114,96,0.12);display:block;margin-bottom:12px;font-weight:700}.testimonial-stars{display:flex;gap:3px;margin-bottom:16px}.star{color:#c9a96e;font-size:14px}.testimonial-text{font-size:15px;line-height:1.8;color:#2c2c28;margin-bottom:32px;font-style:italic}.testimonial-author{display:flex;align-items:center;gap:14px;border-top:1px solid rgba(0,0,0,0.06);padding-top:20px}.author-avatar{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:700;color:#fff;flex-shrink:0}.author-name{font-size:15px;font-weight:600;color:#1a1a18;margin-bottom:2px}.author-role{font-size:12px;color:#9a9a90}@media(max-width:1024px){.testimonials-grid{grid-template-columns:1fr;max-width:560px;margin-left:auto;margin-right:auto}}`}</style>
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
         <div className="sc-header">
          <div className="section-eyebrow">Client Stories</div>
          <h2 className="section-title">
            Trusted by  <em> across industries</em>
          </h2>
         
        </div>
        {/* <motion.div className="section-eyebrow" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,ease}}>Client Stories</motion.div> */}
        {/* <motion.h2 className="section-title" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.8,ease}}>Trusted by <em>businesses</em><br/>across industries</motion.h2> */}
        <div className="testimonials-grid">
          {testimonials.map((t,i)=>(
            <motion.div key={i} className="testimonial-card"
              initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.12,duration:.7,ease}}
              whileHover={{y:-8,boxShadow:"0 24px 64px rgba(0,0,0,0.1)"}}>
              <span className="quote-mark">"</span>
              <div className="testimonial-stars">{"★★★★★".split("").map((s,j)=><span key={j} className="star">{s}</span>)}</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <motion.div className="author-avatar" style={{background:t.color}} whileHover={{scale:1.1,rotate:5}}>{t.initials}</motion.div>
                <div><div className="author-name">{t.author}</div><div className="author-role">{t.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default Testimonials;