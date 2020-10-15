export const setGoal = new Promise(function (resolve) {
    // get user input select one of three variables: timeframe, savings, deposit to remain unknown

    if (unknown == deposit) {
        // get user input for savings and time frame
        const deposit = (data.savings / data.timeframe);
    }
    else if (unknown == timeframe) {
        // get user input for savings and deposit
        const timeframe = (data.savings / data.deposit);
    }
    else {
        // get user input for savings and deposit
        const savings = (data.timeframe * data.deposit);
    }

    setTimeout(() => {
        resolve({
            savings: 0, // savings variable as defined in if statement
            timeframe: 0, // timeframe variable as defined in if statement
            deposit: 0, // deposit variable as defined in if statement
            month: true
        });
    }, 1000);
});



