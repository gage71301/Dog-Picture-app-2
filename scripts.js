function showImages(responseJson) {
    console.log(responseJson.message);
    let counterDog = 0
    for(i = 0; i < responseJson.message.length; i++) {
        $(".imageBox").append(`<li><img src="${responseJson.message[counterDog]}"></li>`);
        console.log(counterDog, responseJson.message[counterDog]);
        counterDog++
    }
}

function getDogPhoto() {
    let userInput = document.getElementById("amountOfDogs").value;
    let urlTemplate = `https://dog.ceo/api/breeds/image/random/${userInput}`

    fetch(`${urlTemplate}`)
        .then(response => response.json())
        .then(responseJson => showImages(responseJson, userInput))
        .catch(error => alert("an error has occured"))
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        getDogPhoto();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});