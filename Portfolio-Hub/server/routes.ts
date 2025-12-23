import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Skills
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      console.log("Contact form submission:", input);
      // In a real app, we'd send an email here
      res.json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Seed data on startup
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    console.log("Seeding database...");
    
    await storage.createProject({
      title: "AI Discord Bot",
      description: "Custom Discord bot powered by AI for automated moderation, user engagement, and intelligent responses. Integrated with OpenAI API for natural language understanding.",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80",
      projectUrl: "https://discord.com",
      repoUrl: "https://github.com/medlouaimaafa/discord-ai-bot",
      tags: ["Discord.py", "OpenAI", "Python"]
    });

    await storage.createProject({
      title: "Portfolio & Landing Pages",
      description: "Modern, responsive landing pages and personal portfolios for clients. Features smooth animations, SEO optimization, and conversion-focused design. Helped clients increase engagement by 45%.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-adf4e565db6d?w=800&q=80",
      projectUrl: "https://example.com/portfolio",
      repoUrl: "https://github.com/medlouaimaafa/portfolio",
      tags: ["React", "Tailwind", "Next.js"]
    });

    await storage.createProject({
      title: "Social Media Content Creator Tool",
      description: "Web app for video editing and content creation. Batch process videos, apply effects, add subtitles, and generate social media posts optimized for multiple platforms.",
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
      projectUrl: "https://example.com/content-tool",
      repoUrl: "https://github.com/medlouaimaafa/content-tool",
      tags: ["React", "FFmpeg", "Node.js"]
    });

    await storage.createProject({
      title: "ML Chatbot for Business Support",
      description: "Intelligent chatbot using TensorFlow and NLP. Trained on customer support data to handle inquiries, reduce response time by 60%, and improve customer satisfaction.",
      imageUrl: "https://images.unsplash.com/photo-1677442d019cecf8c37ff0caf57e96995de01e328?w=800&q=80",
      projectUrl: null,
      repoUrl: "https://github.com/medlouaimaafa/support-chatbot",
      tags: ["TensorFlow", "Python", "NLP"]
    });

    await storage.createProject({
      title: "Student Management System",
      description: "Full-stack web application for managing student data, grades, and attendance. Built with Flask backend and React frontend for ISSAT Kairouan.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      projectUrl: null,
      repoUrl: "https://github.com/medlouaimaafa/student-system",
      tags: ["Flask", "React", "PostgreSQL"]
    });

    await storage.createProject({
      title: "AI Image Processing Tools",
      description: "PyTorch-based tools for image classification and object detection. Developed for small businesses needing automated image analysis at scale.",
      imageUrl: "https://images.unsplash.com/photo-1677442d019cecf8c37ff0caf57e96995de01e328?w=800&q=80",
      projectUrl: null,
      repoUrl: "https://github.com/medlouaimaafa/image-ai",
      tags: ["PyTorch", "Python", "OpenCV"]
    });

    // Seed Skills - Languages
    await storage.createSkill({ name: "Python", proficiency: 85, category: "Languages" });
    await storage.createSkill({ name: "JavaScript", proficiency: 90, category: "Languages" });
    await storage.createSkill({ name: "HTML/CSS", proficiency: 95, category: "Languages" });
    await storage.createSkill({ name: "TypeScript", proficiency: 80, category: "Languages" });
    
    // Frameworks/Libraries
    await storage.createSkill({ name: "Node.js", proficiency: 85, category: "Frameworks/Libraries" });
    await storage.createSkill({ name: "React", proficiency: 90, category: "Frameworks/Libraries" });
    await storage.createSkill({ name: "Flask", proficiency: 80, category: "Frameworks/Libraries" });
    await storage.createSkill({ name: "Django", proficiency: 75, category: "Frameworks/Libraries" });
    
    // Tools
    await storage.createSkill({ name: "Git", proficiency: 90, category: "Tools" });
    await storage.createSkill({ name: "VS Code", proficiency: 95, category: "Tools" });
    await storage.createSkill({ name: "Docker", proficiency: 70, category: "Tools" });
    
    // AI & Machine Learning
    await storage.createSkill({ name: "TensorFlow", proficiency: 75, category: "AI & Machine Learning" });
    await storage.createSkill({ name: "PyTorch", proficiency: 80, category: "AI & Machine Learning" });
    await storage.createSkill({ name: "scikit-learn", proficiency: 85, category: "AI & Machine Learning" });
    
    // Web & Digital Content
    await storage.createSkill({ name: "Web Development", proficiency: 90, category: "Web & Digital" });
    await storage.createSkill({ name: "Video Editing", proficiency: 85, category: "Web & Digital" });
    await storage.createSkill({ name: "Graphics Design", proficiency: 80, category: "Web & Digital" });
    await storage.createSkill({ name: "Social Media", proficiency: 85, category: "Web & Digital" });
    
    console.log("Seeding complete.");
  }
}
