import { Button } from "@/components/ui/button";
import { 
  Home, Calendar, BookOpen, FileText, Users, Mail, Award, Mic, 
  Handshake, Atom, Menu, X, Sparkles, ChevronDown 
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: BookOpen },
    { label: "Leadership", href: "#leadership", icon: Users },
    { label: "Events", href: "#events", icon: Calendar },
    { label: "Gallery", href: "#gallery", icon: Sparkles },
    { label: "Team", href: "#committees", icon: Users },
    { label: "Resources", href: "#resources", icon: BookOpen },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const moreNavItems = [
    { label: "Achievers", href: "#achievers", icon: Award },
    { label: "Podcast", href: "#podcast", icon: Mic },
    { label: "Partners", href: "#partners", icon: Handshake },
  ];

  const allNavItems = [...primaryNavItems, ...moreNavItems];

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSczo-kHNgu3-riXaFIL45rtZmJuxlXnwmfKo_YUdmySmsIDmw/viewform?usp=header";

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
      scrolled 
        ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/40" 
        : "bg-slate-950/40 backdrop-blur-md border-b border-cyan-500/10 py-4"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
          className="flex items-center gap-3 group cursor-pointer shrink-0"
        >
          <div className="h-10 sm:h-11 px-2 py-1 rounded-xl bg-white/95 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-white shadow-md shadow-cyan-500/20 transition-all duration-300">
            <img src="/quc-logo.jpg" alt="QUC Quantum Club VTU" className="h-full w-auto object-contain rounded-md" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm sm:text-base tracking-wider text-slate-100 flex items-center gap-1.5 whitespace-nowrap">
              QUANTUM CLUB <span className="text-cyan-400 font-extrabold text-[11px] px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">VTU</span>
            </span>
            <span className="text-[10px] text-cyan-400/70 tracking-widest uppercase hidden sm:inline whitespace-nowrap">Visvesvaraya Technological University, Belagavi</span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-900/70 backdrop-blur-md border border-cyan-500/20 rounded-full px-3 py-1.5 shadow-inner shadow-cyan-950/40 shrink-0">
          {primaryNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="px-2.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <item.icon className="h-3.5 w-3.5 text-cyan-400/80 shrink-0" />
              {item.label}
            </button>
          ))}

          {/* More Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-2.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200 flex items-center gap-1 whitespace-nowrap outline-none">
                More
                <ChevronDown className="h-3 w-3 text-cyan-400/80" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-950/95 backdrop-blur-xl border border-cyan-500/30 text-slate-200 p-1.5 rounded-2xl shadow-xl w-44">
              {moreNavItems.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-xl hover:bg-cyan-500/15 hover:text-cyan-300 cursor-pointer focus:bg-cyan-500/15 focus:text-cyan-300 outline-none"
                >
                  <item.icon className="h-4 w-4 text-cyan-400" />
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-extrabold hover:from-cyan-400 hover:to-teal-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 rounded-full px-5 py-2 text-xs"
            asChild
          >
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
              Join Club
            </a>
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-slate-200 hover:text-cyan-400 transition-colors shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 p-6 shadow-2xl shadow-cyan-950/50 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
            {allNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
              >
                <item.icon className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>
          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-extrabold hover:from-cyan-400 hover:to-teal-300 rounded-xl py-2.5 text-sm"
            asChild
          >
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
              Join Quantum Club VTU
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};


