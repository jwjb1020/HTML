document.addEventListener("DOMContentLoaded", () => {
    const a = document.querySelectorAll('button');
    console.log(a);

    //document.querySelector('#h2id').textContent =a.textContent ;

    /* for(let i=0; i < a.length; i++){
        console.log(a[i].textContent);
    } */
    //case2
    /*    a.forEach((item)=>{
           console.log(item.textContent);
           
       })
       //case3
       a.forEach((item, idx)=>{
           console.log(idx,item.textContent);
       }) */
    //case4
    /* for (let key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    } */
    //case5
    /* for (let item of a) {
        console.log(item.textContent);
    
       

    } */

    for(let [k, v] of a.entries()){
        console.log(k, v.textContent);
        
    }
});