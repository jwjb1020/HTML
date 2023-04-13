//회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value;

    //입력내용이 없는 경우 
    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요.';
        return;
    }

    //입력내용이 있는 경우
    //방법1
    // let rs = '';
    // for (let i = s.length - 1; i >= 0; i--) {
    //rs = rs + s[i];
    // }
    //방법2 : 배열
    s = s.split(''); // 문자열.split()는 문자열을  분리자로 분리해서 배열 만듬
    s =s.reverse(); // 배열.reverse(); 배열의 요소를 뒤집어줌
    rs = s.join(''); //배열.join(); 배열의 요소를 붙여서 문자열로 만듬 '' <- 이걸 넣어야함
    console.log("s=", s, ",rs =", rs);
//결과 확인
    if (t1.value == rs) {
        t2.value = rs + ": 회문입니다.";
    }
    else {
        t2.value = `${rs} :회문이 아닙니다.`;
    }

}

//숫자 합계
const numSum = (t1, t2) => {
    //console.log('numSum');
    let s = t1.value ;
    let sum = 0;
    //문자열 순회
    for(let ch of s){
        console.log(ch, isNaN(ch));
        if(isNaN(ch)== false){
            sum += parseInt(ch) ;
        }
    
    }
    t2.value = sum ;
    console.log(sum);
}

document.addEventListener("DOMContentLoaded", () => {
    //DOM요소 가져오기
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const bts = document.querySelectorAll(".bt");
    //버튼배열에 클릭이벤트 작성
    for (let bt of bts) {
        bt.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = bt.getAttribute('id').slice(-1);
            if (gubun === '1') palindrome(txt1, txt2);
            else numSum(txt1, txt2);

        });
    }
});