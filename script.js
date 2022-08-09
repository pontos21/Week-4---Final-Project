// // http://www.omdbapi.com/?s=tt3896198&apikey=79968113
// const movieContainer 
// const searchBar

const movieContainer = document.querySelector(".movie__container")
const searchBar = document.querySelector(".search__bar")

async function getMovies(searchValue) {
  const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=79968113`)
  const data = await response.json()
  data.Search.map((movie) => {
    movieContainer.innerHTML += generateMovieHtml(movie)
  })
}


getMovies()



searchBar.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
      getMovies(event.target.value)
  }
})

  data.Search.map((movie) => {
    if (event.code === "Enter") {
        getMovies(event.target.value)
    }
  })
  

  function generateMovieHtml(movie) {
    return `<div class="movie">
    <div class="movie__container">
      <img src="${movie.Poster}" alt="">
      <h3>${movie.Title}</h3>
    </div>
    <div class="movie__summary">
        <p>${movie.Year}</p>
        <p>${movie.ImdbID}</p>
    </div>
  </div>`
}