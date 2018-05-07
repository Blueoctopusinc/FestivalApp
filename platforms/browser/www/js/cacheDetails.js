 function saveName(){
        var submittedName = document.getElementById("festName").value;       
		window.localStorage.setItem("festivalName", submittedName);
		console.log(window.localStorage.getItem("festivalName"));
		return false;
    }
function saveStartDate(){
var submittedStart = document.getElementById("dateStart").value;       
		window.localStorage.setItem("festivalStart", submittedStart);
		console.log(window.localStorage.getItem("festivalStart"));
		return false;
	
}
function saveEndDate(){
var submittedEnd = document.getElementById("endDate").value;       
		window.localStorage.setItem("festivalEnd", submittedEnd);
		console.log(window.localStorage.getItem("festivalEnd"));
		return false;
	
}