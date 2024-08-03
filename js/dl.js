$(document).ready(function(){
    $('dl dt').on('click',function(){
        $('+dd',this).slideDown(500).siblings('dd').slideUp(500);
    });
    $('dd').on('click',function(){
        $(this).slideUp(500);
    });
});