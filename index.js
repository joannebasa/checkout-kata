const calculateBill = (price, vat, tip) => {
 const result = price + (price * vat /100) + tip;
 return result;
};

module.exports = calculateBill;