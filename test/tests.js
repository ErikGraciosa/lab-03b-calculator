//import './example.test.js';
import { add, subtract, multiply, divide } from '../mathutils.js';

const test = QUnit.test;

//Write out what the test should do
test('Take 4 and 7, return 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 11;
    const arg1 = 4;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take -1 and 8, return 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const arg1 = -1;
    const arg2 = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 2 and 7, return -5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -5;
    const arg1 = 2;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take -1 and 8, return -9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -9;
    const arg1 = -1;
    const arg2 = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 4 and 4, return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const arg1 = 4;
    const arg2 = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 2 and 7, return 14', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 14;
    const arg1 = 2;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 4 and 7, return 28', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 28;
    const arg1 = 4;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 7 and 7, return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const arg1 = 7;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Write out what the test should do
test('Take 70 and 7, return 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    const arg1 = 70;
    const arg2 = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(arg1, arg2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
