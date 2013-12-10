$(document).ready(function(){
    reblogSmoother();
    $(window).scroll(function(){
        reblogSmoother();
    });
    $('.polishr-show').on('click', showPost);
});

var posts = {}

function reblogSmoother(){
    var index = 0;
    $('.post_full, .post').has('blockquote blockquote').each(function(){
        $(this).addClass('polishr_post_' + index);
        if (!$(this).hasClass('polishr-initialized')) {
            $(this).addClass('polishr-initialized');
            $(this).prepend('<p>[Smoothed by Polishr] <a href="javascript:void(0)" class="polishr-hide">Hide Post</a></p>');
        }
        posts['' + index] = $(this).clone();
        if (!$(this).hasClass('polishr-shown')){
            $(this).html('<p>[Smoothed by Polishr] <a href="javascript:void(0)" class="polishr-show" id="polishr_' + index +'">Show post</a></p>');
        }
        index = index + 1;
    });
    $('.polishr-show').on('click', showPost);
}

function showPost(e){
    var id = e.target.id.split('_')[1];
    var selectionString = '.polishr_post_' + id;
    $(selectionString).replaceWith(posts[id].clone());
    $(selectionString).addClass('polishr-shown');
    $('.polishr-hide').on('click', function() {
        $(this.parentNode.parentNode).removeClass('polishr-shown');
        $(this.parentNode.parentNode).html('<p>[Smoothed by Polishr] <a href="javascript:void(0)" class="polishr-show" id="polishr_' + id +'">Show post</a></p>');
        $('.polishr-show').on('click', showPost);
    });
}
