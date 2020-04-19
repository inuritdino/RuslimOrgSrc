//= require lunr.min

var lunrIndex = null;
var lunrData  = null;

function hideRightPanel() {
    var x = document.getElementById("right").style.display;
    if(x != "none"){
	document.getElementById("hide-right").innerHTML = "&laquo;";
	document.getElementById("right").style.display = "none";
	document.getElementById("content").style.width = "1006px";
	document.getElementById("content").style["border-style"] = "none";
    }
    if(x === "none"){
	document.getElementById("hide-right").innerHTML = "&raquo;";
	document.getElementById("right").style["min-height"] = "250px";
	document.getElementById("right").style["display"] = "-moz-inline-stack";
	document.getElementById("right").style["display"] = "inline-block";
	document.getElementById("right").style["vertical-align"] = "top";
	document.getElementById("right").style["zoom"] = "1";
	document.getElementById("right").style["*display"] = "inline";
	document.getElementById("right").style["_height"] = "250px";
	document.getElementById("content").style.width = "680px";
	document.getElementById("content").style["border-right"] = "solid 1px #ddd";
    }
}

// Download index data
$.ajax({
  url: '/lunr-index.json',
  cache: true,
  method: 'GET',
  success: function(data) {
      lunrData = data;
      lunrIndex = lunr.Index.load(lunrData.index);
  }
});

// function showSearchResults(searchTerm){
//     document.getElementById("search-box").innerHTML = searchTerm;
//     var = lunrIndex.search(searchTerm);
//     var result = _(lunrIndex.search(request.term)).take(50).pluck('ref').map(function(ref) {
//         return lunrData.docs[ref];
//     }).value();
//     if (result.length == 0){
// 	//document.getElementById("content").innerHTML = "No results found";
// 	document.write("No results found");
//     }
//     else {
// 	//document.getElementById("content").innerHTML = result[0];
// 	document.write("Something was found!");
//     }
// }
