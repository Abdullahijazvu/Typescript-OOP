import Mercedes from "./mercedes.js";

class Roadster extends Mercedes{
    constructor(color: string, height: string, width: number, length: number, weight: string, wheels: string, make: string, model: number, company: string){
        super(color, height, width, length, weight, wheels, make, model);
        this.company = company;
    }
    company: string;
}

let myBCDE = new Roadster("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022, "Honda")
console.log(myBCDE);