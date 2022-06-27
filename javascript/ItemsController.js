class ItemsController {
    constructor(currentId = 0) {
        this.items =[];
        this.currentId = currentId;
}
addItem(name,text,img,author,createdAt){
    const item = {
        id : this.currentId ++,
        name : name,
        text : text,
        img : img,
        author : author,
        createdAt : createdAt,
    }
    this.items.push(item);
    return item;
}
}
//Initialize a new instance of ItemsController
const itemsController = new ItemsController();
//Add a new item to the items array using the addItem method
itemsController.addItem('item1','this is item 1',src = "../Photos/LLlogo.png",'Medgine','createdAt11:12am on june 27 2022');
//console log the items property
console.log(itemsController.items);