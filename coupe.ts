import Mercedes from "./mercedes.js";

class Coupe extends Mercedes{
    constructor(color: string, height: string, width: number, length: number, weight: string, wheels: string, make: string, model: number, price: string){
        super(color, height, width, length, weight, wheels, make, model);
        this.price = price;
    }
    price: string;
}

let myBCD = new Coupe("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022, "$5000")
console.log(myBCD);