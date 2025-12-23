import { db } from "./db";
import { projects, skills, type InsertProject, type InsertSkill, type Project, type Skill } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.insert(skills).values(insertSkill).returning();
    return skill;
  }
}

export const storage = new DatabaseStorage();
