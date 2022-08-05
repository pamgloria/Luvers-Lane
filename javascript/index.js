class Card {
    constructor({
        imageUrl,
    }){this.imageUrl = imageUrl;
    }

    //private properties
    #startPoint;

    //private methods
    #init = () => {
        const card =document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = this.imageUrl;
        card.append(img);
        this.element = card;
        this.#listenToMouseEvents();
    }
    #listenToMouseEvents = () => {
// mousedown
this.element.addEventListener('mousedown', e => {
    const {clientX, clientY} = e;
    this.#startPoint = {x: clientX, y: clientY};
    document.addEventListener('mousemove', this.#handleMouseMove);  })

//mouseup
document.addEventListener('mouseup', this.#handleMouseUp);

//prevent drag
this.element.addEventListener('dragstart' e =>{
    e.preventDefault();
})

}
#handleMouseMove = (e) => {
    if(!this.#startpoint) return;
    const {clientX, clientY} = e;
    this.#offsetX = clientX - this.#startPoint.x;
    this.#offsetY = clientY - this.#startPoint.y;
    const rotate = this.#offsetX * 0.1;
    this.element.style.transform = `translate(${this.#offsetX}px, ${this.#offsetY}px) rotate(${rotate}deg)`;
    
}
#handleMouseUp = (e) => {
this.#startPoint= null;
document.removeEventListener('mousemove',this.#handleMouseMove);
this.element.style.transition = 'transform 0.5s';
this.element.style.transform = 
}


}