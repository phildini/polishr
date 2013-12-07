$(document).ready(function(){
    reblogSmoother();
    $(window).scroll(function(){
        reblogSmoother();
    });
});

function reblogSmoother(){
    $('.post_full, .post').has('blockquote blockquote').html('[Smoothed by Polishr]');
}