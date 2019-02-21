/**************************************
 * Image slider
 * 
 * Used on the Videos Page for mobile
 * navigation to select video playlist
 **************************************/
export function imgSlider() {
    let sliderImages = document.querySelectorAll('.slide');
    let arrowLeft = document.querySelector('#arrow-left');
    let arrowRight = document.querySelector('#arrow-right');
    let currentPage = document.getElementById('currentVid');
    let current = 0;


    //Get the correct image value for the page showing so arrows show correct next image when scrolling
    for (let i = 0; i < sliderImages.length; i++) {
        if (sliderImages[i].classList[1] == currentPage.classList[1]) {
            break;
        } else {
            current++;
        }
    }




    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }



    function startSlide() {
        reset();
        currentPage.style.display = 'block';


    }

    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    arrowLeft.addEventListener('click', function() {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    arrowRight.addEventListener('click', function() {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });
    startSlide();
}