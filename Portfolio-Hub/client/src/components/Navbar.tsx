import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme class to HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 glass shadow-md" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="flex items-center gap-2 font-display text-2xl font-bold cursor-pointer group"
        >
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <Code2 size={24} />
          </div>
          <span>DevPortfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              Hire Me
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>
              <Link to="contact" smooth={true} duration={500} offset={-100}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
