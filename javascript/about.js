// DOM
const swiper = document.querySelector('.swiper');

//constants
const urls = [
    'images/Medg.jpg',
    'images/pampic.png',
    'images/unplash1.jpg',
    'images/unplash2.jpg',
    'images/unplash3.jpg',
    'images/unplash4.jpg',
    'images/unplash5.jpg',
    'images/unplash6.jpg',
    'images/unplash7.jpg',
    'images/unplash8.jpg',
    'images/unplash9.jpg',
    'images/unplash10.jpg',
    'images/unplash11.jpg',
    'images/unplash12.jpg',
    'images/unplash13.jpg',
    'images/unplash14.jpg',
    'images/unplash15.jpg',
    'images/unplash16.jpg',
    'images/unplash17.jpg',
    'images/unplash18.jpg',
    'images/unplash19.jpg',
    'images/unplash20.jpg',
    'images/unplash21.jpg',
    'images/unplash22.jpg',
];
//variables
let cardCount = 0;

//functions
function appendNewCard() {
const card = new Card({
    imageUrl: urls[cardCount % 5]
});
card.element.style.setProperty('--i',cardCount % 5);
swiper.append(card.element);
cardCount++;
}
for (let i = 0; i < cardCount; i++) {
    appendNewCard(swiper, card.element, cardCount);
}