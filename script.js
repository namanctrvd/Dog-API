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