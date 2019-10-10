
const calculateBill = (price, vat, tip) => {
    const result = price + (price * vat / 100) + tip;
    return '£' +  result;
};
calculateBill(100,20,10);
module.exports = calculateBill;