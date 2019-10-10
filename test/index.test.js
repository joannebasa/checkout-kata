/* Calculate Bill - Create a function that takes the price of the bill,
the VAT rate, and the tip rate
and returns the total amount the customer needs to pay, formatted as a currency string

1 - it is a function
2 - bill, VAT, tip
3 - gives back "£000" */

const calculateBill = require('../index');

test('it is a function', () => {
    const calculateBill = () => {};
    expect(calculateBill).toBeDefined();
});

test('it returns a string ', () => {
    const result = calculateBill();
    expect(typeof result).toBe('string');
});

test('it returns the correct value', () => {
    const price = 100;
    const vat = 20;
    const tip = 10;

    expect(calculateBill(price, vat, tip)).toBe('£130')
});