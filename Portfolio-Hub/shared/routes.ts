import { z } from 'zod';
import { insertProjectSchema, insertSkillSchema, projects, skills } from './schema';

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/projects',
      input: insertProjectSchema,
      responses: {
        201: z.custom<typeof projects.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        message: z.string().min(10)
      }),
      responses: {
        200: z.object({ success: z.boolean() }),
        400: z.object({ message: z.string() }),
      }
    }
  }
};
