//document.write("<br>");

//alert("Testing that this works.");

var images = [
  "CharlieVannFirstPic.jpeg",
  "CharliePirate.jpeg",
  "CharlieUNCFan.jpg",
  "CharlieMoai.jpeg"
];

var i=0;

function slide(){
  document.getElementById("first-image").src = images[i];
  if(i < (images.length-1))
  i++;
  else
  i=0;
}

setInterval(slide, 2500)