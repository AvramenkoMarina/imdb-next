import Results from '@/components/Results'

export default async function SearchPage({ params }) {
	const searchTerm = params.searchTerm

	// Ваш Bearer Token
	const token =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGU3ZGY2YzhlY2MzMzJiNjAyYmIxYTljYzUxZmRmOSIsIm5iZiI6MTc0NDI3OTAwNy44ODgsInN1YiI6IjY3Zjc5NWRmMzE3NzUyNzZkNmQ5NzhhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fvbk_XIYSoBMQ9TM2e_WKm0GZEBMdmGQInj06hSWN_E'

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	}

	const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false`

	const res = await fetch(url, options)

	if (!res.ok) {
		throw new Error('Failed to fetch movie data')
	}

	const data = await res.json()
	const results = data.results

	return (
		<div>
			{results && results.length === 0 && (
				<h1 className='text-center pt-6'>No results found</h1>
			)}
			{results && <Results results={results} />}
		</div>
	)
}
