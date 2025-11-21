// Import the function sum from the app.js file
const { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("3.5 Euros son 3.745 Dolares", function() {
    // Import the function from app.js

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.5*1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("3.5 Dolares son 511.91 Yenes", function() {
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(3.5*(156.5/1.07)); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1000 Yenes son 5.55 Libras", function() {
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(1000*(0.87/156.5)); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})