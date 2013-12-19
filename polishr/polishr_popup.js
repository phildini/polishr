$(document).ready(function(){
    $('.polishr_blacklist_input').on('change', saveBlackList);
});

function saveBlackList(){
    var list = $('.polishr_blacklist_input').value;
    console.log('list');
}