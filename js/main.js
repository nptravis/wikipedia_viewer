var btn = document.getElementById("button");
var wikiInfo = document.getElementById("wiki-info");


btn.addEventListener("click", function(){
	wikiInfo.innerHTML = "";
	var searchTerm = document.getElementById("searchTerm").value;
	var ourUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&format=json";
	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", ourUrl);
	ourRequest.onload = function(){
		
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
		console.log(ourData);
	}

	ourRequest.send();

});

function renderHTML(data) {
    for (var i = 0; i < 5; i++){
    	wikiInfo.innerHTML += "<a href='" + data[3][i] + "' target='_blank'><li>" + "<h2>" + data[1][i] + "</h2>" + " - " + data[2][i] + "</li></a><hr>";
    };
 
	
	

}