    type Genero = {
    id: number
    name: string
    }

    type Actor = {
    cast_id: number
    name: string
    character: string
    profile_path: string | null
    }

    type PeliculaDetalle = {
    title: string
    poster_path: string | null
    backdrop_path: string | null
    overview: string
    genres: Genero[]
    release_date: string
    runtime: number
    credits: {
        cast: Actor[]
    }
    vote_average: number
    }

    interface DetalleProps {
    id: string
    }

    export default async function Detalle({ id }: DetalleProps) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ac6782401a3d884223c919a7b6387ba9&language=es-ES&append_to_response=credits`
    )
    const data: PeliculaDetalle = await res.json()


    let imagenFondo = null
    if (data.backdrop_path) {
        imagenFondo = `https://image.tmdb.org/t/p/w780${data.backdrop_path}`
    } else if (data.poster_path) {
        imagenFondo = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    } else {
        imagenFondo = null
    }

    return (
        <div className="container mt-4">
        {imagenFondo ? (
            <img
            src={imagenFondo}
            alt={data.title}
            className="img-fluid rounded mb-3"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
        ) : (
            <div
            className="bg-secondary text-white d-flex justify-content-center align-items-center rounded mb-3"
            style={{ width: '100%', height: '400px' }}
            >
            </div>
        )}

        <div className="mb-3">
            <h2>{data.title}</h2>
            <div className="mt-2">
            <button className="btn btn-primary me-2 mb-2">Añadir a favoritos</button>
            <button className="btn btn-secondary mb-2">Ver trailer</button>
            </div>
        </div>

        <p><strong>Sinopsis:</strong> {data.overview}</p>
        <p><strong>Géneros:</strong> {data.genres.map(g => g.name).join(', ')}</p>

        <div className="d-flex gap-4 mb-3">
            <p className="mb-0"><strong>Fecha de estreno:</strong> {data.release_date}</p>
            <p className="mb-0"><strong>Duración:</strong> {data.runtime} minutos</p>
        </div>

        <h5>Reparto principal:</h5>
        <div className="d-flex flex-wrap">
            {data.credits.cast.slice(0, 8).map(actor => (
            <div key={actor.cast_id} className="me-3 mb-3 text-center" style={{ width: '120px' }}>
                {actor.profile_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="img-fluid rounded"
                />
                ) : (
                <div
                    className="bg-secondary text-white d-flex justify-content-center align-items-center rounded"
                    style={{ width: '185px', height: '278px' }}
                >
                    Sin foto
                </div>
                )}
                <p className="mt-2 mb-0"><strong>{actor.name}</strong></p>
                <p className="mb-0 text-muted" style={{ fontSize: '0.9em' }}>{actor.character}</p>
            </div>
            ))}
        </div>
        </div>
    )
    }
