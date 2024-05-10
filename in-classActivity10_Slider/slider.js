$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true, // Option 5: Set automatic transitions to 3 seconds
        minSlides: 1, // Option 4: Display only one image at a time
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true, // Option 2: Select the first image randomly
        moveSlides: 1 // Option 3: Moves one slide at a time
    });

    // Option 6: Add pager
    var slider = $("#slider").bxSlider();
    var pagerHtml = '<div id="bx-pager">';
    slider.find('li').each(function(index) {
        pagerHtml += '<a data-slide-index="' + index + '" href="">' + (index + 1) + '</a>';
    });
    pagerHtml += '</div>';
    $('#pager').html(pagerHtml);
});
