/*Slider */
$('.slider__list>ul').slick({
    slidesToShow: 4,
    variableWidth: true,
    arrows: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 740,
            settings: {
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 10000, 
            settings: {
                slidesToScroll: 3,
            }
        }
    ]
});

$('.movie__update-poster').slick({
    autoplay: true,
    autoplaySpeed:5000,
    arrows: false,
    vertical: true,
    infinite: true,
});

/*Tab */
var tabs = document.querySelectorAll('.movie__update-tab')
var panes = document.querySelectorAll('.movie__update-pane')

tabs.forEach((tab, index) => {
    tab.onclick = function() {
        var tabActive = document.querySelector('.movie__update-tab.active')
        var paneShow = document.querySelector('.movie__update-pane.show-block')
        
        tabActive.classList.remove('active')
        paneShow.classList.remove('show-block')
        
        this.classList.add('active')
        panes[index].classList.add('show-block')
    }
})

