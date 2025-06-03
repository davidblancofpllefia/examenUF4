

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 m-0">David Blanco</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link href="/peliculas" className="nav-link text-white">Películas</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre" className="nav-link text-white">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
