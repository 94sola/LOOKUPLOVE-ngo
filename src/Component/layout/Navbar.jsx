import { useState, useEffect, useRef } from "react";   
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import logo from "../../assets/images/logo remove.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const [mainOpen, setMainOpen] = useState(false);
  const [levelOne, setLevelOne] = useState(null);
  const [levelTwo, setLevelTwo] = useState(null);

  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [mobileLevelOne, setMobileLevelOne] = useState("counselling");
  const [mobileLevelTwo, setMobileLevelTwo] = useState(null);

  const dropdownTimer = useRef(null);
  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const mobileUnderlineRef = useRef(null);

  const bookLink = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";

  const handleNavigate = () => {
    setOpen(false);
    setMobileDropdown(false);
    setMainOpen(false);
    setLevelOne(null);
    setLevelTwo(null);
    setMobileLevelOne("counselling");
    setMobileLevelTwo(null);
  };

  // SCROLL
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const programs = {
    counselling: [
      { name: "Relationships & Life Stages", items: ["Married Couples", "Engaged Couples", "Singles"] },
      { name: "Marriage in Diaspora", items: ["Long Distance", "Immigration Stress", "Cultural Adjustment"] },
      { name: "Parenting", items: ["New Parents", "Teen Guidance", "Family Counseling"] },
    ],
    support: ["Orphanage Home", "Divorced Individuals", "Widows & Widowers"],
  };

  // Desktop underline
  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const parent = navRef.current.getBoundingClientRect();
    underlineRef.current.style.width = `${rect.width}px`;
    underlineRef.current.style.transform = `translateX(${rect.left - parent.left}px)`;
  };
  const handleMouseLeave = () => {
    underlineRef.current.style.width = "0px";
  };

  // Desktop dropdown logic
  const openMenu = () => { clearTimeout(dropdownTimer.current); setMainOpen(true); };
  const closeMenu = () => { 
    dropdownTimer.current = setTimeout(() => {
      setMainOpen(false); setLevelOne(null); setLevelTwo(null);
    }, 250);
  };

  // Mobile underline animation
  const handleMobileUnderline = (tab) => {
    if (mobileUnderlineRef.current) {
      mobileUnderlineRef.current.style.transform = tab === "counselling" ? "translateX(0%)" : "translateX(100%)";
    }
  };

  // Framer motion variants for mobile flyouts
  const flyoutVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  };

  return (
    <>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-[1000] transition-transform duration-300 ${open ? "translate-y-0" : hidden ? "-translate-y-full" : "translate-y-0"}`}>
        {/* TOP BAR */}
        <div className="hidden md:block bg-[#6a1b1b] text-white text-sm overflow-hidden">
          <div className="whitespace-nowrap animate-marquee px-6 py-2 flex gap-10">
            <span>❤️ Supporting relationships, healing hearts</span>
            <span>💍 Marriage counseling & wellness</span>
            <span>🤝 Building stronger families</span>
            <span>🌍 Empowering love across cultures</span>
            <span>💬 Safe space for healing and growth</span>
            <span>👨‍👩‍👧‍👦 Raising stronger families</span>
            <span>🕊️ Restoring hope in relationships</span>
            <span>📅 Book a session today</span>
          </div>
        </div>

        {/* NAV */}
        <nav className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-[64px]">
            <Link to="/" onClick={handleNavigate}><img src={logo} className="h-10 md:h-12"/></Link>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-6 md:gap-10 relative" ref={navRef} onMouseLeave={handleMouseLeave}>
              <NavLink to="/" onMouseEnter={handleMouseEnter}>Home</NavLink>
              <NavLink to="/about" onMouseEnter={handleMouseEnter}>About</NavLink>

              {/* Programs dropdown */}
              <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <div className="flex items-center gap-1 cursor-pointer">Programs <FiChevronDown /></div>
                <AnimatePresence>
                  {mainOpen && (
                    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} className="absolute top-full left-0 mt-3 w-56 md:w-64 bg-white shadow-xl rounded-md border">
                      <div onMouseEnter={()=>setLevelOne("counselling")} className="px-4 py-3 flex justify-between hover:bg-gray-100 cursor-pointer">Counselling <FiChevronDown size={14}/></div>
                      <div onMouseEnter={()=>setLevelOne("support")} className="px-4 py-3 flex justify-between hover:bg-gray-100 cursor-pointer">Support <FiChevronDown size={14}/></div>

                      {levelOne==="counselling" && (
                        <div className="absolute left-full top-0 w-56 md:w-64 bg-white shadow-xl border rounded-md">
                          {programs.counselling.map((item,i)=>(<div key={item.name} onMouseEnter={()=>setLevelTwo(i)} className="relative px-4 py-3 flex justify-between hover:bg-gray-100 cursor-pointer">{item.name} <FiChevronDown size={14}/>
                              {levelTwo===i && (
                                <div className="absolute left-full top-0 w-56 md:w-64 bg-white shadow-xl border rounded-md">{item.items.map(sub=>(<Link key={sub} to={`/programs/${sub.toLowerCase().replace(/ /g,"-")}`} onClick={handleNavigate} className="block px-4 py-3 hover:bg-gray-100">{sub}</Link>))}</div>
                              )}
                          </div>))}
                        </div>
                      )}

                      {levelOne==="support" && (
                        <div className="absolute left-full top-0 w-56 md:w-64 bg-white shadow-xl border rounded-md">{programs.support.map(item=>(<Link key={item} to={`/programs/${item.toLowerCase().replace(/ /g,"-")}`} onClick={handleNavigate} className="block px-4 py-3 hover:bg-gray-100">{item}</Link>))}</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/gallery" onMouseEnter={handleMouseEnter}>Gallery</NavLink>
              <NavLink to="/contact" onMouseEnter={handleMouseEnter}>Contact</NavLink>

              <span ref={underlineRef} className="absolute bottom-0 left-0 h-[2px] bg-[#6a1b1b] transition-all duration-300"/>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex gap-4 text-gray-600">
                <FaInstagram className="hover:text-[#6a1b1b]"/>
                <FaFacebookF className="hover:text-[#6a1b1b]"/>
                <FaTwitter className="hover:text-[#6a1b1b]"/>
              </div>
              <a href={bookLink} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-md border hover:bg-gray-100">Book Session</a>
              <Link to="/donate" className="bg-[#6a1b1b] text-white px-5 py-2 rounded-md">Donate</Link>
            </div>

            <button onClick={()=>setOpen(true)} className="md:hidden"><HiOutlineMenuAlt3 size={26}/></button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed top-0 left-0 w-full min-h-screen overflow-x-hidden bg-white z-[1200] transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex justify-end p-4 border-b">
          <IoMdClose size={26} onClick={handleNavigate}/>
        </div>

        <div className="px-6 py-8 flex flex-col space-y-6 text-[17px] font-medium text-gray-900">
          <Link to="/" onClick={handleNavigate}>Home</Link>
          <Link to="/about" onClick={handleNavigate}>About</Link>

          {/* MOBILE PROGRAMS */}
          <div>
            <div onClick={()=>setMobileDropdown(!mobileDropdown)} className="flex justify-between items-center cursor-pointer">
              <span>Programs</span>
              <FiChevronDown className={`transition-transform ${mobileDropdown ? "rotate-180" : ""}`}/>
            </div>

            <AnimatePresence>
              {mobileDropdown && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden mt-4 flex flex-col">
                  {/* LEVEL 1 BUTTONS */}
                  <div className="flex gap-4 border-b pb-2 relative min-w-0">
                    <button 
                      onClick={()=>{setMobileLevelOne("counselling"); handleMobileUnderline("counselling")}} 
                      className="flex-1 min-w-0 flex justify-between items-center font-semibold text-left"
                    >
                      Counselling <FiChevronDown className={`transition-transform ${mobileLevelOne==="counselling"?"rotate-180":""}`}/>
                    </button>
                    <button 
                      onClick={()=>{setMobileLevelOne("support"); handleMobileUnderline("support")}} 
                      className="flex-1 min-w-0 flex justify-between items-center font-semibold text-left"
                    >
                      Support <FiChevronDown className={`transition-transform ${mobileLevelOne==="support"?"rotate-180":""}`}/>
                    </button>
                    {/* SLIDING UNDERLINE */}
                    <span ref={mobileUnderlineRef} className="absolute bottom-0 left-0 h-[2px] bg-[#6a1b1b] w-1/2 transition-transform duration-300"/>
                  </div>

                  {/* LEVEL 2 SIDE-BY-SIDE */}
                  <div className="flex gap-6 mt-3 relative">
                    {/* COUNSELLING */}
                    {mobileLevelOne==="counselling" && (
                      <AnimatePresence>
                        <motion.div key="counselling-panel" variants={flyoutVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col gap-2">
                          {programs.counselling.map((item,i)=>(
                            <div key={item.name}>
                              <div onClick={()=>setMobileLevelTwo(mobileLevelTwo===i?null:i)} className="flex justify-between items-center text-[#6a1b1b] cursor-pointer font-medium">
                                {item.name} <FiChevronDown className={`transition-transform ${mobileLevelTwo===i?"rotate-180":""}`}/>
                              </div>
                              {mobileLevelTwo===i && (
                                <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="ml-4 text-gray-700 flex flex-col gap-1">
                                  {item.items.map(sub=>(
                                    <Link key={sub} to={`/programs/${sub.toLowerCase().replace(/ /g,"-")}`} onClick={handleNavigate} className="px-2 py-1 hover:bg-gray-100">{sub}</Link>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    )}

                    {/* SUPPORT */}
                    {mobileLevelOne==="support" && (
                      <AnimatePresence>
                        <motion.div key="support-panel" variants={flyoutVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 flex flex-col gap-2">
                          {programs.support.map(item=>(
                            <Link key={item} to={`/programs/${item.toLowerCase().replace(/ /g,"-")}`} onClick={handleNavigate} className="px-2 py-1 text-[#6a1b1b] hover:bg-gray-100">{item}</Link>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/gallery" onClick={handleNavigate}>Gallery</Link>
          <Link to="/contact" onClick={handleNavigate}>Contact</Link>

          <div className="pt-6 flex flex-col gap-3">
            <a href={bookLink} target="_blank" rel="noopener noreferrer" className="text-center border py-2.5 rounded-md">Book Session</a>
            <Link to="/donate" className="text-center bg-[#6a1b1b] text-white py-2.5 rounded-md">Donate</Link>
          </div>

          <div className="flex gap-5 pt-6 text-gray-700">
            <FaInstagram/><FaFacebookF/><FaTwitter/>
          </div>
        </div>
      </div>
    </>
  );
}