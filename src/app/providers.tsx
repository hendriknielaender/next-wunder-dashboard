// app/providers.tsx
'use client'

import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Layout } from '@/components/layout/layout';


const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
    >
    <NextUIProvider>
      <Layout>
      {children}
      </Layout>
    </NextUIProvider>
    </NextThemesProvider>
  )
}
