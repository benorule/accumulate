module.exports = function calculateDeposit(data) {
    const deposit = (data.savings / data.timeframe);
    return deposit;
};

module.exports = function calculateTimeframe(data) {
    const timeframe = (data.savings / data.deposit);
    return timeframe;
};

module.exports = function calculateSavings(data) {
    const savings = (data.timeframe * data.deposit);
};