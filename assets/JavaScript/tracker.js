//local forage get function with a callback of result or an empty array
function getRunInfo(cb) {
    localforage.getItem("runTracking").then(function (result) {
        cb(result || []);
    });
}

//local forage set function 
function setRunInfo(newRunInfo, cb) {
    localforage.setItem("runTracking", newRunInfo).then(cb);
};

//on click function to store value of user input to local storage
document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
        event.preventDefault();


        let dateInput = document.getElementById("dateInput").value;
        let distanceInput = document.getElementById("distanceInput").value.trim();
        let startInput = document.getElementById("startInput").value;
        let endInput = document.getElementById("endInput").value;

        let runData = {
            dateInput: dateInput,
            distanceInput: distanceInput,
            startInput: startInput,
            endInput: endInput
        }
        console.log(runData);

        //calling getRun function and pushing result into a new array
        getRunInfo(function (result) {
            let newArray = result;

            updateDisplay(result);
            console.log(result);

            newArray.push(runData);
            console.log(newArray);

            // //setting the new array to local storage
            setRunInfo(newArray, function () {
                console.log(newArray);
            })
        })
    })


function updateDisplay(result) {
    console.log(result);

    let distanceInput = document.getElementById("distanceInput").value.trim();
    let tableContainer = document.getElementById("tableBody");
    tableContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {

        let startTime = result[i].startInput;
        let endTime = result[i].endInput;
        let startTimeConverted = moment(startTime, "hh:mm");
        let endTimeConverted = moment(endTime, "hh:mm");

        console.log("start time", startTime);
        console.log("end time", endTime);
        console.log("end time converted", endTimeConverted);
        console.log("start time converted", startTimeConverted);
        
        let diffTime = endTimeConverted.diff(moment(startTimeConverted), "minutes");
        let averageSpeed = diffTime / distanceInput;
        console.log("average speed", averageSpeed);
        console.log("diff time", diffTime);

        //populating the HTML elements with the result index
        tableContainer.innerHTML += "<tr><td>" + result[i].dateInput +
            "</td><td>" + result[i].distanceInput + "</td><td>" + diffTime + " " + " minutes" + "</td><td>"
            + averageSpeed + "</td>";
    }
}

// window.setInterval(function () {


// }, 1000)
