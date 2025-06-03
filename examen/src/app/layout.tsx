// app/layout.tsx
import { ReactNode } from 'react'

export const metadata = {
  title: 'Examen UF4',
  description: 'Examen de Next.js amb TMDB',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>El teu nom aquí</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Pie de pagina</p>
        </footer>
      </body>
    </html>
  )
}

