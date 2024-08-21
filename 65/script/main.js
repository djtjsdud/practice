$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('show');
    });
    $('#close-btn').on('click', function(){
        $('#popup-box').removeClass('show');
    });
});
// 사용자가 이름을 입력하면 name 이란 박스에 저장할거고 확인 버튼을 눌럿을 때 고투페이지 함수가 실행됨

function goToPage () {
    let name = prompt('성함을 입력해주세요.');
    // alert('안녕하세요 ' + name + '님 환영합니다.')
    alert(`안녕하세요 ${name}님 환영합니다.`);

    // 벡티?랑 위 문자열 혼합이랑 같음 요즘은 아래 방법으로 사용함
    // ${name} 에서 name을 paldeholder라고 부름
}