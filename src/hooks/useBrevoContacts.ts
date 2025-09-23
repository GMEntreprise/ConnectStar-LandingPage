import { useQuery } from '@tanstack/react-query';
import { brevoApi } from '../lib/bevo';

export const useBrevoContacts = () => {
  return useQuery({
    queryKey: ['brevo', 'recent-contacts'],
    queryFn: () => brevoApi.getRecentContacts(),
    staleTime: 2 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};