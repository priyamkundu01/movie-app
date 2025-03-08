export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if (!response.ok) {
        throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
}

/* const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTRhZDJhZTI5ZjZjYzI5MjI0ZDY0NGM4OWEyZGFjNiIsIm5iZiI6MTc0MTQzNjUzNi4xLCJzdWIiOiI2N2NjMzY3OGY4ZTFmMWJjOTBmNTlkN2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7qfZ_0qDzgwGayG3c65qXWRZRbKyQYFsIwJGvVV3x-U'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); */