//This file will hold functions for when buttons are clicked

//Import the math functions from mathutils.js
import { add, subtract, multiply, divide } from './mathutils.js';

//Make function for each button click that uses correct 


//Add button GETs
const numberAdden1 = document.getElementById('user-input-1');
const numberAdden2 = document.getElementById('user-input-2');
const resultsAdd = document.getElementById('add-results');

//Add button click function
export function handleAddClick() {
    const value1 = Number(numberAdden1.value);
    const value2 = Number(numberAdden2.value);

    resultsAdd.textContent = 'The sum of the input values is: ' + add(value1, value2);
    // console.log('did I get here');
}



//Subtraction button GETs
const numberSub1 = document.getElementById('user-input-3');
const numberSub2 = document.getElementById('user-input-4');
const resultsSubtract = document.getElementById('subtract-results');

//Subtract button click function
export function handleSubtractionClick() {
    const value3 = Number(numberSub1.value);
    const value4 = Number(numberSub2.value);

    resultsSubtract.textContent = 'The difference of the input values is: ' + subtract(value3, value4);
}



//Multiply button GETs
const numberMult1 = document.getElementById('user-input-5');
const numberMult2 = document.getElementById('user-input-6');
const resultsMultiply = document.getElementById('multiply-results');

//Multiply button click function
export function handleMultiplyClick() {
    const value5 = Number(numberMult1.value);
    // console.log(value1);
    const value6 = Number(numberMult2.value);
    resultsMultiply.textContent = 'The product of the input values is: ' + multiply(value5, value6);
}



//Division button GETs
const numberDiv1 = document.getElementById('user-input-7');
const numberDiv2 = document.getElementById('user-input-8');
const resultsDivision = document.getElementById('divide-results');

//Divide button click function
export function handleDivisionClick() {
    const value7 = Number(numberDiv1.value);
    // console.log(value1);
    const value8 = Number(numberDiv2.value);    
    resultsDivision.textContent = 'The dividend of the input values is: ' + divide(value7, value8);
}


//Vari button
const numberVari1 = document.getElementById('user-input-9');
const numberVari2 = document.getElementById('user-input-10');
const resultsVari = document.getElementById('vari-results');
const dropdownVari = document.getElementById('dropdown-vari');

export function handleVariClick() {
    const value9 = Number(numberVari1.value);    
    const value10 = Number(numberVari2.value);
    const readout = 'The results of the input values is: ';
    
    //Calculate results 
    if (dropdownVari.value === 'dropdown-subtract') {
        resultsVari.textContent = readout + subtract(value9, value10);
    } else if (dropdownVari.value === 'dropdown-add') {
        resultsVari.textContent = readout + add(value9, value10);
    } else if (dropdownVari.value === 'dropdown-multiply') {
        resultsVari.textContent = readout + multiply(value9, value10);
    } else if (dropdownVari.value === 'dropdown-divide') {
        resultsVari.textContent = readout + divide(value9, value10);
    } else {
        resultsVari.textContent = 'Please select an operand.';
    }
}