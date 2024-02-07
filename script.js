'use strict';
let response = [];
async function getData(){
    try{
        response = await (await fetch('skills.json')).json();
        response.sort((a, b) => b.level - a.level);
        console.log(response);

    } catch (error){
        console.log(error);
        return null;
    }
    
}
getData();
function displayResponse(){
    const table = document.getElementById('table-body');
    table.innerHTML = "";
    for (let i=0; i<response.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML=`<tr><td>${response[i].skillName}</td><td>${response[i].level}</td></tr>
        `;
        table.appendChild(tr);
        console.log(response[i].skillName);
    };  
}
displayResponse();
