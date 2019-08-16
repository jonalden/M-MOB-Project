const youtubeKey = "AIzaSyDdiDag5VDc4sK59dOis6ozkyTndH0gUNc"
const weatherKey = "6a0d470ffbecb6a50a8e962ee8b76d25"

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=6a0d470ffbecb6a50a8e962ee8b76d25"
console.log(weatherURL);
const youtubeURL = "https://www.googleapis.com/youtube/v3/search?&part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyDdiDag5VDc4sK59dOis6ozkyTndH0gUNc"
console.log(youtubeURL);



axios.get(weatherURL).then(response => console.log(response));

axios.get(youtubeURL).then(response => console.log(response));