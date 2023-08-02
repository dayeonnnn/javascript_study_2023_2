//전역변수, 지역변수 (함수 내/외부 생성한 변수위치 차이)
let b = 20 //함수 바깥에서 생성된 변수 = 전역변수 b,c
let c = 30 //전역변수는 함수 내,외 모두 사용 가능
function test(){ //함수 내에서 생성된 변수 = 지역변수
    let a = 10 //지역변수는 함수 내에서만 사용할 수 있다.
    console.log(a+b)
}
test()
// console.log(a) //지역변수를 함수 바깥에서 사용 시 에러발생
// console.log(a+b)
console.log(b+c)
console.log('-----------------------')
//조건문 - 논리데이터 참(true), 거짓 (false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2) //false
console.log(num1 < num2) //ture
console.log(num1==num3) //ture(데이터타입 구분 x)
console.log(num1===num3) //false(데이터타입 구분 o)
console.log(num1!=num3) //false(데이터타입 구분 x)
console.log(num1!==num3) //ture(데이터타입 구분 o)
console.log(num1>=num2) //false
console.log('-----------------------')
//조건문
//if(조건식){조건식이 참일 때 실행결과} 조건식종류위치
//상황1. 주말에 날씨가 좋으면 등산가자!
let weather = ['비','맑음','흐림']
if(weather[1]==='맑음'){
    console.log('등산을 가자!')
}
console.log('-----------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log(`실행1`)} //o d의 값이 true일때 실행
if(f>10){console.log('실행2')} //x f 값이 10보다 클때 실행
if(g<=20){console.log('실행3')} //o g 값이 20보다 같거나 작을때 실행
if(e!==true){console.log('실행4')} //o e 값이 ture와 다를때 실행
console.log('-----------------------')
/* //관리자만 접속할 수 있는 페이지
//관리자 아이디일 경우만 접속가능(접속 후 인사말 출력)
const userId = window.prompt('아이디를 입력하세요')
if(userId === 'admin'){
    window.alert('관리자님 환영합니다.')
} */
//사용자의 나이를 입력받고 10살 이하라면 '놀이기구 탑승 불가'
/* const userAge = window.prompt('나이를 입력하세요.')
if(userAge<=10){
    window.alert('놀이기구 탑승 불가')
} */
const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
}