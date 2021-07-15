function attachEvents() {

    let url = `https://rest-messanger.firebaseio.com/messanger`

    let btnRef = document.getElementById("refresh");
    btnRef.addEventListener(`click`, () => {
        fetch(url)
            .then((responsive) => responsive.json())
            .then((data) => {
                let result = Object.values(data).reduce(
                    (messages, message) =>
                        (messages += `${message.author}:${message.content}\n`)

                );
                document.getElementById('messages').textContent = result
            })
    })

    let submitButton = document.getElementById("submit")
    submitButton.addEventListener(`click`, () => {
        let author = document.getElementById('author')
        let content = document.getElementById('content')
        fetch(url, {
            method: `POST`,
            body: JSON.stringify({
                author: author.value, content: content.value
            })
        })
        author.value = "";
        content.value = ""
    })
}


attachEvents();