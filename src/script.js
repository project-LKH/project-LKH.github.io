

function toggleNav() {
  const nav = document.getElementById("nav-bar");
  if (nav.style.display === "none") {
    nav.style.display = "grid";
  } else {
    nav.style.display = "none";
  }
}


// const topBtn= document.getElementById("topBtn");
// window.onscroll = function(){
//     scrollFunction()
// }
// function scrollFunction(){
//     if (document.body.scrollTop>20||document.documentElement.scrollTop>20){
//         topBtn.style.display= "block";
//     }else{
//         topBtn.style.display= "none";
//     }
// }
//  function topFunction(){
//     document.body.scrollTop=0;
//     document.documentElement.scrollTop=0;

//  }