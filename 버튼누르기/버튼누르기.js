document.addEventListener("DOMContentLoaded", () => {
    const bt1s = document.querySelectorAll('.bt1');
    const bt2s = document.querySelectorAll('.bt2');
    const bt3s = document.querySelectorAll('.bt3');

    //배열의 초기화
    let arr = [];
    //버튼 이벤트 추가
    //배열에 자료 추가
    for (let bt1 of bt1s) {
        bt1.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(bt1.textContent);
        })
    }
    for (let bt2 of bt2s) {
        bt2.addEventListener("click", () => {

        })
    }
    for (let bt3 of bt3s) {
        bt3.addEventListener("click", () => {

        })
    }
})