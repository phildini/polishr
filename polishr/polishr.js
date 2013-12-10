$(document).ready(function(){
    reblogSmoother();
    $(window).scroll(function(){
        reblogSmoother();
    });
    $('.polishr-link').on('click', showPost);
});

var posts = {}

function reblogSmoother(){
    var index = 0;
    $('.post_full, .post').has('blockquote blockquote').each(function(){
        posts['' + index] = $(this).clone();
        $(this).html('<p>[Smoothed by Polishr] <a href="javascript:void(0)" class="polishr-link" id="polishr_' + index +'">Show post</a><p>');
        $(this).addClass('polishr_post_' + index);
        index = index + 1;
    });
    $('.polishr-link').on('click', showPost);
}

function showPost(e){
    var id = e.target.id.split('_')[1];
    $('.polishr_post_' + id).html(posts[id].clone());
}