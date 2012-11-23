function initMasonry() {
    $('#image-list').masonry({
        itemSelector : '.imagebox',
        columnWidth : 160,
        isAnimated: true
    });
}

jQuery(document).ready(function() {
    initMasonry();
});