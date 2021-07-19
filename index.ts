// Import stylesheets
//import './style.css';
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// var test: string = "yes";
// var testnum: number = 19.9
// var hi: boolean = false;
// var any: any = "word";

// any = 8;

// const constant = true;
// const color = "Brown";
// brown cant equal anything else

// let year: number = 7;

// here is where u put a commmand
// Write TypeScript code!


// const appDiv: HTMLElement = document.getElementById('app');
// const output: HTMLElement = document.getElementById('output');
// const button: HTMLElement = document.getElementById('fzbz');

// button.addEventListener('click', fizzbuzz)

// function fizzbuzz() {
// const StartNumb: HTMLInputElement = 
// <HTMLInputElement>document.getElementById('start-num');
// const startNumValue: number = StartNumb.value

// const EndNumb: HTMLInputElement = 
// <HTMLInputElement>document.getElementById('end-num');
// const endNumVal: number = EndNumb.value

//   for (let i = startNumValue; i <= endNumVal; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     }
//   }
// }

class Car {
  carName: string
  Rego: string;
  Speed: number;
  maxSpeed: number = 120;
  initialSpeed: number;

  constructor (_carName: string,_Rego: string, _Speed: number )
    {
    this.carName = _carName 
    this.Rego = _Rego
    this.Speed = _Speed
    }

  increaseSpeed(spd: number): void {
    this.Speed += spd

    if (this.Speed > this.maxSpeed){
      this.Speed = this.maxSpeed
    }


  }

  CarDetails(){
    return (this.carName + " " + this.Rego);
    // returns vehicle details
  }
  
}
const Car1: Car = new Car("Car 1", "abc123", 0);
console.log(Car1);
const Car2: Car = new Car("Car 2", "efg123", 10);
console.log(Car2);
const Car3: Car = new Car("Car 3", "abc456", 20);
console.log(Car3);
let innerHTML: string = ' ';

const output: HTMLInputElement = document.getElementById('output'); 

const cars: Array<string> = ['Car 1', 'Car 2', 'Car 3'];
  for(let i = 0 ; i< cars.length; i++){
  innerHTML += `<option value> ${cars[i]} </option>`
}

output.innerHTML = innerHTML
