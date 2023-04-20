const funA = () => {
    console.log('funB');
}

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        console.log('A');
        setTimeout(() => {
            console.log('B');
            setTimeout(() => {
                console.log('C');
            }, 700);

        }, 1000);

    }, 500);
//callback hell

});