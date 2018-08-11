// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEfYEc2gxiRiLRq3GF7quG67vaeEi1DiY",
    authDomain: "train-activity-b3d04.firebaseapp.com",
    databaseURL: "https://train-activity-b3d04.firebaseio.com",
    projectId: "train-activity-b3d04",
    storageBucket: "",
    messagingSenderId: "1085240119497"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
    even.preventDefault();
    // grabs user input
    var tName = $("#train-name-input").val().trim();
    var tDestination = $("#destination-input").val().trim();
    var tTime = moment($("#first-time").val().trim(), "HH:mm").format("X");
    var tFrequency = $("#frequency-input").val().trim();
    //object for holding data
    var newTrain = {
        name: tName,
        destination: tDestination,
        time: tTime,
        frequecy: tFrequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequecy);

    alert("Train successfully added");

    //clears input boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tTime = childSnapshot.val().time;
    var tFrequency = childSnapshot.val().frequecy;

    console.log(tName);
    console.log(tDestination);
    console.log(tTime);
    console.log(tFrequency);

    var newRow = $("<tr>").append(
        $("<td>").text(tName),
        $("<td>").text(tDestination),
        $("<td>").text(tTime),
        $("<td>").text(tFrequency),
    );

    $("#train-table > tbody").append(newRow);
});