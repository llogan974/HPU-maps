

var mymap = new L.map('mapid').setView([35.9718003, -79.9948647], 17);


// Mapbox token:pk.eyJ1IjoibGxvZ2FuIiwiYSI6ImNqeG5jMWFmNjBhY2IzZ3VoZmk4MGpzMGEifQ.Kgv8YIHFAis7qf-gjR2xqQ

new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGxvZ2FuIiwiYSI6ImNqeG5jMWFmNjBhY2IzZ3VoZmk4MGpzMGEifQ.Kgv8YIHFAis7qf-gjR2xqQ'
}).addTo(mymap);



/*
Add markers for main gate, Hayworth fine arts center, roberts, and admissions

Main gate: 35.971121,-79.9929103
Admissions:35.971121,-79.9929103
Roberts: 35.971121,-79.9929103
Hayworth: 35.9697383,-79.9931891

*/

// var mainGate = L.marker([35.971121, -0.09]).addTo(mymap);
// var admissions = L.marker([35.971121, -0.09]).addTo(mymap);
// var roberts = L.marker([35.971121, -0.09]).addTo(mymap);
// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d807.2577434273707!2d-79.9924494!3d35.9706682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530eded3ad6139%3A0x39a0ccdc80b5f143!2sHigh+Point+University+Main+Gate!5e0!3m2!1sen!2sus!4v1562165409347!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
var hayworth = L.marker([35.970640, -79.992664]).addTo(mymap);
var mainGate = L.marker([35.971631, -79.991568]).addTo(mymap);
var blessingResHall = L.marker([35.972978, -79.994411]).addTo(mymap);


hayworth.bindPopup("<b>Hayworth Fine Arts Center</b><br>At High Point University").openPopup();

mainGate.bindPopup("<b>Main Gate</b><br>At High Point University").openPopup();

blessingResHall.bindPopup("<b>Blessing Residence Hall</b></br>At High Point University</br><a href=\"http://www.highpoint.edu/residencelife/dormitory/blessing\">Learn More</a>")