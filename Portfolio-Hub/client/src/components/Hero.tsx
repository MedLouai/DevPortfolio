import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Available for freelance work
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            I build <span className="text-gradient">exceptional</span><br />
            digital experiences.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm a Full Stack Developer specializing in building accessible, 
            pixel-perfect, and performant web applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 text-base h-12">
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                View My Work
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12">
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Contact Me
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
