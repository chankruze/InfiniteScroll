window.addEventListener("scroll", function () {
    var wrap = document.getElementById('timeline');
    var contentHeight = wrap.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    if (y >= contentHeight) {
        setTimeout(function () { wrap.innerHTML = wrap.innerHTML + "<div><h2>New Post</h2><img class='gurl' src='images/content/gurl.jpg'> <img class='gurl' src='images/content/comment.png'> <img class='gurl' src='images/content/sexy-01.jpg'> <img class='gurl' src='images/content/comment.png'> <img class='gurl' src='images/content/sexy-02.jpg'> <img class='gurl' src='images/content/comment.png'></div>"; }, 1500);
    }
})
