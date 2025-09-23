import { z } from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, 'L\'adresse email est requise')
    .email('Veuillez entrer une adresse email valide')
    .toLowerCase()
    .trim(),
});

export type EmailFormData = z.infer<typeof emailSchema>;