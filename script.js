function fetchRandomDogImage(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        console.log(imageUrl)
        $('#dog-image').attr('src', imageUrl);
    };

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();
}



$('#dog-image-btn').click(fetchRandomDogImage);

function generateCat() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small'
    div.appendChild(image)

}