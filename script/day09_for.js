// 반복문 for 
/* 
    for(반복문변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일 때 for 끝나는 위치
*/
// 1~10까지 반복하는 반복문
// for 자주 이용하는 지역변수명 = i, j, m, n, k
for(let i=0; i<11; i++){// i = index
    console.log('hello js'+(i+1))
} 
// 1~5까지 반복하는 반복문
for(let i=0; i<=5; i++){
    console.log('hi'+(i+1))
}
// 5~0까지 반복하는 반복문
for(let i=5; i>=0; i--){
    console.log('hard'+i)
}
// 10~30까지 반복하는 반복문 + 10~30 중 홀수만 반복출력
for(let i=10; i<=30; i++){
    if(i%2===1){
    console.log('uni'+i)
    }
}
// DOM, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','photoshop','illustrator']
// console.log(study[0])
// console.log(study[1])
// console.log(study[2])
// 객체의 수 length 속성
// 1. html 공부
// 2. css 공부
// 3. javasctipt 공부
// 4. figma 공부
// 5. photoshop 공부
// 6. illustrator 공부
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
console.log('--------------------------------')
for(let i=0; i<=study.length-1; i++){
    console.log(`${i+1}. ${study[i]} 공부`)
}
console.log('--------------------------------')
// 역순 출력 illustrator > html
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}. ${study[i]} 공부`)
}
// 반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
// 반복문 이용 coffee 배열 모두 출력
for(let i=0; i<=coffee.length-1; i++){
    console.log(`주문하신 ${coffee[i]} 나왔습니다.`)
}