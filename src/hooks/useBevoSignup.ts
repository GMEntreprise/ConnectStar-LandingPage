import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { brevoApi, BrevoApiError } from '../lib/bevo';

export const useBrevoSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      const contact = await brevoApi.addContact(email);
      // Envoyer l'email de bienvenue en arrière-plan
      brevoApi.sendWelcomeEmail(email).catch(console.error);
      return contact;
    },
    onSuccess: () => {
      // Invalider toutes les queries liées au compteur et aux contacts
      queryClient.invalidateQueries({ queryKey: ['brevo', 'contact-count'] });
      queryClient.invalidateQueries({ queryKey: ['brevo', 'recent-contacts'] });
      queryClient.invalidateQueries({ queryKey: ['bevo', 'subscriber-count'] }); // Pour compatibilité
      
      toast.success('Bienvenue dans l\'aventure ConnectStar !', {
        description: 'Votre inscription a été confirmée. Vous recevrez un email de bienvenue dans quelques minutes.',
        duration: 5000,
      });
    },
    onError: (error: Error) => {
      if (error instanceof BrevoApiError) {
        if (error.code === 'EMAIL_EXISTS') {
          toast.error('Email déjà enregistré', {
            description: 'Cette adresse est déjà dans notre liste d\'attente. Merci pour votre intérêt !',
          });
        } else if (error.code === 'RATE_LIMITED') {
          toast.error('Trop de tentatives', {
            description: 'Veuillez patienter quelques minutes avant de réessayer.',
          });
        } else {
          toast.error('Erreur d\'inscription', {
            description: error.message,
          });
        }
      } else {
        toast.error('Erreur réseau', {
          description: 'Vérifiez votre connexion Internet et réessayez.',
        });
      }
    },
  });
};

// Alias pour compatibilité
export const useBevoSignup = useBrevoSignup;