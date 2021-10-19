
/* Use async*/
async function loadCommits() {

    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const ul = document.querySelector('#commits');

    ul.innerHTML = '';

    try {
        const response = await fetch(url);
        let data = await response.json();
        let li = '';
        if (response.status !== 200) {
            li = e('li', 'Error 404. Item Not Found');
            ul.appendChild(li);
        } else {
            data.forEach(element => {
                li = e('li', `${element.commit.author.name}: ${element.commit.message}`);
                ul.appendChild(li);
            });
        }
    }
    catch (err) {
        console.log(err);
    }
 
    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}
/*function loadCommits() {
    let username=document.querySelector('#username').value;
    let repo=document.querySelector('#repo').value;
let commitsElement=document.querySelector('#commits');

fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
.then(res=>res.json())
.then(data=>{
    let commits=data.map(x=>`<li>${x.commit.author.name}: ${x.commit.message}</li>`)
    commitsElement.innerHTML=commits
})
.catch(err=>{
    commitsElement.innerHTML= `<li>${err.status}: ${err.statusText}</li>`
})
}
*/