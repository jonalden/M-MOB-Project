const youtubeKey = "AIzaSyDdiDag5VDc4sK59dOis6ozkyTndH0gUNc"
const weatherKey = "6a0d470ffbecb6a50a8e962ee8b76d25"

// add onclick function to submit button

document.getElementById("button").addEventListener("click", function () {

    let city = document.getElementById("userInput").value.trim();

    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
    console.log(weatherURL);
    const youtubeURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=" + youtubeKey;
    console.log(youtubeURL);

    axios.get(weatherURL).then(function (response) {
        console.log(response);

      

            weatherDiv = document.createElement("div");
            weatherDiv.classList.add("weatherDisplay");

            let weatherData = response.data.weather[0].icon + "<br>" + response.data.base;
            console.log

            weatherDiv.innerHTML = weatherData;

           document.getElementById("weatherDiv").append(weatherDiv);
    })

    axios.get(youtubeURL).then(function (response) {
        console.log(response);

        youtubeDiv = document.createElement("div");
            yuotubeDiv.classList.add("youtubeDisplay");

            let youtubeData = response.data.weather[0].icon + "<br>" + response.data.base;
            console.log

            youtubeDiv.innerHTML = youtubeData;

           document.getElementById("youtubeDiv").append(youtubeDiv);
    })
    // create an array to hold object from API Url
    // create function to create HTML div dynamically
    // create a for loop to loop through array objects
    // populate div with array[i] 
})
