import { z } from 'zod';

export const donationSchema = z.object({
  amount: z
    .number()
    .min(1, 'Le montant doit être au moins de 1€')
    .max(100000, 'Le montant ne peut pas dépasser 100 000€'),
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long')
    .trim(),
  email: z
    .string()
    .min(1, 'L\'adresse email est requise')
    .email('Veuillez entrer une adresse email valide')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .max(500, 'Le message ne peut pas dépasser 500 caractères')
    .optional(),
  anonymous: z.boolean().default(false),
  newsletter: z.boolean().default(false),
  recurring: z.boolean().default(false),
});

export type DonationFormData = z.infer<typeof donationSchema>;
