// Const that grabs article
const citiesArticleRef = document.querySelector("#myCities")

const citiesDomBuilder = () => {
// for each iterates through object and citiies
    citiesDatabase.cities.forEach(currentCity => {
        // citySection creates section element for city info
        const citySection = document.createElement('section')
        citiesArticleRef.appendChild(citySection)
        
        const cityName = document.createElement('h2')
        cityName.textContent = currentCity.name 
        citySection.appendChild(cityName)

        const imageDom = document.createElement('img')
        imageDom.textContent = currentCity.name
        imageDom.src = currentCity.image
        citySection.appendChild(imageDom)

        const topAttractTitle = document.createElement('h3')
        topAttractTitle.textContent = "List of Top Attractions"
        citySection.appendChild(topAttractTitle)


        const makeTopFive = () => { 
            for(let i = 0; i < currentCity.topFive.length; i ++) {
            let topFiveP = document.createElement('p') 
            topFiveP.textContent += currentCity.topFive[i]
            citySection.appendChild(topFiveP);
            }
        }
        makeTopFive()
           

    });
// Display your trips on the Dom, styled in cards. 
// City name should appear above the image, in a larger font size, with all other details below the image
// Filter the cards based on specific year visited, or all cities
// Style each card with a different background color, colored by continent 
// (North America = green, South America = blue, Asia = purple, Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)
}

citiesDomBuilder()