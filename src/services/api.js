// services/api.js
export async function getMovies() {
  const res = await fetch('http://localhost:3000/movies')
  return await res.json()
}
