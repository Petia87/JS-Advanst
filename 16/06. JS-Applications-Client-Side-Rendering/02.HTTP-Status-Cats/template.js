import {html} from '../node_modules/lit-html/lit-html.js';

let catsTemplate = (input) => html`
        <li>
                    <img src="./images/${input.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                    <div class="info">
                        <button class="showBtn" @click=${onClick}>Show status code</button>
                        <div class="status" style="display: none" id=${input.id}>
                            <h4>Status Code: ${input.statusCode}</h4>
                            <p>${input.statusMessage}</p>
                        </div>
                    </div>
                </li>
`;

function onClick(event) {
    const element = event.target.parentNode;
    if(element.querySelector(`.status`).style.display === `inline-block`){
        element.querySelector(`.status`).style.display = `none`;
    } else {
        element.querySelector(`.status`).style.display = `inline-block`
    }
    
}

export let allCatsTemplate = (cats) => html`
<ul>
    ${cats.map(c => catsTemplate(c))}
</ul>
`;