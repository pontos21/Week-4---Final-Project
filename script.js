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



// function showMovie(movie) {
  
//   // window.location.href = `${window.location.origin}/user.html`
  
// }
// showMovie()


function generateMovieHTML(movie) {
  return `<div class="movie" onclick="showMovie${movie}">
  <div class="movie__container">
      <img src="${movie.Poster}" alt="">
      <p>${movie.Title}</p>
      <p>${movie.Year}</p>
  </div>
</div>`
}





// const moviesListEl = document.querySelector('.movies__list')

// async function getMovies(searchValue) {
//   const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=79968113`)
//   const moviesData = await response.json()
//   moviesListEl.innerHTML = moviesData.Search.map((movie) => generateMovieHTML(movie)).join("")
// }

// getMovies()

// // function showMovie(id) {
// //   localStorage.setItem("id", id)
// //   window.location.href = `${window.location.origin}/user.html`
// // }

// function generateMovieHTML(movie) {
//   return `<div class="movie">
//   <div class="movie__container">
//       <img src="${movie.Poster}"alt="">
//       <p>${movie.Title}</p>
//       <p>${movie.Year}</p>
//   </div>
// </div>`
// }

















// // http://www.omdbapi.com/?s=tt3896198&apikey=79968113
// const movieContainer 
// const searchBar

// const movieContainer = document.querySelector(".movie__container")
// const searchBar = document.querySelector(".search__bar")

// async function getMovies(searchValue) {
//   const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=79968113`)
//   const data = await response.json()
//   data.Search.map((movie) => {
//     movieContainer.innerHTML += generateMovieHtml(movie)
//   })

 
// }

// getMovies()







// searchBar.addEventListener("keyup", (event) => {
//   if (event.code === "Enter") {
//       getMovies(event.target.value)
//   }
// })

//   data.Search.map((movie) => {
//     if (event.code === "Enter") {
//         getMovies(event.target.value)
//     }
//   })
  

//   function generateMovieHtml(movie) {
//     return `<div class="movie">
//     <div class="movie__container">
//       <img src="${movie.Poster}" alt="">
//       <h3>${movie.Title}</h3>
//     </div>
//     <div class="movie__summary">
//         <p>${movie.Year}</p>
//         <p>${movie.ImdbID}</p>
//     </div>
//   </div>`
// }