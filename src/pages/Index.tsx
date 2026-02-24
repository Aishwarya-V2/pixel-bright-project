import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectWeather from "@/assets/project-weather.jpg";
import projectFish from "@/assets/project-fish.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const navLinks = ["About", "Projects", "Skills", "Contact"];

const projects = [
  {
    num: "01",
    title: "Weather Identification Web App",
    desc: "A responsive web application that fetches and displays real-time weather information via REST API. Users enter a city name to view temperature, humidity, and weather conditions dynamically. Includes error handling for invalid inputs.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    image: projectWeather,
    github: "https://github.com/Aishwarya-V2",
  },
  {
    num: "02",
    title: "Fish Species Classification",
    desc: "A deep learning system to classify 20 fish species from diverse image datasets using ResNet50 for feature extraction and MobileNetV2 for lightweight classification. Built with a Tkinter front-end for result visualization.",
    tags: ["Python", "ResNet50", "MobileNetV2", "TensorFlow", "OpenCV"],
    image: projectFish,
    github: "https://github.com/Aishwarya-V2",
  },
  {
    num: "03",
    title: "Full-Stack Delivery Automation",
    desc: "An end-to-end automation workflow covering UI testing with Selenium, API validation with REST Assured, and database verification via JDBC. Integrated into Jenkins CI/CD pipelines and deployed on Azure cloud.",
    tags: ["Java", "Selenium", "REST Assured", "Jenkins", "Azure", "Git"],
    image: projectAutomation,
    github: "https://github.com/Aishwarya-V2",
  },
];

const skills = [
  {
    category: "Programming & Web",
    items: [
      { name: "Java", pct: 85 },
      { name: "JavaScript", pct: 78 },
      { name: "Python (Fundamentals)", pct: 65 },
      { name: "HTML & CSS", pct: 80 },
    ],
  },
  {
    category: "Automation & Testing",
    items: [
      { name: "Selenium", pct: 88 },
      { name: "Playwright", pct: 75 },
      { name: "REST Assured", pct: 82 },
      { name: "Postman / JMeter", pct: 80 },
    ],
  },
  {
    category: "Frameworks & DevOps",
    items: [
      { name: "Cucumber / TestNG", pct: 85 },
      { name: "Jenkins / CI-CD", pct: 75 },
      { name: "Git & GitHub", pct: 88 },
      { name: "MySQL / SQL", pct: 78 },
    ],
  },
];

const stats = [
  { value: "9.3", label: "GPA / 10 — B.E. CS" },
  { value: "3", label: "Projects Shipped" },
  { value: "4+", label: "Certifications" },
  { value: "1+", label: "Year at Cognizant" },
];

const certs = [
  "Selenium + Java – Udemy",
  "ML Foundation – AWS",
  "SQL + MySQL – Udemy",
  "REST Assured – Techademy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-bold tracking-tight text-primary">AV.</span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollTo("contact")}>
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-sm text-muted-foreground mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-muted-foreground" />
          SDET · Automation Engineer
          <span className="w-8 h-px bg-muted-foreground" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8"
        >
          <span className="text-foreground/90">Aishwarya</span>
          <br />
          <span className="text-primary">V.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl text-muted-foreground text-lg leading-relaxed mb-10"
        >
          Software Development Engineer in Test — building reliable, scalable automation frameworks with Java, Selenium, Playwright & REST Assured.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <Button size="lg" onClick={() => scrollTo("projects")}>
            View My Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("contact")}>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4"
        >
          <a href="https://github.com/Aishwarya-V2" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:aishwaryaammuv@gmail.com" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="animate-bounce text-muted-foreground" size={28} />
        </motion.div>
      </header>

      {/* About */}
      <section id="about" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-sm uppercase tracking-widest text-primary mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Testing with precision,<br /> automating with purpose.
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              I'm an SDET at Cognizant Technology Solutions with hands-on experience in UI and API automation using Java, JavaScript, Cucumber, and Selenium/Playwright. Currently working on LLM-based testing for a voice bot in the Energy & Utilities domain at PG&E.
            </p>
            <p>
              I'm skilled in building reusable, data-driven test components, CI/CD integration with Jenkins, and database validation with SQL. I hold a B.E. in Computer Science from PES College of Engineering with a 9.3 GPA.
            </p>
          </motion.div>

          {/* Certs */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="flex flex-wrap gap-3 mt-10">
            {certs.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground border border-border">
                {c}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-4xl font-serif font-bold text-primary mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-sm uppercase tracking-widest text-primary mb-4">
            Selected Work
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-16">
            Projects I'm proud of.
          </motion.h2>

          <div className="space-y-20">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={`rounded-2xl overflow-hidden border border-border ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img src={p.image} alt={p.title} className="w-full h-64 object-cover" loading="lazy" />
                </div>
                <div>
                  <span className="text-5xl font-serif font-bold text-primary/20">{p.num}</span>
                  <h3 className="font-serif text-2xl font-bold mt-2 mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github size={16} /> View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-sm uppercase tracking-widest text-primary mb-4">
            Expertise
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-6">
            My toolkit.
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="text-muted-foreground mb-16 max-w-2xl">
            Tools and technologies I use to deliver quality software, from test automation to CI/CD pipelines.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={gi}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-serif text-lg font-semibold mb-6">{group.category}</h3>
                <div className="space-y-5">
                  {group.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{s.name}</span>
                        <span className="text-primary">{s.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-sm uppercase tracking-widest text-primary mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-16">
            Let's build something remarkable.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Have a project or role in mind? I'd love to connect. Drop me a message and I'll get back to you within 24 hours.
              </p>
              <a href="mailto:aishwaryaammuv@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                <Mail className="text-primary" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div>aishwaryaammuv@gmail.com</div>
                </div>
              </a>
              <a href="tel:+918088406894" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                <Phone className="text-primary" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div>+91 8088406894</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <MapPin className="text-primary" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div>Bengaluru, Karnataka</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to new opportunities
              </div>
            </motion.div>

            <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-xl font-bold text-primary">AV.</span>
          <p className="text-sm text-muted-foreground">© 2025 Aishwarya V. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Aishwarya-V2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:aishwaryaammuv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
