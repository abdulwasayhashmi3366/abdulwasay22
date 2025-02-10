
$( document ).ready(function() {
    $('.client-slider').slick({
        infinite: true,
        dots: true,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});