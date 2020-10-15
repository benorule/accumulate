// This code is meant to serve as a mock fetch from an API.
export const getGoal = new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      savings: 1200,
      timeframe: 12,
      deposit: 100,
      month: true
    });
  }, 1000);
});
