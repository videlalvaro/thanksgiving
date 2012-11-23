var sockUrl = 'http://' + window.location.host +'/broadcast';
console.log('sockUrl: ', sockUrl);
var sock = new SockJS(sockUrl);
sock.onopen = function (event) {
    console.log('sockjs connection ready');
};
sock.onmessage = function (event) {
    var images = JSON.parse(event.data);
    console.log("data: ", event.data);
    jQuery.each(images, function(index, image) {
        console.log(index, image);
        var html = '<div id="box-' +  image.id + '" class="imagebox">' +
            '<div><a href="' + image.link + '" target="_new"><img class="userimage" src="' + image.images.thumbnail.url + '"></a>' +
            '</div></div>';
        console.log(html);
        jQuery('#image-list').prepend(html).masonry('reload');
    });
};