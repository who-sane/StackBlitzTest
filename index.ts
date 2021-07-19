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


const appDiv: HTMLElement = document.getElementById('app');
const output: HTMLElement = document.getElementById('output');
const button: HTMLElement = document.getElementById('fzbz');

button.addEventListener('click', fizzbuzz)

function fizzbuzz() {
const StartNumb: HTMLInputElement = 
<HTMLInputElement>document.getElementById('start-num');
const startNumValue: number = StartNumb.value

const EndNumb: HTMLInputElement = 
<HTMLInputElement>document.getElementById('end-num');
const endNumVal: number = EndNumb.value

  for (let i = startNumValue; i <= endNumVal; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    }
  }
}

