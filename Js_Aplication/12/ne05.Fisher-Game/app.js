function attachEvents() {
 
    let regForm = document.getElementById('reg-form');
    regForm.addEventListener('submit', register);
 
}
 
async function register(e) {
 
    try {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
 
        let email = formData.get('email');
        let password = formData.get('password');
        let repPass = formData.get('rePass');
 
 
        let user = { email, password };
        let url = 'http:localhost:3030/users/register';
        let regReq = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'Post',
            body: JSON.stringify(user)
        });
 
        if (regReq.ok) {
            let resp = await regReq.json();
            console.log(resp);
        }
 
    } catch (error) {
        console.error(error)
    }
 
}
 
 
attachEvents();