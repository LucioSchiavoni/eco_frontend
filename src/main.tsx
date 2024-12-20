import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <App />  
    </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
)
