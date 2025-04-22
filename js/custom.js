$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 1000,
    });


})

$(function () {
    const MMS = new Swiper('.main_pr_slide', {/*옵션입력*/
        loop: true,
        slidesPerView: 6, /*swiperjs에서 받아왔음*/
        spaceBetween: 30, /*swiperjs에서 받아왔음*/
        autoplay: {
            delay: 0, /*0이면 머무르는 시간이 0초*/
            disableOnInteraction: false,
        }, /*swiperjs에서 받아왔음*/

        speed: 5000, /*2500은 2.5초이다*/
    });
});