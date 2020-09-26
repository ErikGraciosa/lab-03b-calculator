//Lab04 - Refactor this code for readability and future users

//Send math functions to mathutils.js

//Send clickhandlers to clickhandlers.js, the click handler describes what happens when the user clicks button

// import functions and grab DOM elements
import { handleAddClick, handleSubtractionClick, handleMultiplyClick, handleDivisionClick, handleVariClick } from './clickhandlers.js';


////Addition button GETs////
const buttonAdd = document.getElementById('add');

//Add button event listener
buttonAdd.addEventListener('click', (handleAddClick));


////Subtraction button GETs////
const buttonSubtract = document.getElementById('subtract');

//Subtraction button event listener
buttonSubtract.addEventListener('click', (handleSubtractionClick));


////Multiplication Section////
const buttonMultiply = document.getElementById('multiply');

//Multiply button event listener
buttonMultiply.addEventListener('click', (handleMultiplyClick));


////Division Button GETs////
const buttonDivision = document.getElementById('divide');

//Division button event listener
buttonDivision.addEventListener('click', (handleDivisionClick));


////Vari-Operand GETs////
const buttonVari = document.getElementById('vari-button');

//Use the button to evaluate the numbers with the proper operand
buttonVari.addEventListener('click', (handleVariClick));
