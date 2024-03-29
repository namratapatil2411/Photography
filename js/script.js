var mydiv = document.getElementById('nav')

const navE1=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 50) {
        navE1.classList.add('navbar-scrolled');
        mydiv.setAttribute('class','navbar navbar-expand-lg bg-white py-3 w-100% m-0 fixed-top ')
        
    }
    else if(window.screenY < 50){
            navE1.classList.remove('navbar-scrolled');
            mydiv.setAttribute('class','navbar navbar-expand-lg bg-white py-3 w-100% m-0 position-sticky ')
          }
});