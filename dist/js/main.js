/*
function scrollAppear(){
    var row= document.querySelector('.row');
    var rowPosition= row.getBoundingClientRect().top;
    var rowAppear= window.innerHeight;
     
        if(rowPosition < rowAppear){
            row.classList.add('row-appear');
        }  
}

window.addEventListener('scroll',scrollAppear);

*/




const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


function initMap(){
    var options = {
        zoom: 10,
        center: {lat: 35.105, lng: -106.541}
        
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
}


  //  var zone = {lat: 35.105, lng: -106.541};
  
  

