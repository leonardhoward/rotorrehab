
const rotate = document.querySelectorAll('.rotate');

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

// for plus sign animation

for (let i = 0; i <= rotate.length; i++) {
    rotate[i].addEventListener('animationend', function(e) {    
        rotate[i].classList.remove('animated');
    });


   rotate[i].addEventListener('mouseover', function(e) {
     rotate[i].classList.add('animated')
   })
  }


  //for map
  
  // function initMap(){
//     var options = {
//         zoom: 10,
//         center: {lat: 35.068547, lng: -106.538099}
        
//     }
//     var map = new google.maps.Map(document.getElementById('map'), options);
// }


