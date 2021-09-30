var images = [
    'images/askanta_appreciation.png','images/Cameron_Austin_Powers.png','images/cameron_Halloween_Costume.png',
    'images/Cameron_with_Wand.png','images/cameron-Design_References_1.png','images/Cheek_Kiss.png',
    'images/dnd_SESSION_somethin_2nd_with_mothica.png','images/El_Cameron.png',
    'images/EverDoodles.png','images/giftForRidley.png','images/Lola.png','images/Mothica2.png',
    'images/preeditheadshot.png','images/Sidalcea_edit.png','images/Sitting Eil.png','images/Study_1.png',
    'images/Study_2.png','images/THe_Boys.png','images/torra.png'
];
var index = Math.floor(Math.random() * images.length);

function buildImage() {
    var img = document.createElement('img')
    img.src = images[index];
    document.getElementById('content').appendChild(img);
}

function changeImage(){
    var img = document.getElementById('content').getElementsByTagName('img')[0]
    
    // Choose a random image each time.
    index = Math.floor(Math.random() * images.length);

    // index++; // these two lines cycle through images
    // index = index % images.length; // loop back to first image
    img.src = images[index];
}
