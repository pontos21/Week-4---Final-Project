// http://www.omdbapi.com/?i=tt3896198&apikey=79968113

async function main() {
    const movies = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=79968113')
    const moviesData = await movies.json()
    console.log(
    moviesData.map(
        (movie) => `<div class="movie">
        <div class="movie__container">
            <h3>Movie Name</h3>
            <img src="" alt="">
        </div>
        <div class="movie__summary">
            <p></p>
        </div>
    </div>`
    ).join('')
    )

}

main()
