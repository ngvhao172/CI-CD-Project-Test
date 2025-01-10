'use client';

import { queryClient } from '@/app/shared/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';


export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
