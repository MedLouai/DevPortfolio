import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

type ContactInput = z.infer<typeof api.contact.submit.input>;

export function useContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }
      
      return api.contact.submit.responses[200].parse(await res.json());
    },
  });
}
