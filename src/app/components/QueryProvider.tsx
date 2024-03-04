"use client";
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

// QueryProviderProps type for props
type QueryProviderProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient();// Create a query client instance

const QueryProvider = ({children}: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider