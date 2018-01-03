const utils = require('../calc_utils');
const calcBenefitRate = utils.calcBenefitRate;
const chai = require('chai');
const assert = chai.assert;

// calcbenrate takes (age, group, years)
describe('calculate benefit rate for < 30 years of service', () => {

  // years of service does not matter as long as < 30
  describe("group1", () => {
    it("67+", (done) => {
      const rate = calcBenefitRate(67, "group1", 29);
      assert(rate === 2.50);
      done();
    });

    it("66", (done) => {
      const rate = calcBenefitRate(66, "group1", 20);
      assert(rate === 2.35);
      done();
    });

    it("65", (done) => {
      const rate = calcBenefitRate(65, "group1", 20);
      assert(rate === 2.20);
      done();
    });

    it("64", (done) => {
      const rate = calcBenefitRate(64, "group1", 20);
      assert(rate === 2.05);
      done();
    });

    it("63", (done) => {
      const rate = calcBenefitRate(63, "group1", 20);
      assert(rate === 1.90);
      done();
    });

    it("62", (done) => {
      const rate = calcBenefitRate(62, "group1", 20);
      assert(rate === 1.75);
      done();
    });

    it("61", (done) => {
      const rate = calcBenefitRate(61, "group1", 20);
      assert(rate === 1.60);
      done();
    });

    it("60", (done) => {
      const rate = calcBenefitRate(60, "group1", 10);
      assert(rate === 1.45);
      done();
    });

    it("<60", (done) => {
      const rate = calcBenefitRate(59, "group1", 10);
      assert(rate === 0);
      done();
    });

  });

  describe("group2", () => {
    it("62+", (done) => {
      const rate = calcBenefitRate(62, "group2", 29);
      assert(rate === 2.50)
      done();
    });

    it("61", (done) => {
      const rate = calcBenefitRate(61, "group2", 29);
      assert(rate === 2.35);
      done();
    });

    it("60", (done) => {
      const rate = calcBenefitRate(60, "group2", 29);
      assert(rate === 2.20);
      done();
    });

    it("59", (done) => {
      const rate = calcBenefitRate(59, "group2", 29);
      assert(rate === 2.05);
      done();
    });

    it("58", (done) => {
      const rate = calcBenefitRate(58, "group2", 29);
      assert(rate === 1.90);
      done();
    });

    it("57", (done) => {
      const rate = calcBenefitRate(57, "group2", 29);
      assert(rate === 1.75);
      done();
    });

    it("56", (done) => {
      const rate = calcBenefitRate(56, "group2", 29);
      assert(rate === 1.60);
      done();
    });

    it("55", (done) => {
      const rate = calcBenefitRate(55, "group2", 29);
      assert(rate === 1.45);
      done();
    });

    it("<55", (done) => {
      const rate = calcBenefitRate(54, "group2", 10);
      assert(rate === 0);
      done();
    });

  });

  describe("group4", () => {
    it("57+", (done) => {
      const rate = calcBenefitRate(57, "group4", 29);
      assert(rate === 2.50);
      done();
    });

    it("56", (done) => {
      const rate = calcBenefitRate(56, "group4", 29);
      assert(rate === 2.35);
      done();
    });

    it("55", (done) => {
      const rate = calcBenefitRate(55, "group4", 29);
      assert(rate === 2.20);
      done();
    });

    it("54", (done) => {
      const rate = calcBenefitRate(54, "group4", 29);
      console.log('rate', rate);
      assert(rate === 2.05);
      done();
    });

    it("53", (done) => {
      const rate = calcBenefitRate(53, "group4", 29);
      assert(rate === 1.90);
      done();
    });

    it("52", (done) => {
      const rate = calcBenefitRate(52, "group4", 29);
      assert(rate === 1.75);
      done();
    });

    it("51", (done) => {
      const rate = calcBenefitRate(51, "group4", 29);
      assert(rate === 1.60);
      done();
    });

    it("50", (done) => {
      const rate = calcBenefitRate(50, "group4", 29);
      assert(rate === 1.45);
      done();
    });

    it("<50", (done) => {
      const rate = calcBenefitRate(49, "group4", 10);
      assert(rate === 0);
      done();
    });
  });
});

describe('calculate benefit rate for >= 30 years of service', () => {

  // years of service does not matter as long as < 30
  describe("group1", () => {
    it("67+", (done) => {
      const rate = calcBenefitRate(67, "group1", 30);
      assert(rate === 2.500);
      done();
    });

    it("66", (done) => {
      const rate = calcBenefitRate(66, "group1", 32);
      assert(rate === 2.375);
      done();
    });

    it("65", (done) => {
      const rate = calcBenefitRate(65, "group1", 32);
      assert(rate === 2.250);
      done();
    });

    it("64", (done) => {
      const rate = calcBenefitRate(64, "group1", 30);
      assert(rate === 2.125);
      done();
    });

    it("63", (done) => {
      const rate = calcBenefitRate(63, "group1", 30);
      assert(rate === 2.00);
      done();
    });

    it("62", (done) => {
      const rate = calcBenefitRate(62, "group1", 30);
      assert(rate === 1.875);
      done();
    });

    it("61", (done) => {
      const rate = calcBenefitRate(61, "group1", 30);
      assert(rate === 1.750);
      done();
    });

    it("60", (done) => {
      const rate = calcBenefitRate(60, "group1", 30);
      assert(rate === 1.625);
      done();
    });

    it("<60", (done) => {
      const rate = calcBenefitRate(59, "group1", 30);
      assert(rate === 0);
      done();
    });

  });

  describe("group2", () => {
    it("62+", (done) => {
      const rate = calcBenefitRate(62, "group2", 30);
      assert(rate === 2.500)
      done();
    });

    it("61", (done) => {
      const rate = calcBenefitRate(61, "group2", 30);
      assert(rate === 2.375);
      done();
    });

    it("60", (done) => {
      const rate = calcBenefitRate(60, "group2", 30);
      assert(rate === 2.250);
      done();
    });

    it("59", (done) => {
      const rate = calcBenefitRate(59, "group2", 30);
      assert(rate === 2.125);
      done();
    });

    it("58", (done) => {
      const rate = calcBenefitRate(58, "group2", 30);
      assert(rate === 2.00);
      done();
    });

    it("57", (done) => {
      const rate = calcBenefitRate(57, "group2", 30);
      assert(rate === 1.875);
      done();
    });

    it("56", (done) => {
      const rate = calcBenefitRate(56, "group2", 30);
      assert(rate === 1.750);
      done();
    });

    it("55", (done) => {
      const rate = calcBenefitRate(55, "group2", 30);
      assert(rate === 1.625);
      done();
    });


    it("<55", (done) => {
      const rate = calcBenefitRate(54, "group2", 30);
      console.log('rate', rate);
      assert(rate === 0);
      done();
    });

  });


  describe("group4", () => {
    it("57+", (done) => {
      const rate = calcBenefitRate(57, "group4", 30);
      assert(rate === 2.500);
      done();
    });

    it("56", (done) => {
      const rate = calcBenefitRate(56, "group4", 30);
      assert(rate === 2.375);
      done();
    });

    it("55", (done) => {
      const rate = calcBenefitRate(55, "group4", 30);
      assert(rate === 2.250);
      done();
    });

    it("54", (done) => {
      const rate = calcBenefitRate(54, "group4", 30);
      assert(rate === 2.125);
      done();
    });

    it("53", (done) => {
      const rate = calcBenefitRate(53, "group4", 30);
      assert(rate === 2.00);
      done();
    });

    it("52", (done) => {
      const rate = calcBenefitRate(52, "group4", 30);
      assert(rate === 1.875);
      done();
    });

    it("51", (done) => {
      const rate = calcBenefitRate(51, "group4", 30);
      assert(rate === 1.750);
      done();
    });

    it("50", (done) => {
      const rate = calcBenefitRate(50, "group4", 30);
      assert(rate === 1.625);
      done();
    });

    it("<50", (done) => {
      const rate = calcBenefitRate(49, "group4", 30);
      console.log('rate', rate);
      assert(rate === 0);
      done();
    });

  });

  describe("other ", () => {
    it(">= 30, other group", (done) => {
      const rate = calcBenefitRate(50, "group 100", 30);
      assert(rate === 0);
      done();
    });

    it("< 30, other group", (done) => {
      const rate = calcBenefitRate(50, "group 100", 29);
      assert(rate === 0);
      done();
    });

    it("null years", (done) => {
      const rate = calcBenefitRate(50, "group2", null);
      assert(rate === 0);
      done();
    })
  })

});
