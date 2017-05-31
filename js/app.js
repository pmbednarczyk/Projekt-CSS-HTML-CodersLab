document.addEventListener("DOMContentLoaded", function(event) {
    var sliderContainer = document.querySelector('.slider');
    var nextSlide = document.querySelector('.nextSlide');
    var prevSlide = document.querySelector('.prevSlide');
    var allSlides = [...sliderContainer.querySelectorAll('.slider-content')];
    var counter = 0;
    console.log(allSlides.length);
    console.log(allSlides.length - 1);
    prevSlide.style.color = "#c6c6c6";
        nextSlide.addEventListener('click', function(event){
            if (counter <= allSlides.length - 2) {
                allSlides[counter].style.marginLeft = "-100%";
                counter++;
                console.log(counter);
                if (counter < allSlides.length -1) {
                    prevSlide.style.color = "#24ba9f";
                } else {
                    this.style.color = "#c6c6c6";
                }
            }


        });
        prevSlide.addEventListener('click', function(event){
            if (counter <= (allSlides.length - 1) && counter >= 1) {
                --counter;
                allSlides[counter].style.marginLeft = "0";
                console.log(counter);
                if (counter < allSlides.length && counter >= 1) {
                    nextSlide.style.color = "#24ba9f";
                } else {
                    this.style.color = "#c6c6c6";
                }
            }
        });


});