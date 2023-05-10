//Menu bar
const toggleBtn =document.querySelector('.toogle_btn')
const toggleBtnIcon =document.querySelector('.toogle_btn i')
const dropDownMenu =document.querySelector('.dropdown_menu')

document.querySelector('.toogle_btn').addEventListener('click',function(){
        dropDownMenu.classList.toggle('open')
        const isOpen =dropDownMenu.classList.contains('open')
        toggleBtnIcon.classList=isOpen?"fa-solid fa-xmark":"fa fa-bars"
})


let slideIndex = 1;
showSlides(slideIndex)

function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

             function showSlides(n) {
             let i;
             let slides = document.getElementsByClassName("mySlides");
             let dots = document.getElementsByClassName("dot");
             if (n > slides.length) {slideIndex = 1}    
             if (n < 1) {slideIndex = slides.length}
             for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(".active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }



