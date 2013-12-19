$(document).ready(function(){
    chrome.storage.sync.get('polishr_blacklist', function(){
        console.log(items);
    });
    $('.polishr_blacklist_input').on('change', saveBlackList);
});

function saveBlackList(){
    var list = $('.polishr_blacklist_input').value;
    chrome.storage.sync.set({'polishr_blacklist': list});
}