var i = 0;
var backgroundchanges = [
    "url('../images/desktop-image-hero-1.jpg')",
    "url('../images/desktop-image-hero-2.jpg')",
    "url('../images/desktop-image-hero-3.jpg')"
];

var titrechanges = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

var paragraphechanges = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furnitures for your home or place of business. Locally, we're in the most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

var background = document.getElementsByClassName('left-top')[0];
var titre = document.getElementsByTagName('h1')[0];
var paragraphe = document.getElementsByTagName('p')[0];

document.getElementById('change').addEventListener("click", function(event){
    event.preventDefault();
})

function changeleft(){
    
    if (i == 0) {
        i = (backgroundchanges.length - 1);
        background.style.backgroundImage = backgroundchanges[i];
        titre.innerText = titrechanges[i];
        paragraphe.innerText = paragraphechanges[i];
    } else if(i <= (backgroundchanges.length - 1)) {
        i--;
        background.style.backgroundImage = backgroundchanges[i];
        titre.innerHTML = titrechanges[i];
        paragraphe.innerText = paragraphechanges[i];
    }
}

function changeright(){
    if (i < (backgroundchanges.length - 1)) {
        i++;
        background.style.backgroundImage = backgroundchanges[i];
        titre.innerText = titrechanges[i];
        paragraphe.innerText = paragraphechanges[i];
    } else if(i = (backgroundchanges.length - 1)) {
        i = 0;
        background.style.backgroundImage = backgroundchanges[i];
        titre.innerText = titrechanges[i];
        paragraphe.innerText = paragraphechanges[i];
    }
}

