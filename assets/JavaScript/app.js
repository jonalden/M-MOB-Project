const youtubeKey = "AIzaSyDdiDag5VDc4sK59dOis6ozkyTndH0gUNc"
const weatherKey = "6a0d470ffbecb6a50a8e962ee8b76d25"
const deezerKey = " d7e2c32e4e20a97cf3752a20536bd754"

// add onclick function to submit button

document.getElementById("button").addEventListener("click", function () {

    let city = document.getElementById("userInput").value.trim();

    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
    console.log(weatherURL);
    const youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=" + youtubeKey;
    console.log(youtubeURL);



// body content with tables//

    axios.get(weatherURL).then(function (response) {
        console.log(response.data   );


        document.getElementById("weather").textContent = (response.data.main.temp - 273.15) * 9/5 + 32;
        document.getElementById("weatherDescription").textContent = response.data.weather[0].description;

        //     weatherDiv = document.createElement("div");
        //     weatherDiv.classList.add("weatherDisplay");

        //     console.log

        //     weatherDiv.innerHTML = weatherData;

        //    document.getElementById("weatherTable").append(weatherDiv);
    })


    // Video/Audio//

    axios.get(youtubeURL).then(function (response) {
        console.log(response);

        youtubeDiv = document.createElement("div");
            youtubeDiv.classList.add("youtubeDisplay");

            let youtubeData = response.config.url + response.data.base;
            console.log

            youtubeDiv.innerHTML = youtubeData;

           document.getElementById("youTubeTable").append(youtubeDiv);
    })


    // Beet Content Info

    axios.get(beerURL).then(function (response) {
        console.log(response);

        beerDiv = document.createElement("div");
            beerDiv.classList.add("beerDisplay");

            let youtubeData = response.config.url + "<br>" + response.data.base;
            console.log

            beerDiv.innerHTML = youtubeData;

           document.getElementById("beerTable").append(beerDiv);
    })











    // create an array to hold object from API Url
    // create function to create HTML div dynamically
    // create a for loop to loop through array objects
    // populate div with array[i] 
})
