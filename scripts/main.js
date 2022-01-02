let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'media/nicky-headshot.png') {
        myImage.setAttribute('src', 'media/nicky-helmet.png');
        myImage.setAttribute('alt', 'A side portrait of Nicolas wearing a white helmet in an industrial plant.');
    } else {
        myImage.setAttribute('src', 'media/nicky-headshot.png');
        myImage.setAttribute('alt', 'A portrait of Nicolas in a black t-shirt');
    }
}

