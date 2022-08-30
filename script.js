const el = document.querySelector("#text");
const text = "Olá, meu nome é Walter E. Rodrigues. Front-End Developer!"
const interval = 100;
document.getElementById("text").style.color = "#efefef"

function showText(el, text, interval){

   const char = text.split("").reverse();

   const typer = setInterval(() => {
       
        if(!char.length) {
           return clearInterval(typer);
       }

       const next = char.pop();

       el.innerHTML += next;

   }, interval);

}

showText(el, text, interval);

const target = document.querySelectorAll('[animation]');
const animationClass = 'animate';

function animeScroll() {
   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
   target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
         element.classList.add(animationClass);
      } else {
         element.classList.remove(animationClass);
      }
   })
}

animeScroll();

window.addEventListener('scroll', function(){
   animeScroll();
})