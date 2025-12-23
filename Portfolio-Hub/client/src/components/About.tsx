import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
               {/* About section portrait programmer working in dark room */}
              <img 
                src="https://pixabay.com/get/g552e1c96dee48845073aefda1466e53711ddf8e2e046e026b6c36472e4f5b075d2f1873a64590e07a33e26ca27fd1f8857b9c42c3f279c28e6b9a6834932e1ad_1280.jpg" 
                alt="Working on code" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Med Louai Maafa, a Computer Science undergraduate at ISSAT Kairouan and an AI Nexus Club member. I specialize in building web apps, Discord bots, and digital content to help businesses grow online. I'm passionate about programming, AI technologies, and creative problem-solving.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Beyond code, I excel at creating multimedia content—video editing, graphics, and social media strategies that drive engagement. Whether it's a sleek web application or engaging digital content, I'm committed to delivering solutions that make an impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                <h3 className="text-3xl font-bold text-primary mb-1">CS</h3>
                <p className="text-sm text-muted-foreground">ISSAT Kairouan</p>
              </div>
              <div className="p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                <h3 className="text-3xl font-bold text-primary mb-1">AI</h3>
                <p className="text-sm text-muted-foreground">Nexus Club Member</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
