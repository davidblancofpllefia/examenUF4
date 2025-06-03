// app/layout.tsx
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReactNode } from 'react'
import Header from './componentes/Header'

export const metadata = {
  title: 'Examen UF4',
  description: 'Examen de Next.js con TMDB',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          <p>© 2025 - Examen UF4</p>
        </footer>
      </body>
    </html>
  )
}

