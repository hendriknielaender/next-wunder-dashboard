// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Layout } from '@/components/layout/layout';


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
         defaultTheme="system"
         attribute="class"
    >
    <NextUIProvider>
      <Layout>
      {children}
      </Layout>
    </NextUIProvider>
    </NextThemesProvider>
  )
}
