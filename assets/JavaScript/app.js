
const weatherKey = "6a0d470ffbecb6a50a8e962ee8b76d25"
const napsterKey = "MjMxMDBhNjktY2YzNS00MTQwLWJjMTUtZGJmMmE0NjY3ODhi"


// add onclick and enter key function to submit button
const input = document.getElementById("userInput");
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

document.getElementById("button").addEventListener("click", function (event) {

    // grabbing the user input from the form
    event.preventDefault()
    let city = document.getElementById("userInput").value.trim();

    //variable containing the Open Weather URL
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
    console.log(weatherURL);

    //variable containing the Napster URL
    const napsterSongURL = "https://api.napster.com/v2.1/playlists/pp.188152066/tracks?apikey=" + napsterKey + "&limit=9";
    console.log(napsterSongURL);

    const napsterImageURL = "https://api.napster.com/imageserver/v2/playlists/pp.188152066/artists/images/230x153.jpg?apikey=" + napsterKey + "&limit=9";
    console.log(napsterImageURL);

    // Get function using Axios to call the response of Open Weather
    axios.get(weatherURL).then(function (response) {
        console.log(response.data);

        //creating div for Open Weather and assigning it a class
        weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weatherDisplay");

        let weatherData = response.data.weather[0].icon + "<br>" + response.data.base;

        weatherDiv.innerHTML = weatherData;

        document.getElementById("weatherDiv").append(weatherDiv);
    })

    // Get function using Axios to call the response of Napster
    axios.get(napsterSongURL).then(function (response) {
        console.log(response);

        //creating a div for Napster and assigning it a class
        napsterDiv = document.createElement("div");
        napsterDiv.classList.add("napsterDisplay");

        //grabbing songs from Napster API
        let napsterSongData = response.data.tracks;
        napsterDiv.innerHTML = napsterSongData;

        for (i = 0; i < napsterSongData.length; i++) {
            let myUrl = napsterSongData[i].previewURL;

            let html = "<audio controls><source class='audioSource' src=" + myUrl + "></audio>"
            document.getElementById("napsterDiv").innerHTML += html;
        }
    })

    axios.get(napsterImageURL).then(function (response) {
        console.log(response);

    })


    // document.getElementById("weather").textContent = (response.data.main.temp - 273.15) * 9/5 + 32;
    // document.getElementById("weatherDescription").textContent = response.data.weather[0].description;

    //         //     weatherDiv = document.createElement("div");
    //         //     weatherDiv.classList.add("weatherDisplay");

    //         //     console.log

    //         //     weatherDiv.innerHTML = weatherData;

    //         //    document.getElementById("weatherTable").append(weatherDiv);
    //     })
}) 