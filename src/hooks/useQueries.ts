import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';

/**
 * Common GET Query Hook
 * @param key Query Key
 * @param url API URL
 * @param options Query Options
 */
export const useApiGet = <T>(
  key: any[],
  url: string,
  options?: any
) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: () => api.get<T>(url),
    ...options,
  });
};

/**
 * Common POST/PUT/DELETE Mutation Hook
 * @param mutationFn Function that performs the mutation
 * @param successKey Query Key to invalidate on success
 */
export const useApiMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  successKey?: any[]
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (successKey) {
        queryClient.invalidateQueries({ queryKey: successKey });
      }
    },
  });
};

// --- Example usage in components ---
// const { data, isLoading } = useApiGet<User[]>(['users'], '/users');
// const mutation = useApiMutation((data: Partial<User>) => api.post('/users', data), ['users']);
