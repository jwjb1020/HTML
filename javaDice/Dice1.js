
document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector('#bt1');

    bt1.addEventListener("click", () => {
        event.preventDefault();

        //랜덤수 생성
        let n = Math.floor(Math.random() * 6) + 1;
        //결과 출력
        document.querySelector(".h1Class").innerHTML = `<img src = "../img/주사위/${n}.png">`;
        console.log(n);
        //사용자 입력수 
        let user;
        const radios = document.querySelectorAll('input[type=radio]')
        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                break;
            }
        }

        //랜덤수와 사용자입력수 같은지 검사
        //parseInt(user) === n
        if (n == user) {
            document.querySelector("article h1").textContent = "주사위게임 : 맞음(승)"
            document.querySelector("article h1").innerHTML = ""
        } else {
            document.querySelector("article h1").textContent = "주사위게임 : 틀림(패)"

        }


    });

});