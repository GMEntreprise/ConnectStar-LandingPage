import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { bevoApi, BevoApiError } from '../lib/bevo';

export const useBevoSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) => bevoApi.addSubscriber(email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bevo', 'subscriber-count'] });
      
      toast.success('Bienvenue dans l\'aventure ConnectStar !', {
        description: 'Votre inscription a été confirmée. Vous recevrez bientôt plus d\'informations.',
        duration: 5000,
      });
    },
    onError: (error: Error) => {
      if (error instanceof BevoApiError) {
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