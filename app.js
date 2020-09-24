// import functions and grab DOM elements

//Addition Section
const numberAdden1 = document.getElementById('user-input-1');
const numberAdden2 = document.getElementById('user-input-2');
const buttonAdd = document.getElementById('add');
const resultsAdd = document.getElementById('add-results');

buttonAdd.addEventListener('click', () => {
    // post-click logic goes here!
        
    const value1 = Number(numberAdden1.value);
    // console.log(value1);
    const value2 = Number(numberAdden2.value);
    
    resultsAdd.textContent = "The sum of the input values is: " + (value1 + value2);
});


//Subtraction Section
const numberSub1 = document.getElementById('user-input-3');
const numberSub2 = document.getElementById('user-input-4');
const buttonSubtract = document.getElementById('subtract');
const resultsSubtract = document.getElementById('subtract-results');

buttonSubtract.addEventListener('click', () => {
    // post-click logic goes here!
        
    const value3 = Number(numberSub1.value);
    // console.log(value3);
    const value4 = Number(numberSub2.value);
    
    resultsSubtract.textContent = "The difference of the input values is: " + (value3 - value4);
});


//Multiplication Section
const numberMult1 = document.getElementById('user-input-5');
const numberMult2 = document.getElementById('user-input-6');
const buttonMultiply = document.getElementById('multiply');
const resultsMultiply = document.getElementById('multiply-results');

buttonMultiply.addEventListener('click', () => {
    // post-click logic goes here!
        
    const value5 = Number(numberMult1.value);
    // console.log(value1);
    const value6 = Number(numberMult2.value);
    
    resultsMultiply.textContent = "The product of the input values is: " + (value5 * value6);
});

//Division Section
const numberDiv1 = document.getElementById('user-input-7');
const numberDiv2 = document.getElementById('user-input-8');
const buttonDivision = document.getElementById('divide');
const resultsDivision = document.getElementById('divide-results');

buttonDivision.addEventListener('click', () => {
    // post-click logic goes here!
        
    const value7 = Number(numberDiv1.value);
    // console.log(value1);
    const value8 = Number(numberDiv2.value);
    
    resultsDivision.textContent = "The dividend of the input values is: " + (value7 / value8);
});
