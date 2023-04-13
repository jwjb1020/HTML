document.addEventListener("DOMContentLoaded", () => {
    const bt1s = document.querySelectorAll('.bt1');
    const bt2s = document.querySelectorAll('.bt2');
    const bt3s = document.querySelectorAll('.bt3');
    const btReset1 = document.querySelectorAll('#btReset')
    const txt1 = document.querySelector('#txt1')
    //selector 하면 all 안에 첫번째 가져옴
    //배열의 초기화
    let arr = [];
    //버튼 이벤트 추가
    //리셋 버튼 기능 구현
    
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';
        arr = [];
        console.log(txt1.value);
        console.log(arr);
    })
    //배열에 자료 추가
    for (let bt1 of bt1s) {
        bt1.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(bt1.textContent);
            switch (bt1.textContent) {
                case '사과':
                    arr.push('🍎')
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;

            }
            console.log(arr);
            txt1.value = arr.join('');
        })
    }
    for (let bt2 of bt2s) {
        bt2.addEventListener("click", (e) => {
            e.preventDefault();
            switch (bt2.textContent) {
                case '사과':
                    arr.push('🍎')
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;

            }
        })
    }
    for (let bt3 of bt3s) {
        bt3.addEventListener("click", () => {

        })
    }
})