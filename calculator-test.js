
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 1000,
    years: 8,
    rate: 5.8
  };
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }; 
});

/// etc

it("should handle terribly high interest rates", function () {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  }; 
});
