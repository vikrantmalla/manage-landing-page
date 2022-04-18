const toggle = document.getElementById('toggle')
const hamburgeIcon = document.getElementById('hamburger-icon')
const navbarNav = document.getElementById('navbarNav')
const reviewCards = document.getElementsByClassName('review');
const dots = document.getElementsByClassName('dot');

let showMenu = false

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburgeIcon.src = 'images/icon-close.svg'
        navbarNav.classList.add('show')

        showMenu = true;
    } else {
        hamburgeIcon.src = 'images/icon-hamburger.svg'
        navbarNav.classList.remove('show')

        showMenu = false;
    }
}


// Slideshow

let cardIndex = 1;


showCards(cardIndex);

// dot image controls

function currentCard(n) {
    showCards(cardIndex = n)
}

//  cycle through cards

function nextCard() {
    cardIndex++;

    if (cardIndex > reviewCards.length) {
        cardIndex = 1
    }

    showCards(cardIndex)
}

// show selected Card

function showCards(n) {
    let i;

    if (n > reviewCards.length) {
        cardIndex = 1
    }
    if (n < 1) {
        cardIndex = reviewCards.length
    }
    for (i = 0; i < reviewCards.length; i++) {
        reviewCards[i].classList.remove('active-card');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    reviewCards[cardIndex - 1].classList.add('active-card')
    dots[cardIndex - 1].classList.add('active')

}

setInterval(nextCard, 15000);