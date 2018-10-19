 // https://codepen.io/Xiija/pen/PyeMog?editors=1011?page="challenges"
 // add .... ?page="challenges"

var here = window.location.href;
window.location = here + '?page="challenges"'; 
var site = "https://github.com/CodingTrain/website/tree/master/CodingChallenges";  //"http://scratchpads.eu/";
var getText = document.getElementById("get");
var go = document.getElementById("go");
go.innerHTML = site; 

if (window.location.search) {
  var sendr =  decodeURI( window.location.search );  
  var indexOfFirst = sendr.indexOf("page=");  
  sendr = sendr.substring( indexOfFirst + 5 );  
  getText.innerHTML = sendr;
  if ( sendr === '"challenges"')
    {  window.location = site; 
    }  
  else
    { console.log("error: " + sendr);         
    }
} else {
  getText.innerHTML = "none"; 
  
}

