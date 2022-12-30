class Vehicle{
    color: string;
    height: string;
    width: number;
    length: number;
    weight: string;
    constructor(color: string, height: string, width: number, length: number, weight: string){
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
}

let myC = new Vehicle("Black", "4 Feet", 34, 10, "120 kg");
console.log(myC);

export default Vehicle;