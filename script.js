const pics_src = ["tbl.png","mybgratan.png","mybraza.png"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 5000);

function hamburger() {
  　　document.getElementById('line1').classList.toggle('linea');
  　　document.getElementById('line2').classList.toggle('lineb');
  　　document.getElementById('line3').classList.toggle('linec');
  　　document.getElementById('target').classList.toggle('slidex');
  　　document.getElementById('nav_f').classList.toggle('fadein');
  }

  document.getElementById('target').addEventListener('click', function () {
  　　hamburger();
  });

  let list = document.getElementsByClassName('list');

  for (let i = 0; i < list.length; i++) {
  　　list[i].addEventListener('click', function () {
  　　　　hamburger();
});
}