import {render} from '../node_modules/lit-html/lit-html.js';
import {cats} from './catSeeder.js';
import {allCatsTemplate} from './template.js';

// let ul = document.createElement(`ul`);
// container.appendChild(ul);
// let result = cats.map(catsTemplate);
let container = document.querySelector(`#allCats`);


render(allCatsTemplate(cats), container);