let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/nicky-headshot.png') {
        myImage.setAttribute('src', 'images/nicky-helmet.png');
    } else {
        myImage.setAttribute('src', 'images/nicky-headshot.png');
    }
}

