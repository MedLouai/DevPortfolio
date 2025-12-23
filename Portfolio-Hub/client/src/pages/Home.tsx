import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 bg-card border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} DevPortfolio. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}
