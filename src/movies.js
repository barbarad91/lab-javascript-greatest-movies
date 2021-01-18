// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(elm => elm.director)

}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function unifyDirectorsArray(directorsArray) {
    const unifiedDirectorsArray = []
    directorsArray.forEach(elm => {
        if (!unifiedDirectorsArray.includes(elm)) {
            unifiedDirectorsArray.push(elm)
        }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const wantedDirector = 'Steven Spielberg'
    const wantedGenre = 'Drama'
    filteredArray = moviesArray.filter(elm => (elm.director === wantedDirector) && (elm.genre.includes(wantedGenre)))
    return filteredArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const summedAverages = moviesArray.reduce((acc, elm) => {
        if (!elm.rate) {
            return acc
        }
        return acc + elm.rate
    }, 0)
    const avg = summedAverages / moviesArray.length
    return +avg.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    if (moviesArray.length === 0) return 0
    const dramaArray = moviesArray.filter(elm => elm.genre.includes('Drama'))
    if (dramaArray.length === 0) return 0
    const dramaArraySum = dramaArray.reduce((acc, elm) => {
        if (!elm.rate) {
            return acc
        }
        return acc + elm.rate
    }, 0)
    const avg = dramaArraySum / dramaArray.length
    return +avg.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sorted = [...moviesArray]
    sorted.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return sorted
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average