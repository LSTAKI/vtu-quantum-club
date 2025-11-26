import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Instagram, Linkedin, Twitter, Github, Mail, Calendar, MapPin, ChevronDown, MessageCircle, MessageSquare, Code, GraduationCap, Lightbulb, FileText, BookOpen, Award, Mic, TrendingUp } from "lucide-react";
import { useState } from "react";
import quantumHero from "@/assets/quantum-hero.png";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import { QuantumBackground } from "@/components/QuantumBackground";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; description: string; image: string } | null>(null);

  const universityLeadership = {
    tier1: [
      { 
        name: "Dr. Vidyashankar. S", 
        title: "Vice Chancellor, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2024/08/vcne.jpg",
        message: "Welcome to Quantum Club VTU. We are committed to fostering innovation and excellence in quantum computing research and education."
      }
    ],
    tier2: [
      { 
        name: "Dr. Prasad B Rampure", 
        title: "Registrar, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/10/5.png",
        message: "Supporting student initiatives like Quantum Club is essential for preparing our students for the technological challenges of tomorrow."
      },
      { 
        name: "Dr. Ujwal U. J.", 
        title: "Registrar (Evaluation), VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/10/4.png",
        message: "The Quantum Club represents the cutting-edge of student-led research and innovation at VTU."
      }
    ],
    tier3: [
      { 
        name: "Dr. Prashant Nayak G.", 
        title: "Finance Officer, VTU", 
        image: "https://vtu.ac.in/wp-content/uploads/2025/02/fo11.jpg",
        message: "We are proud to support student clubs that contribute to academic excellence and practical skill development."
      }
    ]
  };

  const clubLeadership = {
    chiefCoordinator: {
      name: "Dr. Pralhad Rathod",
      title: "Chief Coordinator, Students' Club",
      image: "https://vtu.ac.in/wp-content/uploads/2020/03/pr.png",
      message: "Leading the Students' Club initiatives with dedication to fostering student engagement and excellence."
    },
    staffCoordinator: {
      name: "Mr. Arpan Satapathy",
      title: "Staff Coordinator, Students' Club",
      image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764150594/Arpan_sir_v8oruj.jpg",
      message: "Supporting and mentoring students to achieve their goals through collaborative club activities."
    }
  };

  const partners = [
    {
      name: "KwantumG Research Labs",
      Image:"https://res.cloudinary.com/dmzliau0j/image/upload/v1764155417/p-3_hbkqi2.jpg",
   
    }
  ];

  const events: any[] = [];

  const chairperson = {
    name: "KARTHIK RAO R",
    role: "Chair",
    description: "Leading the Quantum Club VTU with a vision to make quantum computing accessible to all students. Passionate about quantum algorithms and their real-world applications.",
    image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1763922453/karthik_bhai_2_dzqcez.jpg"
  };

  const committees = [
    { 
      name: "Technical Committee", 
      lead: { 
        name: "Arun Mallikarjun Hikadi", 
        description: "Coordinates technical workshops and hands-on quantum computing sessions. Expert in Qiskit and quantum circuit design.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764157705/Arun_H_3_ddcyq1.jpg"
      }
    },
    { 
      name: "Social Media Committee", 
      lead: { 
        name: "Rehan Nadaf", 
        description: "Manages all social media platforms and digital presence. Creates engaging content to showcase club activities and quantum concepts.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164135/IMG_20251027_131513_292_-_Rehan_Nadaf-02_fij9fm.jpg"
      }
    },
    { 
      name: "Members Development Committee", 
      lead: { 
        name: "Varun Kambar", 
        description: "Focuses on member growth and skill development. Organizes mentorship programs and learning paths for quantum computing.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163809/20251125_080215_-_Arun_H_tjrzx2.jpg"
      }
    },
    { 
      name: "Web Designing Committee", 
      lead: { 
        name: "TAKI ALTAF TAJUDDIN MULLA", 
        description: "Develops and maintains the club website and digital platforms. Ensures a seamless online experience for all members.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163560/Taki-1_xrbrpz.jpg"
      }
    },
    { 
      name: "Event Coordination Committee", 
      lead: { 
        name: "Shreya N Bannadanulmath", 
        description: "Plans and executes all club events, workshops, and competitions. Ensures smooth logistics and memorable experiences.",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764164447/IMG_my_photo_-_Shreya_N_B-01_jy9tif.jpg"
      }
    },
    { 
      name: "Industry Relations Committee", 
      lead: { 
        name: "Vaishnavi K S", 
        description: "The Industry Relations Committee strengthens connections between the institute and industry by coordinating partnerships, expert sessions, and collaborative opportunities. It works to enhance students’ practical exposure and align them with current industry standards..",
        image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764153344/Vaishnavi_K_S_ig06zo.jpg"
      }
    },
  ];

  const facultyAdvisors = [
    { name: "Dr. Harish B", title: "Assistant Professor, Department of Physics", bio: "Quantum Mechanics.", image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163344/Harish_Sir_3_hbkvpk.jpg" },
    { name: "Dr. R. H. Goudar", title: "Associate Professor, Department of Computer Science", bio: "Specializes in Machine Learning.", image: "https://vtu.ac.in/wp-content/uploads/2020/01/rhg.jpg" },
  ];

  const socialCommunity = [
    { platform: "Instagram", handle: "@vtu_quantum_club", link: "https://www.instagram.com/vtu_quantum_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: Instagram, description: "Follow us for daily updates", color: "from-pink-500 to-purple-500" },
    { platform: "WhatsApp", handle: "Quantum Club VTU Channel", link: "https://whatsapp.com/channel/0029VbBqI14AYlUJqqVNwT3O", icon: MessageCircle, description: "Join our broadcast channel", color: "from-green-500 to-teal-500" },
    { platform: "Discord", handle: "Quantum Club VTU Server", link: "https://discord.com/invite/vvHUNvAppR", icon: MessageSquare, description: "Join our community", color: "from-indigo-500 to-blue-500" },
  ];

  const resources = [
    { title: "Quantum Computing Basics", description: "Introductory materials", icon: BookOpen, link: "https://qniverse.in/docs-category/user-guide/" },
    { title: "Qiskit Tutorials", description: "Hands-on coding tutorials", icon: Code, link: "https://github.com/Qiskit/qiskit-cpp/blob/main/README.md" },
    { title: "Research Papers", description: "Latest research", icon: GraduationCap, link: "https://research.ibm.com/publications" },
    { title: "Oportunities", description: "Career", icon: Lightbulb, link: "https://dst.gov.in/national-quantum-mission-nqm" },
    { title: "Future Trends", description: "Emerging quantum technologies", icon: TrendingUp, link: "https://www.ibm.com/roadmaps/quantum/" },
  ];

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSczo-kHNgu3-riXaFIL45rtZmJuxlXnwmfKo_YUdmySmsIDmw/viewform?usp=publish-editor"; // Replace with your actual Google Form link
  const blogLink = "https://example.com/blog"; // Replace with your blog link
  const podcastLink = "https://example.com/podcast"; // Replace with your podcast link
  const nobelPrizeLink = "https://example.com/nobel"; // Replace with your Nobel Prize page link

  const recentBlogPosts = [
    { title: "Getting Started with Quantum Computing", excerpt: "A beginner's guide...", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop", date: "March 1, 2025", author: "Team" },
    { title: "Quantum Algorithms Explained", excerpt: "Deep dive into algorithms...", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", date: "Feb 28, 2025", author: "Team" },
  ];

  const socialMedia = [
    { icon: Instagram, label: "@quantumclubvtu", link: "https://instagram.com/quantumclubvtu" },
    { icon: Linkedin, label: "Quantum Club VTU", link: "https://linkedin.com/company/quantumclubvtu" },
    { icon: Twitter, label: "@quantumclubvtu", link: "https://twitter.com/quantumclubvtu" },
    { icon: Github, label: "quantumclubvtu", link: "https://github.com/quantumclubvtu" },
    { icon: Mail, label: "contact@quantumclubvtu.edu", link: "mailto:contact@quantumclubvtu.edu" },
  ];

  const categories = ["All", "Talks", "Workshops", "Competitions", "Socials"];
  const filteredEvents = selectedCategory === "All" ? events : events.filter((e: any) => e.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <QuantumBackground />
      <TopNav />
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617]/90 via-[#0F172A]/90 to-[#020617]/90">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-primary animate-fade-in hover:scale-105 transition-transform duration-500">Quantum Club VTU</h1>
              <p className="text-2xl text-foreground animate-fade-in hover:translate-x-2 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>Exploring the future of computation</p>
            </div>
            <div className="animate-fade-in animate-pulse hover:animate-none" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://res.cloudinary.com/dmzliau0j/image/upload/v1764162909/Hero-3_gjyj7c.jpg" 
                alt="Description of your image" 
                className="w-full mt-8 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 border border-primary/20" 
              />
            </div>
        </div>
      </section>


      <section id="about" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in hover:scale-110 transition-transform duration-500">About Quantum Club VTU</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in hover:translate-x-4 transition-transform duration-700" style={{ animationDelay: '0.2s' }}>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Quantum Club VTU is a pioneering student-driven initiative at Visvesvaraya Technological University, dedicated to exploring and advancing the frontiers of quantum computing. We are a vibrant community of curious minds, passionate researchers, and aspiring quantum engineers united by a common vision: to democratize quantum knowledge and inspire the next generation of quantum innovators.
            </p>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Founded on the principles of collaborative learning and hands-on experimentation, our club serves as a bridge between theoretical quantum mechanics and practical quantum computing applications. We organize workshops, seminars, hackathons, and research collaborations that empower students to dive deep into quantum algorithms, quantum circuits, and cutting-edge quantum technologies.
            </p>
            <p className="leading-relaxed hover:text-foreground transition-colors duration-500">
              Whether you're a beginner curious about qubits and superposition, or an advanced learner working on quantum error correction and quantum machine learning, Quantum Club VTU provides a nurturing environment to explore, experiment, and excel. Join us as we unlock the mysteries of quantum computation and shape the future of technology together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-110 transition-transform duration-500">University Leadership</h2>
          
          {/* Tier 1 - Vice Chancellor */}
          <div className="flex justify-center mb-6">
            {universityLeadership.tier1.map((l, i) => (
              <Card key={i} className="p-6 max-w-md hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: '0s' }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 2 - Registrars */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {universityLeadership.tier2.map((l, i) => (
              <Card key={i} className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Tier 3 - Finance Officer (centered) */}
          <div className="flex justify-center">
            {universityLeadership.tier3.map((l, i) => (
              <Card key={i} className="p-6 max-w-md hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: `${(i + 2) * 0.1}s` }}>
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{l.name}</h3>
                <p className="text-sm text-primary text-center mb-4">{l.title}</p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                  <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{l.message}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Events</h2>
          <div className="flex justify-center gap-3 mb-12">{categories.map(c => <Button key={c} variant={selectedCategory === c ? "default" : "outline"} onClick={() => setSelectedCategory(c)}>{c}</Button>)}</div>
          {filteredEvents.length === 0 && <Card className="p-12"><p className="text-center text-muted-foreground">No events scheduled. Check back soon!</p></Card>}
        </div>
      </section>

      <section className="py-24 px-4 bg-[#020617]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Quantum Club VTU in Action</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764150953/EV-8_cyveb4.jpg", // Replace with your actual links
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764145466/ACHV-3_sat7nk.jpg",
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764163090/ACHV-2.0_s7fdfo.jpg",
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764144581/EV-6_mrg4xr.jpg",
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764144581/EV-7_qvrorq.jpg",
        "https://res.cloudinary.com/dmzliau0j/image/upload/v1764144138/EV-5_g8x8u5.jpg",
      ].map((img, i) => (
        <div key={i} className="aspect-video rounded-lg overflow-hidden">
          <img 
            src={img} 
            alt={`Event ${i+1}`} 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-110 transition-transform duration-500">VTU Students' Club Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10">
              <img src={clubLeadership.chiefCoordinator.image} alt={clubLeadership.chiefCoordinator.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
              <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{clubLeadership.chiefCoordinator.name}</h3>
              <p className="text-sm text-primary text-center mb-4">{clubLeadership.chiefCoordinator.title}</p>
              <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{clubLeadership.chiefCoordinator.message}"</p>
              </div>
            </Card>
            <Card className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in hover:z-10" style={{ animationDelay: '0.1s' }}>
              <img src={clubLeadership.staffCoordinator.image} alt={clubLeadership.staffCoordinator.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
              <h3 className="text-xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{clubLeadership.staffCoordinator.name}</h3>
              <p className="text-sm text-primary text-center mb-4">{clubLeadership.staffCoordinator.title}</p>
              <div className="bg-muted/50 rounded-lg p-4 mt-4 hover:bg-primary/20 transition-all duration-500 hover:scale-105">
                <p className="text-sm text-muted-foreground italic text-center leading-relaxed hover:text-foreground transition-colors duration-300">"{clubLeadership.staffCoordinator.message}"</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in hover:scale-110 transition-transform duration-500">Faculty Advisors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAdvisors.map((a, i) => (
              <Card key={i} className="p-6 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <img src={a.image} alt={a.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold text-center hover:text-primary transition-colors duration-300">{a.name}</h3>
                <p className="text-sm text-primary text-center mb-2">{a.title}</p>
                <p className="text-sm text-muted-foreground text-center hover:text-foreground transition-colors duration-300">{a.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="committees" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
          
          {/* Chairperson */}
          <div className="max-w-md mx-auto mb-16">
            <Card 
              className="p-8 cursor-pointer hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:border-primary animate-fade-in"
              onClick={() => setSelectedMember(chairperson)}
            >
              <img 
                src={chairperson.image} 
                alt={chairperson.name} 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" 
              />
              <h3 className="text-2xl font-bold text-center mb-2 hover:text-primary transition-colors duration-300">{chairperson.name}</h3>
              <p className="text-md text-primary text-center font-semibold">{chairperson.role}</p>
            </Card>
          </div>

          {/* Committees */}
          <h3 className="text-3xl font-bold text-center mb-12">Committees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((c, i) => (
              <Card 
                key={i} 
                className="p-6 cursor-pointer hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:border-primary animate-fade-in"
                onClick={() => setSelectedMember({ ...c.lead, role: `${c.name} Lead` })}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary text-center mb-6 hover:scale-110 transition-transform duration-300">{c.name}</h3>
                <img 
                  src={c.lead.image} 
                  alt={c.lead.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20 hover:border-primary hover:rotate-12 transition-all duration-500 hover:scale-110" 
                />
                <p className="text-lg font-medium text-center hover:text-primary transition-colors duration-300">{c.lead.name}</p>
                <p className="text-sm text-muted-foreground text-center mt-2">Lead</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4" 
                  />
                  <DialogTitle className="text-2xl text-center">{selectedMember.name}</DialogTitle>
                  <p className="text-primary font-semibold text-center mt-2">{selectedMember.role}</p>
                </div>
              </DialogHeader>
              <DialogDescription className="text-center text-base leading-relaxed">
                {selectedMember.description}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-24 px-4 bg-[#020617]">
        <div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-center mb-16">Join Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">{socialCommunity.map((s, i) => <a key={i} href={s.link} target="_blank" rel="noopener"><Card className="p-8 text-center"><div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4`}><s.icon className="h-8 w-8 text-white" /></div><h3 className="text-xl font-bold mb-2">{s.platform}</h3><p className="text-primary font-medium mb-3">{s.handle}</p><p className="text-sm text-muted-foreground mb-4">{s.description}</p><Button variant="outline" className="w-full">Join Now</Button></Card></a>)}</div>
        </div>
      </section>

      <section id="resources" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Learning Resources</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {resources.map((r, i) => (
              <a key={i} href={r.link} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <r.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4 bg-[#020617]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {recentBlogPosts.map((p, i) => (
              <a key={i} href={blogLink} target="_blank" rel="noopener noreferrer">
                <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <a href={blogLink} target="_blank" rel="noopener noreferrer">View All Posts</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="achievers" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">Achievers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Celebrating excellence and innovation from quantum computing pioneers worldwide and our talented campus community.
            </p>
          </div>
          
          {/* Worldwide Achievers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Worldwide Achievers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Clarke",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764084867/John_Clarke_emhllq.webp",
                  description: "for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit."
                },
                {
                  name: "Michel Devoret",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764087575/michel_bpzmaf.webp",
                  description: "for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit."
                },
                {
                  name: "John Martinis",
                  image: "https://res.cloudinary.com/dmzliau0j/image/upload/v1764087999/John-M-Martinis_ctwxyi.webp",
                  description: "for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit."
                }
              ].map((achiever, i) => (
                <Card key={i} className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src={achiever.image} 
                      alt={achiever.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{achiever.name}</h4>
                  <p className="text-sm text-muted-foreground text-center">{achiever.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Campus Achievers */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">Campus Achievers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  
                  

                },
                {
                  
                  
                  
                },
                {
                  
                
                
                }
              ].map((achiever, i) => (
                <Card key={i} className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src={achiever.image} 
                      alt={achiever.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center">{achiever.name}</h4>
                  <p className="text-sm text-muted-foreground text-center">{achiever.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="podcast" className="py-24 px-4 bg-[#020617]/90">
        <div className="max-w-7xl mx-auto text-center">
          <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">Quantum Club Podcast</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Tune in to our podcast series featuring discussions on quantum computing, interviews with researchers, and insights into the latest developments in the field.
          </p>
          <Card className="p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">Podcast episodes coming soon! Subscribe to stay updated on our latest quantum computing discussions and expert interviews.</p>
            <Button asChild>
              <a href={podcastLink} target="_blank" rel="noopener noreferrer">Listen to Our Podcast</a>
            </Button>
          </Card>
        </div>
      </section>


      <section id="partners" className="py-24 px-4 bg-[#0F172A]/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
          <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-primary/20 group">
            <img 
              src="https://res.cloudinary.com/dmzliau0j/image/upload/v1764154870/P-1_cncov3.jpg" 
              alt="Our Partners" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-[#020617]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <Button size="lg" asChild>
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-5 w-5" />Send us a Message
            </a>
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#020617] border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground"><p>© 2025 Quantum Club VTU. All rights reserved.</p></div>
      </footer>
    </div>
  );
};

export default Index;
