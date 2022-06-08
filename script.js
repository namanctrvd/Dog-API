function fetchRandomDogImage(){
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function(){
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imageUrl = responseJSON.message;
    //     $('#dog-image').attr('src', imageUrl);
    // };

    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();

    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    })

}



$('#dog-image-btn').click(fetchRandomDogImage);
