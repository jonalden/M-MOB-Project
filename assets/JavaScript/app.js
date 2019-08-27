
const weatherKey = "6a0d470ffbecb6a50a8e962ee8b76d25"
const napsterKey = "MjMxMDBhNjktY2YzNS00MTQwLWJjMTUtZGJmMmE0NjY3ODhi"
let perPage = 9;
let offset = 0;
const userInput = document.getElementById("button");

const quotes = ['"Run when you can, walk if you must, crawl if you have to, just never give up"', '"We are what we repeatedly do. Excellence, then, is not an act, but a habit"', '"One run can change your day. Many runs can change your life"', '"The miracle isn’t that I finished. The miracle is that I had the courage to start"'];



// add onclick and enter key function to submit button
const input = document.getElementById("userInput");
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("button").click()
    }
})



//main function to display all info after submit button is clicked
document.getElementById("button").addEventListener("click", function (event) {



    // grabbing the user input from the form
    event.preventDefault()
    let city = document.getElementById("userInput").value.trim();

    //variable containing the Open Weather URL
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
    console.log(weatherURL);

    //variable containing the Napster URL
    const napsterSongURL = "https://api.napster.com/v2.1/playlists/pp.188152066/tracks?apikey=" +
        napsterKey + "&limit=" + perPage + "&offset=" + offset;
    console.log(napsterSongURL);



    //if statement to run the functions in the click listener 
    if (offset === 0) {
        getMusic();
        getQuotes();
        getweather();
        moveButton();
    }
    else {
        getMusic();
    }



    //function for getting music from Napster
    function getQuotes() {

        //grabbing motivational quote from the dom and changing the HTML to the quotes in pour array
        const quoteDiv = document.getElementById('motivationalQuote');
        quoteDiv.innerHTML = '"The voice inside your head that says you can’t do this is a liar"';
        let counter = 0;

        //function to cycle through the quotes in the array without repeating the quote twice in a row
        function nextWord() {
            quoteDiv.innerHTML = quotes[counter % quotes.length];
            counter += 1;
        }

        //setting interval to display a new quote every 7 seconds
        setInterval(nextWord, 7000);
    }




    //function for getting weather data
    function getweather() {

        // Get function using Axios to call the response of Open Weather
        axios.get(weatherURL).then(function (response) {
            console.log(response.data);

            //creating div for Open Weather and assigning it a class
            weatherDiv = document.createElement("div");
            weatherDiv.classList.add("weatherDisplay");

            document.getElementById("weather").textContent = Math.floor(response.data.main.temp - 273.15) * 9 / 5 + 32 + " " + "degrees Farenheit";
            document.getElementById("weatherDescription").textContent = response.data.weather[0].description;
        })
    }




    function getMusic() {

        // Get function using Axios to call the response of Napster
        axios.get(napsterSongURL).then(function (response) {
            console.log(response);

            //grabbing songs from Napster API
            let napsterSongData = response.data.tracks;

            //adds 9 new songs when button is pressed
            offset += napsterSongData.length;

            //looping through the songs in the Napster API
            for (i = 0; i < napsterSongData.length; i++) {
                let myUrl = napsterSongData[i].previewURL;
                let artistID = napsterSongData[i].artistId;
                let artistImageURL = "https://api.napster.com/imageserver/v2/artists/" + artistID +
                    "/images/300x300.jpg?apikey=" + napsterKey + "&limit=" + perPage + "&offset=" + offset;
                let artistImage = "<img id='artistImage' src=' " + artistImageURL + "'/>";

                //adding a header for the Napster div by changing the HTML of #musicQuote
                const getMoving = document.getElementById("musicQuote");
                getMoving.innerHTML = "A little something to get you on your feet!";

                //creating a div for Napster and assigning it a class
                let songDiv = document.createElement("div");
                songDiv.classList.add("songDisplay");


                //creating artist images and audio elements for each song in the API array
                let html = artistImage + "<audio controls><source class='audioSource' src=" + myUrl + "></audio>";
                songDiv.innerHTML += html;

                //appending the musicQuote and the songDiv to the DOM
                document.getElementById("napsterDiv").prepend(getMoving);
                document.getElementById("napsterDiv").append(songDiv);
            }
        })
    }



    function moveButton() {

        // const newButton = document.getElementById("button");
        // newButton.innerHTML = '<button type="button" class="btn btn-primary" id="button" onclick="getMusic()">Grab More Music</button>';
        // document.getElementById("newButton").append(newButton);
    }


    //hiding the form and submit button after being clicked to better display all data
    document.getElementById("form").innerHTML = "";
    document.getElementById("slogan").innerHTML = "";
})
