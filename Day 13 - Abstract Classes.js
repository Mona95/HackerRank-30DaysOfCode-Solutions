
class MyBook extends Book{
     constructor(title,author,price){
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }

    display(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`)
    }
}
