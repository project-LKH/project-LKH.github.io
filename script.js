var topbtn= document.getElementById("topBtn");
window.onscroll = function(){
    scrollFunction()
}
function scrollFunction(){
    if (document.body.scrollTop>20||document.documentElement.scrollTop>20){
        topbtn.style.display="block";
    }else{
        topbtn.style.display= "none";
    }
}
 function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

 }




// const card = document.querySelector(".card");
// const skills = document.querySelector(".skills");
// const about = document.querySelector(".about");
// skills.addEventListener(
//   "click",
//   () => (card.style.transform = "rotateY(180deg)")
// );
// about.addEventListener("click", () => {
//   card.style.transform = "rotateY(0deg)";
// });
