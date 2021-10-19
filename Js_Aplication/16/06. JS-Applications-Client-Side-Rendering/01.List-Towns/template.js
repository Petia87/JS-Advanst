import { html } from '../node_modules/lit-html/lit-html.js';

let liTemplate = (input) => html`
<li>${input}</li>
`;

let ulTemplate = (towns) => html`
<ul>${towns.map(t => liTemplate(t))}</ul>
`;

export { ulTemplate, liTemplate };