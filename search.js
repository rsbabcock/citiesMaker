
const searchInputYear =  document.getElementById('searchInput').value
const searchButton = document.getElementById('searchButton')

// const searchClick = () => {
    searchButton.addEventListener('click', function(){
        citiesDomBuilder(searchInputYear)
    })

        // return searchInputYear})}


// console.log(searchClick())

// citiesDomBuilder()