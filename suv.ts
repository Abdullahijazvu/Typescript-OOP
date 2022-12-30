import Mercedes from "./mercedes.js";

class SUV extends Mercedes{
    constructor(color: string, height: string, width: number, length: number, weight: string, wheels: string, make: string, model: number, owner: string){
        super(color, height, width, length, weight, wheels, make, model);
        this.owner = owner;
    }
    owner: string;
}

let myBC = new SUV("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022, "ABC")
console.log(myBC);