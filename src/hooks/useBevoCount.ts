import { useQuery } from '@tanstack/react-query';
import { bevoApi } from '../lib/bevo';

export const useBevoCount = () => {
  return useQuery({
    queryKey: ['bevo', 'subscriber-count'],
    queryFn: () => bevoApi.getSubscriberCount(),
    staleTime: 2 * 60 * 1000,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};