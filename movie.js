async function getMovies() {
    const id = localStorage.getItem("id")
    const response = await fetch(`http:www.omdbapi.com/?s=tt3896198&apikey=79968113=${id}`)
    const moviesData = await response.json()

    console.log(moviesData)
}
getMovies()