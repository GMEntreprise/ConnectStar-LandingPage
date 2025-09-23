import { useQuery } from '@tanstack/react-query';
import { brevoApi } from '../lib/bevo';

export const useBrevoCount = () => {
  return useQuery({
    queryKey: ['brevo', 'contact-count'],
    queryFn: () => brevoApi.getContactCount(),
    staleTime: 2 * 60 * 1000,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

// Alias pour compatibilité
export const useBevoCount = useBrevoCount;