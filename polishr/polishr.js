$(document).ready(function(){
    reblogSmoother();
    $(window).scroll(function(){
        reblogSmoother();
    });
});

function reblogSmoother(){
    var posts = $('.post_full, .post').has('blockquote blockquote')
    posts.html('[Smoothed by Polishr]');
}