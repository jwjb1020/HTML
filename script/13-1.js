const show = () => {
    event.preventDefault();
    //랜덤수 생성
    let a = Math.floor(Math.random() * 6) + 1;


    document.querySelector(".h1Class > img").setAttribute("src", "../img/주사위/${n}.png");
}