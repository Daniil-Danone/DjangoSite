$(document).ready(function () {
    let position = 0;
    const slidesToShow = 5;
    const slidesToScroll = 1;
    const container = $('.awards');
    const track = $('.slider-track');
    const item = $('.award');
    const btnPrev = $('.prev-btn');
    const btnNext = $('.next-btn');
    const btnStart = $('.start-btn');
    const btnEnd = $('.end-btn');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    const rotate = $('.rotate')
    const underRotate = $('.under-rotate')
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    rotate.click(function () {
        underRotate.css({
            transform: 'rotate(90deg)',
            transition: '1s'
        })
    })

    item.click(function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {

        modal.style.display = "none";
        underRotate.css({
            transform: 'rotate(0deg)',
            transition: '0s'
        })
    }


    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth - 5
        })
    });

    btnStart.click(function () {
        position = 0
        setPosition();
    });

    btnEnd.click(function () {
        position = - (itemsCount - slidesToShow) * itemWidth
        setPosition();
    });

    btnPrev.click(function(){
        position += movePosition;

        setPosition();
    });

    btnNext.click(function(){
        position -= movePosition;

        setPosition();
    });

    const setPosition = () => {
        track.css({
            transform: 'translateX('+position+'px)'
        });
        checkBtns();
    };

    const checkBtns = () => {
        btnPrev.attr('disabled', position === 0);
        btnNext.prop('disabled', position <= - (itemsCount - slidesToShow) * itemWidth);
    };

    checkBtns();

});