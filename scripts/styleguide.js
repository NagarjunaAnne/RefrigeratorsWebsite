var $ = function(id) { return document.getElementById(id) };

window.onload = function() {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("image");
        
    var links = listNode.getElementsByClassName("image-carasoel");
    console.log(links)
    // Process image links
    var i, linkNode, image;
    var imageCache = [];
    for ( i = 0; i < links.length; i++ ) {
        linkNode = links[i];
        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.title = linkNode.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    // Start slide show
    var imageCounter = 0;
    var  timer = setInterval(
        function () { 
            imageCounter =
                (imageCounter + 1) % imageCache.length;
            image = imageCache[imageCounter];
            console.log(imageNode)
            imageNode.src = image.src;
           
        },
        2000);
};
