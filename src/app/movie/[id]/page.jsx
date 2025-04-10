import Image from 'next/image'

export const revalidate = 10000

export default async function MoviePage({ params }) {
	const movieId = params.id

	const token =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGU3ZGY2YzhlY2MzMzJiNjAyYmIxYTljYzUxZmRmOSIsIm5iZiI6MTc0NDI3OTAwNy44ODgsInN1YiI6IjY3Zjc5NWRmMzE3NzUyNzZkNmQ5NzhhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fvbk_XIYSoBMQ9TM2e_WKm0GZEBMdmGQInj06hSWN_E'

	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})

	if (!res.ok) {
		throw new Error('Failed to fetch movie data')
	}

	const movie = await res.json()

	return (
		<div className='w-full'>
			<div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
				<Image
					src={`https://image.tmdb.org/t/p/original/${
						movie.backdrop_path || movie.poster_path
					}`}
					width={500}
					height={300}
					className='rounded-lg'
					style={{ maxWidth: '100%', height: '100%' }}
				/>
				<div className='p-2'>
					<h2 className='text-lg mb-3 font-bold'>
						{movie.title || movie.name}
					</h2>
					<p className='text-lg mb-3'>{movie.overview}</p>
					<p className='mb-3'>
						<span className='font-semibold mr-1'>Date Released:</span>
						{movie.release_date || movie.first_air_date}
					</p>
					<p className='mb-3'>
						<span className='font-semibold mr-1'>Rating:</span>
						{movie.vote_count}
					</p>
				</div>
			</div>
		</div>
	)
}
