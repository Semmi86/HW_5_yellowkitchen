jQuery(document).ready(($)=>{

    // документ загружен!

    $('.element-1').owlCarousel({
        nav: true,
        navText : ["<img src='/images/arrow_left.png'>","<img src='/images/arrow_right.png'>"],
        items: 4,
        loop: true,
        margin: 20,
        dots: false

    });

    $('.element-2').owlCarousel({
        nav: true,
        navText : ["<img src='/images/arrow_left.png'>","<img src='/images/arrow_right.png'>"],
        items: 8,
        loop: true,
        margin: 20,
        dots: false

    });

});