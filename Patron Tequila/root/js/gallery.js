new Glider(document.querySelector('.glider'), {

    // `auto` allows automatic responsive
    // width calculations
    slidesToShow: 'auto',
    slidesToScroll: 'auto',

    // should have been named `itemMinWidth`
    // slides grow to fit the container viewport
    // ignored unless `slidesToShow` is set to `auto`
    itemWidth: undefined,

    // if true, slides wont be resized to fit viewport
    // requires `itemWidth` to be set
    // * this may cause fractional slides
    exactWidth: false,

    // speed aggravator - higher is slower
    duration: .5,

    // dot container element or selector
    dots: 'CSS Selector',


    // Glider.js breakpoints are mobile-first
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});