var canvas = document.getElementById("canvas");
var tatdude = document.getElementById("tatdude");
window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  if(y > 1000){
      console.log(y>1000);
      tatdude.src="tat-dude70s.png";

  }else{
  tatdude.src="tat-dude80s.png";
 }

};
