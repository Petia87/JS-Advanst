function extractText() {
    let liElements=[...document.getElementsByTagName('li')]
    let elText=liElements.map(e=>e.textContent)
   
    document.getElementById('result').value=elText.join('\n')
}
