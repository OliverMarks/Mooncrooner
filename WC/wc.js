// Date and time
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
    setInterval(refreshTime, 1000);
    

// Page counter 


public updatePageNumber(target: number): void {
  let current = parseInt(document.getElementById('pageNumberValue').innerText)
  const diff = Math.abs(target - current); 
  const isAscending = target > current;
  let i = 0;

   while(i<=diff) {
    setTimeout(function)() {
      if(current === target) {
        alert('do your navigate stuff here maybe')

      }
      document.getElementById('pageNumberValue').innerText =
      current.toString();
      isAscending? current++ : current--
    }, 10 * i);
    
    i++
  }
}


    





// Back Link
    var element = document.getElementById('back-link');

// Provide a standard href to facilitate standard browser features such as 
//  - Hover to see link
//  - Right click and copy link
//  - Right click and open in new tab
element.setAttribute('href', document.referrer);

// We can't let the browser use the above href for navigation. If it does, 
// the browser will think that it is a regular link, and place the current 
// page on the browser history, so that if the user clicks "back" again,
// it'll actually return to this page. We need to perform a native back to
// integrate properly into the browser's history behavior
element.onclick = function() {
  history.back();
  return false;
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}




  