$(function(){
    $('#btn').on('click', function(){
        $('#popup').addClass('show');
    });
    $('#popup span').on('click', function(){
        $('#popup').removeClass('show');
    })
});