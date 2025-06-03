import Link from 'next/link'

type Pelicula = {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

export default async function Peliculas() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=ac6782401a3d884223c919a7b6387ba9&language=es-ES&page=1'
  )
  const data = await res.json()
  const peliculas: Pelicula[] = data.results

  return (
    <div className="container mt-4">
      <h1>Películas Populares</h1>
      <div className="row">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                className="card-img-top"
            />

              <div className="card-body">
               <h5 className="card-title">
                    <Link href={`/peliculas/${pelicula.id}`}>{pelicula.title}</Link>
               </h5>
                <p className="card-text">⭐{pelicula.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
