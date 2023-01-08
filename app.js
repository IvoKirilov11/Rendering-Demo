


import createArticale from './article.js';

async function start(){
const articles = await(await fetch('./articles.json')).json();

const main = document.getElementById('content');
main.innerHTML=articles.map(createArticale).join('');

}

start();