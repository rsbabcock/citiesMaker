// Const that grabs article
const citiesArticleRef = document.querySelector("#myCities")

const citiesDomBuilder = () => {
// for each iterates through object and citiies
    citiesDatabase.cities.forEach(currentCity => {
        // citySection creates section element for city info
        const citySection = document.createElement('section')
        citiesArticleRef.appendChild(citySection)
        // cityName creates the name of the cities from the database
        const cityName = document.createElement('h2')
        cityName.textContent = currentCity.name 
        citySection.appendChild(cityName)
        // imageDom creates the image element and also sets the database image using .src
        const imageDom = document.createElement('img')
        imageDom.textContent = currentCity.name
        imageDom.src = currentCity.image
        citySection.appendChild(imageDom)
        // topAttractTitle creates and H3 which is a imple title for the list of Attracitons
        const topAttractTitle = document.createElement('h3')
        topAttractTitle.textContent = "List of Top Attractions"
        citySection.appendChild(topAttractTitle)

        // To make the the list of top five attractions, 
        // i had to make a function with a for loop inside to iterate over the array
        // It creates a paragragh for every item in the array of topFive attractions
        // and sets that content to the dom
        const makeTopFive = () => { 
            for(let i = 0; i < currentCity.topFive.length; i ++) {
            let topFiveP = document.createElement('p') 
            topFiveP.textContent += currentCity.topFive[i]
            citySection.appendChild(topFiveP);
            }
        }
        // calls the function to make the attractions
        makeTopFive()
           

    });

// Filter the cards based on specific year visited, or all cities
// Style each card with a different background color, colored by continent 
// (North America = green, South America = blue, Asia = purple, Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)
}

citiesDomBuilder()