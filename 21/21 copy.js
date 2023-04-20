

document.addEventListener('DOMContentLoaded', () => {
    const boxDt = document.querySelector('#boxDt');




    

    boxDt.addEventListener('change',()=>{
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';

        url = url + boxDt.value.replaceAll('-','') ;
        console.log(url)
        fetch(url) // 데이터 요청!! 
        .then((resp) => resp.json()) //패치에서 정보가 오고 나서 할 정보/ 뒤에는 한줄만!!!
        .then((data) => {
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
            let boxTag = '';
            console.log(boxlist);
            for (let box of boxlist) {
                console.log(box.movieNm, box.rank,box.salesAmt,box.rankInten);
                boxTag = boxTag + '<details>';
                boxTag = boxTag + `<summary>${box.movieNm}</summary>` //``이거 안에는 변수 입력가능
                boxTag = boxTag + '<ul>'
                boxTag = boxTag + `<li>순위 : ${box.rank}</li>`
                boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`
                boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`
                boxTag = boxTag + '</ul>'
                boxTag = boxTag + ' </details>'

            }
            console.log(boxTag)

            document.querySelector('#boxDiv').innerHTML = boxTag;

        })
        .catch((error) => {
            console.log(error);
        }) // 패치에서 정보가 왔는데 물리적인 에러를 알려줌
        ;
    })



   
});