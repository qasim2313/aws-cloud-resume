window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const productionApiUrl = 'https://qu5d4b47hm3sw2njo477xyibs40gafwp.lambda-url.eu-west-2.on.aws/';

async function getVisitCount() {
    let response = await fetch(productionApiUrl);
    let data = await response.json();
    console.log(data);
    document.getElementById("counter").innerText = data;

    return data;
}