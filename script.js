//fetch API

fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())  //we convert the data into a json file
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;  //the jsonfile has attachments and its first object text
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = jokeText;
})