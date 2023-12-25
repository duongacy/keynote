'use client';
import { Layout } from '@/components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={client}>
      <Layout>{children}</Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
