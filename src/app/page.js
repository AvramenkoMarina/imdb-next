import Results from '@/components/Results'

export default async function Home({ searchParams }) {
	const genre = searchParams.genre || 'fetchTrending'
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGU3ZGY2YzhlY2MzMzJiNjAyYmIxYTljYzUxZmRmOSIsIm5iZiI6MTc0NDI3OTAwNy44ODgsInN1YiI6IjY3Zjc5NWRmMzE3NzUyNzZkNmQ5NzhhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fvbk_XIYSoBMQ9TM2e_WKm0GZEBMdmGQInj06hSWN_E',
		},
	}

	const url = `https://api.themoviedb.org/3${
		genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
	}?language=en-US&page=1`

	const res = await fetch(url, options)

	if (!res.ok) {
		throw new Error('Failed to fetch movies')
	}

	const data = await res.json()
	const results = data.results

	return <Results results={results} />
}
