'use strict';
async function getData(){
    try{
        const response = await (await fetch('skills.json')).json();
        response.sort((a, b) => b.level - a.level);
        console.log(response);

    } catch (error){
        console.log(error);
        return null;
    }
    
}
getData();
