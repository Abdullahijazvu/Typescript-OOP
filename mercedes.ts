import Vehicle from "./index.js";

class Mercedes extends Vehicle{
    constructor(color: string, height: string, width: number, length: number, weight: string, wheels: string, make: string, model: number){
        super(color, height, width, length, weight);
        this.wheels = wheels;
        this.make = make;
        this.model = model;
    }
    wheels: string;
    make: string;
    model: number;
    power(state: boolean): string{
        if(state === true){
            console.log("Start the Car");
            return "Start the Car";
        } else {
            console.log("Unable to start");
            return "Unable to start";
        }
    }
    speed(state: boolean): string{
        if(state === true){
            console.log("Speed is Good");
            return "Speed is Good";
        } else {
            console.log("Speed to much low");
            return "Speed to much low";
        }
    }
}

let myB = new Mercedes("Black", "4 feet", 34, 23, "100kg", "4 wheels", "Toyota", 2022)
myB.power(true);
myB.speed(true);
console.log(myB);

export default Mercedes;