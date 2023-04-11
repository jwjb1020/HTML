


/* function show() {
    /*  alert("안녕하세요."); */


const show = () => {
    event.preventDefault();
    //랜덤수 생성
    let arr = [
        '<img src = "../img/주사위/1.png">','<img src = "../img/주사위/2.png">','<img src = "../img/주사위/3.png">','<img src = "../img/주사위/4.png">','<img src = "../img/주사위/5.png">','<img src = "../img/주사위/6.png">' ];
    let n = Math.floor(Math.random() * 6)+1;
    console.log(n);
   /*  document.getElementById("h2id").innerHTML = arr[n-1]; */
   /*  document.getElementById("h2id").innerHTML = '<img src = "../img/주사위/ '+ n +'.png">'; */
    document.getElementById("h2id").innerHTML = `<img src = "../img/주사위/${n}.png">`;
   /*  let imgtag;
    case1
    if (n==1) imgtag = '<img src = "../img/주사위/1.png">'
    else if (n ==2) imgtag = '<img src = "../img/주사위/2.png">'
    else if (n ==3) imgtag = '<img src = "../img/주사위/3.png">'
    else if (n ==4) imgtag = '<img src = "../img/주사위/4.png">'
    else if (n ==5) imgtag = '<img src = "../img/주사위/5.png">'
    else if (n ==6) imgtag = '<img src = "../img/주사위/6.png">'
    document.getElementById("h2id").innerHTML = imgtag */
}

//DOMContentLoaded - html이 다 나오면 실행 ()<-여기 안에는 
/* document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("h2").innerHTML = "hellow?"
} ); */
document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("h2id").innerHTML = "시작입니다.";
    /*  document.querySelector("h2").innerHTML = (img src="../img/주사위/4.png" alt="");
     const bt = document.createElement("button");
     bt.textContent = '확인';
     document.getElementById("hdiv").append(bt) */

});