// // http://www.omdbapi.com/?s=tt3896198&apikey=79968113
const moviesListEl = document.querySelector('.movies__list')
const searchBar = document.querySelector('.search__bar')
const searchBtn = document.querySelector('.search__btn')


async function getMovies(searchValue = 'Aliens') {
  const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=79968113`)
  const moviesData = await response.json()
  moviesListEl.innerHTML = moviesData.Search.map((movie) => generateMovieHTML(movie) ).join('')
}
getMovies()

let searchInputValue = ''


searchBar.addEventListener('keyup', (e) => {
  console.log(e)
  searchInputValue = e.target.value
  if (e.code === 'Enter') {
    getMovies(searchInputValue)
  }
})

searchBtn.addEventListener('click', (e) => {
  getMovies(searchInputValue)
})



function generateMovieHTML(movie) {
  return `<div class="movie" onclick="showMovie${movie}">
  <div class="movie__container">
      <img src="${movie.Poster}" alt="">
      <p class="movie__para"><b>${movie.Title}</b></p>
      <p class="movie__para movie__year">${movie.Year}</p>
  </div>
</div>`
}





