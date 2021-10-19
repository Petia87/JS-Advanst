import {render} from '../node_modules/lit-html/lit-html.js';
import {ulTemplate, liTemplate} from './template.js';

let formElement = document.querySelector(`.content`);
formElement.addEventListener("submit", townsInput);
let rootElement = document.getElementById(`root`);

function townsInput(e) {
    e.preventDefault();
    let formData = new FormData(formElement);
    let input = formData.get(`towns`).split(", ");
    
    render(ulTemplate(input), rootElement)
}