type Generos = {
  id: number
  name: string
}

type Reparto = {
  cast_id: number
  name: string
  character: string
  profile_path: string | null
}

type PeliculaDetalle = {
  title: string
  poster_path: string | null
  overview: string
  genres: Generos[]
  release_date: string
  runtime: number
  credits: {
    cast: Reparto[]
  }
  vote_average: number
}

interface Detalle {
  id: string
}

export default async function Detalle({ id }: Detalle) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ac6782401a3d884223c919a7b6387ba9&language=es-ES&append_to_response=credits`
  )


  const data: PeliculaDetalle = await res.json()

  return (
    <div className="container mt-4">
      <h2>{data.title}</h2>
      <div className="row">
        <div className="col-md-4">
        <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="card-img-top"
            />
        </div>

        <div className="col-md-8">
          <p><strong>Sinopsis:</strong> {data.overview}</p>
          <p><strong>Géneros:</strong> {data.genres.map(g => g.name).join(', ')}</p>
          <p><strong>Fecha de estreno:</strong> {data.release_date}</p>
          <p><strong>Duración:</strong> {data.runtime} minutos</p>

          <h5>Reparto principal:</h5>
          <div className="d-flex flex-wrap">
            {data.credits.cast.slice(0, 5).map(actor => (
              <div key={actor.cast_id} className="me-3 mb-3 text-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="img-fluid rounded"
                  />

                <p className="mt-2 mb-0"><strong>{actor.name}</strong></p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9em' }}>{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
