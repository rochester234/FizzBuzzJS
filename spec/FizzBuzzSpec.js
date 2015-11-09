describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
    });

    it("should return fizz if divisible by three", function() {
      fizzbuzz.output(3);
      expect(fizzbuzz.output(3)).toEqual("fizz");
      });

   it("should return buzz if divisible by five", function() {
     fizzbuzz.output(5);
     expect(fizzbuzz.output(5)).toEqual("buzz");
     });

   it("should return fizzbuzz if divisible by both three and five", function() {
     fizzbuzz.output(15);
     expect(fizzbuzz.output(15)).toEqual("fizzbuzz");
     });
   });
