$(function(){
    $('.stop-btn').on('click', function(){
        $('#ball').css({'animationPlayState' : 'paused', 'backgroundColor' : '#fff'});
    });
    $('.start-btn').on('click', function(){
        $('#ball').css({'animationPlayState' : 'running', 'backgroundColor' : '#333'});
    });
});
