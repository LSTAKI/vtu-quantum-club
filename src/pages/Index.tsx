import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Instagram, Linkedin, Twitter, Github, Mail, Calendar, MapPin, 
  ChevronRight, MessageCircle, MessageSquare, Code, GraduationCap, 
  Lightbulb, FileText, BookOpen, Award, Mic, TrendingUp, Atom, 
  Sparkles, Cpu, Globe, Users, ArrowUpRight, Play, Quote, ExternalLink,
  CheckCircle2, Compass, Layers, Radio
} from "lucide-react";
import { useState } from "react";
import { QuantumBackground } from "@/components/QuantumBackground";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; description: string; image: string } | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const universityLeadership = {
    tier1: [
      { 
        name: "Dr. Vidyashankar. S", 
        title: "Hon'ble Vice Chancellor, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2024/08/vcne.jpg",
        message: "Welcome to Quantum Club VTU. We are committed to fostering innovation and excellence in quantum computing research and education across Visvesvaraya Technological University."
      }
    ],
    tier2: [
      { 
        name: "Dr. Prasad B Rampure", 
        title: "Registrar, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/10/5.png",
        message: "Supporting student initiatives like Quantum Club is essential for preparing our engineers for the technological breakthroughs of tomorrow."
      },
      { 
        name: "Dr. Ujwal U. J.", 
        title: "Registrar (Evaluation), VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/10/4.png",
        message: "The Quantum Club represents the cutting-edge of student-led research, computational physics, and technological innovation at VTU."
      }
    ],
    tier3: [
      { 
        name: "Dr. Prashant Nayak G.", 
        title: "Finance Officer, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/02/fo11.jpg",
        message: "We take immense pride in supporting student clubs that contribute to academic excellence, hands-on skills, and global competitiveness."
      }
    ]
  };

  const clubLeadership = {
    chiefCoordinator: {
      name: "Dr. Pralhad Rathod",
      title: "Chief Coordinator, Students' Club",
      image: "https://vtu.ac.in/wp-content/uploads/2020/03/pr.png",
      message: "Leading the Students' Club initiatives with dedication to fostering student engagement, leadership, and technical excellence."
    },
    staffCoordinator: {
      name: "Mr. Arpan Satapathy",
      title: "Staff Coordinator, Students' Club",
      image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764150594/Arpan_sir_v8oruj.jpg",
      message: "Mentoring students to achieve their quantum research goals through collaborative club activities and national hackathons."
    }
  };

  const partners = [
    {
      name: "KwantumG Research Labs",
      image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764154870/P-1_cncov3.jpg",
      description: "Pioneering industry-academia collaboration in quantum algorithms, quantum cryptography, and hardware simulation.",
      tag: "Research & Training Partner"
    }
  ];

  const events = [
    {
      name: "Qiskit Fall Fest 2026",
      category: "Workshops",
      image: "/qiskit-fall-fest-2026.jpg",
      description: "Official IBM Quantum X Visvesvaraya Technological University, Belagavi event! Featuring quantum hackathons, Qiskit coding challenges, and hands-on quantum computing sessions. #QFF26 #QiskitFallFest #IBMQuantum",
      date: "Fall 2026 (Dates TBA)",
      location: "VTU Belagavi & Online",
      badge: "Upcoming",
      link: "#events"
    },
    {
      name: "National Quantum Student Summit (NQSS) 2026",
      category: "Talks",
      image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1772981693/WhatsApp_Image_2026-02-12_at_12.35.38_PM_dpgi1n.jpg",
      description: "A landmark two-day summit featuring quantum computing experts, IBM Qiskit advocates, and tech leaders across VTU.",
      date: "10-11 April 2026",
      location: "VTU Main Campus Auditorium",
      badge: "Completed",
      link: "https://quc.vtu.ac.in"
    }
  ];

  const chairperson = {
    name: "KARTHIK RAO R",
    role: "Chairperson",
    description: "Leading Quantum Club VTU with a vision to make quantum computing accessible to all VTU students. Passionate about quantum algorithms, Hamiltonian simulation, and real-world quantum applications.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764170746/karthik_bhai_4_x8awnz.jpg"
  };

  const committees = [
    { 
      name: "Technical Committee", 
      icon: Cpu,
      lead: { 
        name: "Arun Mallikarjun Hikadi", 
        description: "Coordinates technical workshops and hands-on quantum computing sessions. Expert in Qiskit, quantum circuit optimization, and VQE algorithms.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764157705/Arun_H_3_ddcyq1.jpg"
      }
    },
    { 
      name: "Social Media Committee", 
      icon: Radio,
      lead: { 
        name: "Rehan Nadaf", 
        description: "Manages all digital outreach and social platforms. Creates engaging visual content showcasing club breakthroughs and quantum concepts.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164135/IMG_20251027_131513_292_-_Rehan_Nadaf-02_fij9fm.jpg"
      }
    },
    { 
      name: "Members Development", 
      icon: GraduationCap,
      lead: { 
        name: "Varun Kambar", 
        description: "Focuses on student onboarding and skill progression. Organizes mentorship programs, peer learning circles, and beginner bootcamps.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163809/20251125_080215_-_Arun_H_tjrzx2.jpg"
      }
    },
    { 
      name: "Web Designing Committee", 
      icon: Code,
      lead: { 
        name: "TAKI ALTAF TAJUDDIN MULLA", 
        description: "Architects and maintains the official club web platform. Crafting responsive, glassmorphic interactive user experiences.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163560/Taki-1_xrbrpz.jpg"
      }
    },
    { 
      name: "Event Coordination", 
      icon: Calendar,
      lead: { 
        name: "Shreya N Bannadanulmath", 
        description: "Plans and manages seamlessly executed club summits, technical talks, and hackathons with memorable logistics.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164447/IMG_my_photo_-_Shreya_N_B-01_jy9tif.jpg"
      }
    },
    { 
      name: "Industry Relations", 
      icon: Globe,
      lead: { 
        name: "Vaishnavi K S", 
        description: "Strengthens relationships with quantum research labs and industry partners, driving internships, guest lectures, and collaborative research projects.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764153344/Vaishnavi_K_S_ig06zo.jpg"
      }
    },
  ];

  const facultyAdvisors = [
    { name: "Dr. Harish B", title: "Assistant Professor, Dept. of Physics", bio: "Quantum Physics, Condensed Matter, and Quantum Optics.", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163344/Harish_Sir_3_hbkvpk.jpg" },
    { name: "Dr. R. H. Goudar", title: "Associate Professor, Dept. of Computer Science", bio: "Quantum Cryptography, Cloud Computing & Machine Learning.", image: "https://vtu.ac.in/wp-content/uploads/2020/01/rhg.jpg" },
  ];

  const galleryImages = [
    { src: "/nqss-lamp-lighting.jpg", title: "NQSS 2026 Inaugural Lamp Lighting", desc: "Hon'ble Vice Chancellor Dr. Vidyashankar S. & VTU dignitaries inaugurating National Quantum Students' Summit 2026." },
    { src: "/nqss-dignitaries.jpg", title: "NQSS 2026 Summit Stage", desc: "VTU Leadership, Chief Coordinators, and Student Club Chairpersons on stage for National Anthem." },
    { src: "/nqss-audience.jpg", title: "NQSS 2026 Student Delegation", desc: "Student delegates, quantum researchers, and faculty gathered at Dr. A.P.J. Abdul Kalam Auditorium, VTU Belagavi." },
  ];

  const socialCommunity = [
    { platform: "Instagram", handle: "@vtu_quantum_club", link: "https://www.instagram.com/vtu_quantum_club", icon: Instagram, description: "Daily quantum concepts, event highlights & announcements", gradient: "from-pink-500 via-rose-500 to-purple-600" },
    { platform: "WhatsApp Channel", handle: "Quantum Club VTU", link: "https://whatsapp.com/channel/0029VbBqI14AYlUJqqVNwT3O", icon: MessageCircle, description: "Instant updates, workshop alerts & registration links", gradient: "from-emerald-500 via-teal-500 to-cyan-600" },
    { platform: "Discord Community", handle: "VTU Quantum Server", link: "https://discord.com/invite/vvHUNvAppR", icon: MessageSquare, description: "Interactive study groups, Qiskit code help & discussions", gradient: "from-indigo-500 via-purple-500 to-blue-600" },
  ];

  const resources = [
    { title: "Quantum Computing Basics", description: "Comprehensive introductory guide to qubits, Bloch sphere, and quantum logic.", icon: BookOpen, link: "https://qniverse.in/docs-category/user-guide/" },
    { title: "Qiskit SDK Tutorials", description: "Hands-on Jupyter notebooks for quantum circuit creation and simulation.", icon: Code, link: "https://github.com/Qiskit/qiskit-cpp/blob/main/README.md" },
    { title: "Research & Publications", description: "Access breaking research papers in quantum algorithms and physics.", icon: GraduationCap, link: "https://research.ibm.com/publications" },
    { title: "National Quantum Mission", description: "Opportunities, grants, and initiatives supported by DST India.", icon: Lightbulb, link: "https://dst.gov.in/national-quantum-mission-nqm" },
    { title: "IBM Quantum Roadmap", description: "Explore hardware scaling milestones and fault-tolerant quantum computing.", icon: TrendingUp, link: "https://www.ibm.com/roadmaps/quantum/" },
  ];

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSczo-kHNgu3-riXaFIL45rtZmJuxlXnwmfKo_YUdmySmsIDmw/viewform?usp=publish-editor";

  const recentBlogPosts = [
    { title: "Demystifying Superposition and Entanglement in 2026", excerpt: "An intuitive mathematical and visual introduction to quantum superposition...", date: "March 1, 2026", author: "Technical Team", readTime: "5 min read" },
    { title: "Getting Started with Qiskit 1.0 and Python", excerpt: "Step-by-step guide to writing your first quantum circuit and running it on real hardware...", date: "February 20, 2026", author: "Quantum Club VTU", readTime: "7 min read" },
  ];

  const categories = ["All", "Talks", "Workshops", "Competitions"];
  const filteredEvents = selectedCategory === "All" ? events : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-slate-950/40 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <QuantumBackground />
      <TopNav />
      
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-28">
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-cyan-950/40">
              <Atom className="h-4 w-4 animate-spin-slow text-cyan-400 shrink-0" />
              <span>VISVESVARAYA TECHNOLOGICAL UNIVERSITY</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4 w-full">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
                Exploring the Future of <br className="hidden sm:inline" />
                <span className="text-gradient">Quantum Computation</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                VTU Quantum Club is a student-led hub dedicated to quantum algorithms, quantum circuits, information theory, and next-generation computational research.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-extrabold hover:from-cyan-400 hover:to-teal-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 rounded-full px-8"
                asChild
              >
                <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
                  Join the Club <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-full px-7"
                onClick={() => {
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Roadmap <Compass className="ml-2 h-5 w-5 text-cyan-400" />
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">200+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Members</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">15+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Quantum Projects</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">100%</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Student Driven</p>
              </div>
            </div>
          </div>

          {/* Hero Logo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl group flex flex-col items-center justify-center text-center">
              <div className="overflow-hidden rounded-2xl bg-white p-6 w-full flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-500">
                <img 
                  src="/quc-logo.jpg" 
                  alt="QUC Quantum Club VTU Belagavi Logo" 
                  className="w-full max-w-sm h-auto object-contain transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-lg font-bold text-slate-100 tracking-wide">QUANTUM CLUB</h3>
                <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase">Visvesvaraya Technological University, Belagavi</p>
              </div>

              {/* Floating Quantum Floating Pill */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-cyan-500/40 backdrop-blur-md rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                  |ψ⟩
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">Quantum Entanglement</p>
                  <p className="text-[11px] text-cyan-400 font-mono">|Ψ₁⟩ ⊗ |Ψ₂⟩</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              About Our Initiative
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Democratizing <span className="text-gradient">Quantum Knowledge</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg">
              Empowering students across Karnataka with the tools, theory, and hands-on coding skills needed for the quantum revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Quantum Algorithms",
                desc: "Explore Grover's search, Shor's factoring, VQE, and quantum machine learning paradigms."
              },
              {
                icon: Code,
                title: "Qiskit & Circuit Design",
                desc: "Build and execute quantum logic circuits on actual IBM Quantum hardware simulators."
              },
              {
                icon: Users,
                title: "Peer Collaboration",
                desc: "Collaborate in student research teams, hackathons, and national quantum initiatives."
              },
              {
                icon: Globe,
                title: "Industry Exposure",
                desc: "Connect with research labs, industry mentors, and quantum computation pioneers."
              }
            ].map((pillar, idx) => (
              <Card key={idx} className="glass-card glass-card-hover p-6 rounded-2xl space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </Card>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Bridging Theoretical Physics & Computational Engineering
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Founded on the principles of open-access education and collaborative experimentation, Quantum Club VTU serves as a vital bridge for students eager to venture beyond classical computing limitations.
                </p>
                <div className="space-y-3">
                  {[
                    "Hands-on coding labs using Python and IBM Qiskit",
                    "National Quantum Mission alignment & student grants guidance",
                    "Inter-college hackathons and guest lecture series"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl">
                  <img 
                    src="https://res.cloudinary.com/dmzliau0j/image/upload/v1764144138/EV-5_g8x8u5.jpg" 
                    alt="VTU Students Collaboration" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIVERSITY LEADERSHIP SECTION */}
      <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Patrons & Visionaries
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              University Leadership
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Guiding VTU towards technological innovation and academic distinction.
            </p>
          </div>

          {/* Tier 1 - Vice Chancellor */}
          <div className="max-w-3xl mx-auto">
            {universityLeadership.tier1.map((leader, idx) => (
              <Card key={idx} className="glass-card glass-card-hover p-8 rounded-3xl border-cyan-500/30 relative overflow-hidden">
                <Quote className="absolute top-6 right-6 h-20 w-20 text-cyan-500/10 pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative shrink-0">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400/40 shadow-lg shadow-cyan-950/50" 
                    />
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 font-bold text-[10px] px-2.5 whitespace-nowrap">
                      Patron-in-Chief
                    </Badge>
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                      <p className="text-cyan-400 font-medium text-sm">{leader.title}</p>
                    </div>
                    <p className="text-slate-300 text-sm italic leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                      "{leader.message}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 2 - Registrars */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {universityLeadership.tier2.map((leader, idx) => (
              <Card key={idx} className="glass-card glass-card-hover p-6 rounded-3xl border-cyan-500/20 relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500/30" 
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-cyan-400 text-xs font-semibold">{leader.title}</p>
                  </div>
                  <p className="text-slate-300 text-xs italic leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                    "{leader.message}"
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 3 - Finance Officer */}
          <div className="max-w-md mx-auto">
            {universityLeadership.tier3.map((leader, idx) => (
              <Card key={idx} className="glass-card glass-card-hover p-6 rounded-3xl border-cyan-500/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-500/30" 
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-cyan-400 text-xs font-semibold">{leader.title}</p>
                  </div>
                  <p className="text-slate-300 text-xs italic leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                    "{leader.message}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Workshops & Summits
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Participate in guest lectures, hands-on Qiskit bootcamps, and competitive quantum hackathons.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/30"
                    : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((ev, i) => (
              <Card key={i} className="glass-card glass-card-hover overflow-hidden rounded-2xl flex flex-col group border-slate-800">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={ev.image} 
                    alt={ev.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`backdrop-blur-md border text-[11px] font-bold ${
                      ev.badge === "Upcoming"
                        ? "bg-emerald-950/80 border-emerald-400/50 text-emerald-300 shadow-md shadow-emerald-950/50 animate-pulse"
                        : "bg-slate-950/80 border-cyan-400/40 text-cyan-300"
                    }`}>
                      {ev.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ev.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-sm line-clamp-2">
                    {ev.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4 pt-0">
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-bold transition-all rounded-xl" asChild>
                    <a 
                      href={ev.link} 
                      target={ev.link.startsWith("http") ? "_blank" : "_self"} 
                      rel={ev.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {ev.badge === "Upcoming" ? "Registration Opening Soon" : "View Event Details"} <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              NQSS 2026 Event Gallery
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              National Quantum <span className="text-gradient">Students' Summit</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              Moments from the inaugural lamp lighting, summit stage address by VTU leadership, and 500+ student delegates at Dr. A.P.J. Abdul Kalam Auditorium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-cyan-500/50 shadow-lg transition-all"
                onClick={() => setSelectedGalleryImage(img)}
              >
                <div className="aspect-video">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <p className="text-white font-bold text-lg">{img.title}</p>
                  <p className="text-slate-300 text-xs mt-1">{img.desc}</p>
                  <span className="text-cyan-400 text-xs font-semibold mt-3 flex items-center gap-1">
                    Click to expand <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT CLUB LEADERSHIP & FACULTY ADVISORS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Mentorship & Guidance
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Coordinators & Faculty Advisors
            </h2>
          </div>

          {/* Coordinators */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card glass-card-hover p-6 rounded-3xl border-cyan-500/20 text-center space-y-4">
              <img 
                src={clubLeadership.chiefCoordinator.image} 
                alt={clubLeadership.chiefCoordinator.name} 
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400/40" 
              />
              <div>
                <h3 className="text-xl font-bold text-white">{clubLeadership.chiefCoordinator.name}</h3>
                <p className="text-cyan-400 text-xs font-semibold">{clubLeadership.chiefCoordinator.title}</p>
              </div>
              <p className="text-slate-300 text-xs italic bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                "{clubLeadership.chiefCoordinator.message}"
              </p>
            </Card>

            <Card className="glass-card glass-card-hover p-6 rounded-3xl border-cyan-500/20 text-center space-y-4">
              <img 
                src={clubLeadership.staffCoordinator.image} 
                alt={clubLeadership.staffCoordinator.name} 
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400/40" 
              />
              <div>
                <h3 className="text-xl font-bold text-white">{clubLeadership.staffCoordinator.name}</h3>
                <p className="text-cyan-400 text-xs font-semibold">{clubLeadership.staffCoordinator.title}</p>
              </div>
              <p className="text-slate-300 text-xs italic bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                "{clubLeadership.staffCoordinator.message}"
              </p>
            </Card>
          </div>

          {/* Faculty Advisors */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl font-bold text-center text-white">Faculty Advisors</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {facultyAdvisors.map((advisor, idx) => (
                <Card key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border-slate-800 flex items-center gap-5">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400/30 shrink-0" 
                  />
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">{advisor.name}</h4>
                    <p className="text-xs text-cyan-400">{advisor.title}</p>
                    <p className="text-xs text-slate-400 mt-2">{advisor.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMITTEES & TEAM */}
      <section id="committees" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Core Executive Team
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Student Leadership & Committees
            </h2>
          </div>

          {/* Chairperson Highlight */}
          <div className="max-w-lg mx-auto">
            <Card 
              className="glass-card glass-card-hover p-8 rounded-3xl border-cyan-400/50 shadow-2xl shadow-cyan-950/80 text-center space-y-4 cursor-pointer relative group"
              onClick={() => setSelectedMember(chairperson)}
            >
              <Badge className="bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-extrabold text-xs px-3 py-1 mx-auto">
                CHAIRPERSON
              </Badge>
              <img 
                src={chairperson.image} 
                alt={chairperson.name} 
                className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-cyan-400 shadow-xl group-hover:scale-105 transition-transform" 
              />
              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {chairperson.name}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mt-1">
                  Quantum Club VTU Lead
                </p>
              </div>
              <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed">
                {chairperson.description}
              </p>
              <span className="text-xs text-cyan-400 font-semibold inline-flex items-center gap-1">
                View Full Bio <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </Card>
          </div>

          {/* Committees Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-white">Committee Leads</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((com, idx) => (
                <Card 
                  key={idx} 
                  className="glass-card glass-card-hover p-6 rounded-2xl border-slate-800 text-center space-y-4 cursor-pointer group"
                  onClick={() => setSelectedMember({ ...com.lead, role: `${com.name} Lead` })}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto group-hover:bg-cyan-500/20 transition-all">
                    <com.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {com.name}
                    </h4>
                    <p className="text-xs text-cyan-400 font-medium">{com.lead.name}</p>
                  </div>
                  <img 
                    src={com.lead.image} 
                    alt={com.lead.name} 
                    className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-cyan-500/30 group-hover:scale-105 transition-transform" 
                  />
                  <span className="text-xs text-slate-400 group-hover:text-cyan-300 transition-colors inline-flex items-center gap-1">
                    Click to view profile <ChevronRight className="h-3 w-3" />
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVERS SECTION */}
      <section id="achievers" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Excellence & Recognition
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Quantum <span className="text-gradient">Achievers</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Celebrating global Nobel-winning quantum pioneers alongside exceptional VTU student innovators.
            </p>
          </div>

          {/* Worldwide Achievers */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center justify-center gap-2">
              <Award className="h-6 w-6" /> Global Quantum Pioneers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Clarke",
                  title: "Professor of Physics, UC Berkeley",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764084867/John_Clarke_emhllq.webp",
                  description: "Pioneered macroscopic quantum mechanical tunnelling and energy quantisation in electric circuits, forming the groundwork for superconducting qubits."
                },
                {
                  name: "Michel Devoret",
                  title: "Professor of Applied Physics, Yale University",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764087575/michel_bpzmaf.webp",
                  description: "Discovered macroscopic quantum effects in Josephson junction circuits, enabling transmon qubit technology."
                },
                {
                  name: "John Martinis",
                  title: "Quantum Physics Pioneer",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764087999/John-M-Martinis_ctwxyi.webp",
                  description: "Demonstrated quantum supremacy with 53-qubit Sycamore quantum processor at Google Quantum AI."
                }
              ].map((achiever, i) => (
                <Card key={i} className="glass-card glass-card-hover p-6 rounded-2xl border-slate-800 text-center space-y-4">
                  <img 
                    src={achiever.image} 
                    alt={achiever.name} 
                    className="w-32 h-32 rounded-2xl object-cover mx-auto border-2 border-cyan-500/30" 
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{achiever.name}</h4>
                    <p className="text-xs text-cyan-400 font-medium">{achiever.title}</p>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{achiever.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Campus Achievers */}
          <div className="space-y-8 pt-8">
            <h3 className="text-2xl font-bold text-teal-400 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6" /> VTU Campus Achievers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "To Be Updated",
                  title: "To Be Updated",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764172893/Gemini_Generated_Image_3l9dkv3l9dkv3l9d_hp9gtk.png",
                  description: "Details to be updated soon."
                },
                {
                  name: "To Be Updated",
                  title: "To Be Updated",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764172892/Gemini_Generated_Image_3l9dkv3l9dkv3l9d_1_tggwmq.png",
                  description: "Details to be updated soon."
                },
                {
                  name: "To Be Updated",
                  title: "To Be Updated",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764172892/Gemini_Generated_Image_3l9dkv3l9dkv3l9d_2_dpl6l6.png",
                  description: "Details to be updated soon."
                }
              ].map((achiever, i) => (
                <Card key={i} className="glass-card glass-card-hover p-6 rounded-2xl border-slate-800 text-center space-y-4">
                  <img 
                    src={achiever.image} 
                    alt={achiever.name} 
                    className="w-32 h-32 rounded-2xl object-cover mx-auto border-2 border-teal-500/30" 
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{achiever.name}</h4>
                    <p className="text-xs text-teal-400 font-medium">{achiever.title}</p>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{achiever.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST SECTION */}
      <section id="podcast" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto">
            <Mic className="h-8 w-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Quantum <span className="text-gradient">Podcast Series</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Listen to insightful conversations with quantum researchers, IBM Qiskit developers, and tech visionaries.
          </p>

          <Card className="glass-card p-8 sm:p-12 rounded-3xl border-cyan-500/30 max-w-3xl mx-auto space-y-6 text-left relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-lg shadow-cyan-950">
                <Play className="h-10 w-10 text-slate-950 fill-slate-950" />
              </div>
              <div className="space-y-2">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-[10px]">
                  SEASON 1 • EPISODE 1 (TEASER)
                </Badge>
                <h3 className="text-xl font-bold text-white">
                  "What Happens When Qubits Entangle?"
                </h3>
                <p className="text-xs text-slate-400">
                  Featuring VTU Physics Faculty & Student Researchers discussing Einstein-Podolsky-Rosen paradox.
                </p>
                {/* Audio Wave Visualizer */}
                <div className="flex items-center gap-1.5 pt-2">
                  <span className="w-1 h-5 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="w-1 h-8 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1 h-4 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="w-1 h-9 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1 h-3 bg-slate-500 rounded-full" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* RESOURCES & BLOG SECTION */}
      <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Knowledge Hub
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Learning <span className="text-gradient">Resources</span>
            </h2>
          </div>

          {/* Resources */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {resources.map((res, idx) => (
              <a key={idx} href={res.link} target="_blank" rel="noopener noreferrer">
                <Card className="glass-card glass-card-hover p-6 rounded-2xl border-slate-800 text-center space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto">
                      <res.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{res.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{res.description}</p>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold inline-flex items-center justify-center gap-1 pt-2">
                    Open <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Collaborations
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Industry & Research Partners
            </h2>
          </div>

          {partners.map((partner, idx) => (
            <Card key={idx} className="glass-card p-8 rounded-3xl border-cyan-500/30 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">
                  {partner.tag}
                </Badge>
                <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{partner.description}</p>
              </div>
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl">
                <img src={partner.image} alt={partner.name} className="w-full h-auto object-cover" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* COMMUNITY & CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-[2px] relative border-t border-slate-900/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-950/40 px-3 py-1">
              Get Connected
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Join the <span className="text-gradient">Quantum Community</span>
            </h2>
          </div>

          {/* Social Channels */}
          <div className="grid md:grid-cols-3 gap-8">
            {socialCommunity.map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                <Card className="glass-card glass-card-hover p-8 rounded-3xl text-center space-y-4 h-full border-slate-800">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${social.gradient} flex items-center justify-center mx-auto shadow-lg`}>
                    <social.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{social.platform}</h3>
                  <p className="text-cyan-400 text-xs font-semibold">{social.handle}</p>
                  <p className="text-slate-400 text-xs">{social.description}</p>
                  <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 rounded-xl font-bold">
                    Connect
                  </Button>
                </Card>
              </a>
            ))}
          </div>

          {/* Form CTA Box */}
          <div className="glass-card p-10 sm:p-14 rounded-3xl border-cyan-500/30 text-center space-y-6 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Dive into Quantum Computing?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Submit your member registration application to join VTU Quantum Club workshops, research groups, and national hackathons.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-extrabold hover:from-cyan-400 hover:to-teal-300 rounded-full px-10 shadow-xl shadow-cyan-500/30" asChild>
              <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" /> Submit Membership Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-8 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Atom className="h-5 w-5 text-cyan-400" />
            <span className="font-bold text-white tracking-wider">QUANTUM CLUB VTU</span>
            <span className="text-slate-500">| Visvesvaraya Technological University</span>
          </div>
          <p>© {new Date().getFullYear()} Quantum Club VTU. All rights reserved.</p>
        </div>
      </footer>

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md bg-slate-950 border border-cyan-500/40 text-slate-100 p-6 rounded-3xl backdrop-blur-2xl">
          {selectedMember && (
            <div className="space-y-4 text-center">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-400 shadow-xl" 
              />
              <div>
                <DialogTitle className="text-2xl font-bold text-white">{selectedMember.name}</DialogTitle>
                <p className="text-cyan-400 text-xs font-semibold mt-1">{selectedMember.role}</p>
              </div>
              <DialogDescription className="text-slate-300 text-sm leading-relaxed pt-2">
                {selectedMember.description}
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Gallery Lightbox Dialog */}
      <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-3xl bg-slate-950 border border-cyan-500/40 text-slate-100 p-4 rounded-3xl backdrop-blur-2xl">
          {selectedGalleryImage && (
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-800">
                <img src={selectedGalleryImage.src} alt={selectedGalleryImage.title} className="w-full h-auto object-cover" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-white">{selectedGalleryImage.title}</DialogTitle>
                <DialogDescription className="text-slate-300 text-xs mt-1">
                  {selectedGalleryImage.desc}
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
