
import {renderTamplate} from './engine.js';

async function start(){
const articles = await(await fetch('./articles.json')).json();
const articaleTemplate = await(await fetch('./article.html')).text();

const main = document.getElementById('content');
main.innerHTML=articles.map(article => renderTamplate(articaleTemplate,article)).join('');

}

start();