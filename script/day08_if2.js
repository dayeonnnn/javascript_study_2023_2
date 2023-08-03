//if 2단, 3단 이상 조건식을 여러개 작성하는 방법
/* 
    if(조건식1){
        조건식1 참일 경우 실행
    }else if(조건식2){
        조건식1 거짓이고 조건식2 참일 경우 실행
    }else if(조건식3){
        조건식1,2 거짓이고 조건식3 참일 경우 실행
    }else{
        모든 조건식이 거짓일 때 실행
    } */
    /* 
        if(조건식){참일 때 실행}

        if(조건식){참일 때 실행}
        ->if가 새로 등장하면 새로운 조건으로 각각 다른 조건문
*/
const a = 100
if(a>0 && a<11){
    console.log('a는 1~10사이 값이다')
}else if(a>10 && a<51){
    console.log('a는 11~50사이 값이다.')
}

//경품 추첨기
//추첨번호를 입력받고 추첨번호에 따라 상품 출력
//1:냉장고
//2:세탁기
//3:컴퓨터
//그 외 모든 숫자는 꽝
const gift = Number(window.prompt('추첨번호를 입력하세요'))
if(gift === 1){
    window.alert('냉장고 당첨!')
}else if(gift === 2){
    window.alert('세탁기 당첨!')
}else if(gift === 3){
    window.alert('컴퓨터 당첨!')
}else{
    window.alert('꽝입니다.')
}