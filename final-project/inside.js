
var clubName = document.getElementById("club-name");
clubName.innerText = localStorage.getItem("ClubName")

var clubtime = document.getElementById("club-time");
clubtime.innerText = localStorage.getItem("ClubTimes")

var clubhead = document.getElementById("club-head");
clubhead.innerText = localStorage.getItem("ClubHeads")

var clubdes = document.getElementById("club-description");
clubdes.innerText = localStorage.getItem("ClubDescription")


var clublogojs =  document.getElementById("club-logo-inside")

if (localStorage.getItem("ClubName") == "Secrets Of Success") {
	clublogojs.src = "Images/sos.jpeg"
}

if (localStorage.getItem("ClubName") == "Investment Club") {
	clublogojs.src = "Images/invclub.webp"
}

if (localStorage.getItem("ClubName") == "Chess Club") {
	clublogojs.src = "Images/chess.png"
}

if (localStorage.getItem("ClubName") == "Sports Debate Club") {
	clublogojs.src = "Images/Sports.png"
}

if (localStorage.getItem("ClubName") == "Let’s Take Action") {
	clublogojs.src = "Images/LTA.png"
}

if (localStorage.getItem("ClubName") == "SASA") {
	clublogojs.src = "Images/SAS.jpg"
}

if (localStorage.getItem("ClubName") == "Math Club") {
	clublogojs.src = "Images/mckm.png"
}

if (localStorage.getItem("ClubName") == "The Parker Weekly") {
	clublogojs.src = "Images/tpw.jpg"
}

if (localStorage.getItem("ClubName") == "Ping Pong Club") {
	clublogojs.src = "Images/ppc.png"
}