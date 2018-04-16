
const searchButton = document.getElementById('searchButton')

// const searchClick = () => {
    searchButton.addEventListener('click', function(){
        const searchInputYear =  document.getElementById('searchInput').value
        return citiesDomBuilder(searchInputYear)
    })

        // return searchInputYear})}


// console.log(searchClick())

// citiesDomBuilder()