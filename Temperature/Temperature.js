
const selToggle = (s1, s2, t1, t2) => {
    t1.value = '';
    t2.value = '';
    if (s1.value == 'C') {
        s2.value = 'F';
    }
    else if (s1.value == 'F') {
        s2.value = 'C';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");

    const d1 = document.querySelector("#d1");
    const d2 = document.querySelector("#d2");

    const t1 = document.querySelector("#t1");
    const t2 = document.querySelector("#t2");

    d1.textContent = s1.value;
    d2.textContent = s2.value;

    //select 값이 변경될때
    s1.addEventListener("change", () => {
        selToggle(s1, s2, t1, t2);
        d1.textContent = s1.value;
        d2.textContent = s2.value ;

    })
    s2.addEventListener("change", () => {
        selToggle(s1, s2, t1, t2);
        d2.textContent = s2.value;
        d1.textContent = s1.value;
    })
    // inputd의 값이 변경될때
    t1.addEventListener("input", () => {
        if (s1.value == s2.value) {
            t2.value = t1.value;
        } else if (s1.value == "C" && s2.value == "F") {
            t2.value = (t1.value * (9 / 5)) + 32
        } else if (s1.value == "F" && s2.value == "C") {
            t2.value = ((t1.value - 32) * 5 / 9)
        }


    })
})