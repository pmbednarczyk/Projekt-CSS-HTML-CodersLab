document.addEventListener("DOMContentLoaded", function(event) {
    /* Slider */
    var sliderContainer = document.querySelector('.slider');
    var nextSlide = document.querySelector('.nextSlide');
    var prevSlide = document.querySelector('.prevSlide');
    var allSlides = [...sliderContainer.querySelectorAll('.slider-content')];
    var counter = 0;
    prevSlide.style.color = "#c6c6c6";
    nextSlide.addEventListener('click', function(event){
        if (counter <= allSlides.length - 2) {
            allSlides[counter].style.marginLeft = "-100%";
            counter++;
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
            if (counter < allSlides.length && counter >= 1) {
                nextSlide.style.color = "#24ba9f";
            } else {
                this.style.color = "#c6c6c6";
            }
        }
    });


    /* Calculator */
    var dropdownLists = [...document.querySelectorAll('.drop_down_list')];
    var listPanel = [...document.querySelectorAll('.list_panel')];
    var listPanelLi = [...document.querySelectorAll('.list_panel > li')];
    var listLabel = [...document.querySelectorAll('.list_label')];

    var transportCheckbox = document.querySelector('.checkbox label');
    var transportInput = document.querySelector('.checkbox input');

    /*Summary Panel Values*/
    var chairTitle = document.querySelector('.panel_left .title');
    var chairColor = document.querySelector('.panel_left .color');
    var chairPattern = document.querySelector('.panel_left .pattern');
    var chairTransport = document.querySelector('.panel_left .transport');
    var chairTitleValue = document.querySelector('.panel_right .title.value');
    var chairColorValue = document.querySelector('.panel_right .color.value');
    var chairPatternValue = document.querySelector('.panel_right .pattern.value');
    var chairTransportValue = document.querySelector('.panel_right .transport.value');
    var sumCounter = 0;
    var sumContainer = document.querySelector('.sum');




    dropdownLists.forEach(function (el) {
        el.addEventListener('click', function (event) {
            if (this.lastElementChild) {
                this.lastElementChild.classList.toggle("block");
            }
        });
    });



    listPanelLi.forEach(function (el) {
        function calc(itemTitle, itemValue) {
            itemTitle.innerText = el.innerText;
            itemValue.innerText = el.dataset.price + "zł";
            sumCounter += parseInt(el.dataset.price);
            sumContainer.innerText = sumCounter + "zł";
        };

        el.addEventListener('click', function (event) {
            var label = this.parentElement.parentElement.firstElementChild
            label.innerText = el.innerText;
            label.style.color = "black";
            if (this.parentElement.parentElement == dropdownLists[0]) {
                calc(chairTitle, chairTitleValue);
            } else if (this.parentElement.parentElement == dropdownLists[1]) {
                calc(chairColor,chairColorValue);
            } else if (this.parentElement.parentElement == dropdownLists[2]) {
                calc(chairPattern, chairPatternValue);
            }
        });
    });

    transportCheckbox.addEventListener('click', function (event) {
            if (chairTransport.innerText && chairTransportValue.innerText) {
                chairTransport.innerText = "";
                chairTransportValue.innerText = "";
                sumCounter -= parseInt(transportInput.dataset.transportPrice);
                sumContainer.innerText = sumCounter + "zł";
            } else {
                chairTransport.innerText = "Transport";
                chairTransportValue.innerText = transportInput.dataset.transportPrice + "zł";
                sumCounter += parseInt(transportInput.dataset.transportPrice);
                sumContainer.innerText = sumCounter + "zł";
            }

    });





});