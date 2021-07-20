let sendButton = document.getElementById('submit');
sendButton.addEventListener('click', createMessage)
let refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', getAllMessages);
let textarea = document.getElementById('messages');

async function getJsonResource(url) {
    let getMessagesResult = await fetch(url);
    let result = await getMessagesResult.json();
    return result;
}

async function getAllMessages() {
    try {
        let url = 'http://localhost:3030/jsonstore/messenger';
        let messages = await getJsonResource(url);
        // let getMessagesResult = await fetch(url);
        // let messages = await getMessagesResult.json();
        console.log(messages);


        let messagesString = Object.values(messages)
            .map(message => `${message.author}: ${message.content}`)
            .join('\n');
        textarea.value = messagesString;
    } catch (err) {
        console.error(err);
    }
}


async function createMessage() {
    try {
        let authorInput = document.getElementById('author');
        let contentInput = document.getElementById('content');
        let url = 'http://localhost:3030/jsonstore/messenger';

        let newMessage = {
            author: authorInput.value,
            content: contentInput.value
        };

        let createResponse = await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'Post',
                body: JSON.stringify(newMessage)
            });
        let createResult = await createResponse.json();
        console.log(createResult);
        let createdMessageString = `${createResult.author}: ${createResult.content}`;
        textarea.value = textarea.value + `\n${createdMessageString}`;
    } catch (err) {
        console.error(err);
    }
}
/*
function attachEvents() {
    const btnSubmit = document.querySelector('#submit');
    const btnRefresh = document.querySelector('#refresh');
    btnSubmit.addEventListener('click', onSubmitData);
    btnRefresh.addEventListener('click', onRefresh);

    async function onSubmitData(event) {
        event.preventDefault();
        let authorName = document.querySelector('#controls > input[type=text]:nth-child(2)').value;
        let msgText = document.querySelector('#controls > input[type=text]:nth-child(5)').value;

        if (authorName == '' || msgText == '') {
            return;
        }

        let data = { author: authorName, content: msgText };

        try {
            const response = await fetch('http://localhost:3030/jsonstore/messenger', {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.status !== 200) {
                console.log('Error POST request');
                console.log(response.status);
            } else {
                console.log('POST request successful');
                console.log(response.status);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    async function onRefresh(event) {
        event.preventDefault();
        let textArea = document.querySelector('#messages');
        textArea.value = '';

        try {
            const response = await fetch('http://localhost:3030/jsonstore/messenger');

            if (response.status !== 200) {
                console.log('Error GET request');
                console.log(response.status);
            } else {
                console.log('GET request successful');
                let data = await response.json();
                console.log(data);

                for (const item of Object.values(data)) {
                    console.log(item.author);
                    textArea.value += item.author + ": " + item.content + '\n';
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
}

attachEvents();*/