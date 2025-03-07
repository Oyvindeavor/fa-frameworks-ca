import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  body: z.string().min(3, "Message must be at least 3 characters"),
});

export type FormSchema = z.infer<typeof formSchema>;
