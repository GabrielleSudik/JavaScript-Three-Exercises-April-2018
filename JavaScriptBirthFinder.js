//document.write("<br>");

//Birth Finder Project

alert("Alert to confirm js is working.");


document.getElementById("year").style.display="none";
document.getElementById("button").onclick = function(){calculateBirthYear();}

function calculateBirthYear(){
  var number = document.getElementById("number").value;
    if(number == "" || number == 0) {
      alert("Please type your age in the box.");
      return;
    }

  var date = new Date().getFullYear();
  var birthyear = number - date;

  document.getElementById("year").style.display="block"; 
  document.getElementById("year").innerHTML="You were born in: " + birthyear; 
}


//the following is the instructor's code, because something isn't working above.

/*
function calculate(){
			
				var number = document.getElementById("number").value;
				
					if(number== "" || number== 0){
						window.alert("Please type your age!");
						return;
					}
					
				var date = new Date().getFullYear();
				
				var birthyear = number - date;
				
				document.getElementById("year").style.display = "block";
				document.getElementById("year").innerHTML = "Your Birth Years is - " + birthyear;
			
			}
						

				document.getElementById("year").style.display = "none";
				document.getElementById("button").onclick = function () { calculate(); }
*/

//well the instructor's code doesn't work either. wth? :(