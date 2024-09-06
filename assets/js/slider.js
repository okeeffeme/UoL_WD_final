let currentSlide = 0;

function showSlide(myId, index) {
    const slider = document.querySelector(myId);
    if (!slider) {
        alert('myId must be provided')
    }
    const sliderWrapperWidth = slider.selector('div').offsetWidth;
    currentSlide = index;


}