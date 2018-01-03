const utils = require('../calc_utils');
const calculateTotal = utils.calculateTotal;
const chai = require('chai');
const assert = chai.assert;

/*
Example form values map
--------------------------
DOB: "1970-01-11"
averageSalary: "50000"
benDOB: ""
groupNumber: "group4"
monthsService: "3604"
serviceEnd: "2020-10-04"
serviceStart: "yes"
vetStatus: "yes"
*/

describe("ret-guide post 2012 cases", () => {
  it("case 1", (done) => {
    const formVals = {
      groupNumber: "group1",
      vetStatus: "no",
      serviceEnd: '2027-12-31',
      serviceStart: 'no',
      monthsService: 15 * 12 + 6,
      averageSalary: "42000",
      DOB: "1967-12-31",
    };
    const allowance = calculateTotal(formVals);
    assert(absDiff(allowance, 9439.56) < 5);
    done();
  });

  it("case 2", (done) => {
    const formVals = {
      groupNumber: "group1",
      vetStatus: "no",
      serviceEnd: '2044-12-31',
      serviceStart: 'no',
      monthsService: 32 * 12 + 0,
      averageSalary: "36000",
      DOB: "1976-12-31",
    };
    const allowance = calculateTotal(formVals);
    assert(absDiff(allowance, 28800) < 5);
    done();
  });

  it("case 3", (done) => {
    const formVals = {
      groupNumber: "group1",
      vetStatus: "no",
      serviceEnd: '2044-12-31',
      serviceStart: 'no',
      monthsService: 32 * 12,
      averageSalary: "30150",
      DOB: "1982-12-31",
    };
    const allowance = calculateTotal(formVals);
    assert(absDiff(allowance, 18089.88) < 5);
    done();
  });


    it("case 4", (done) => {
      const formVals = {
        groupNumber: "group2",
        vetStatus: "yes",
        serviceEnd: '2027-12-31',
        serviceStart: 'no',
        monthsService: 15 * 12,
        averageSalary: "35000",
        DOB: "1972-12-31",
      };
      const allowance = calculateTotal(formVals);
      assert(absDiff(allowance, 7837.56) < 5);
      done();
    });


    it("case 5", (done) => {
      const formVals = {
        groupNumber: "group4",
        vetStatus: "yes",
        serviceEnd: '2053-12-31',
        serviceStart: 'no',
        monthsService: 41 * 12,
        averageSalary: "58833",
        DOB: "1988-12-31",
      };
      const allowance = calculateTotal(formVals);
      assert(absDiff(allowance, 47366.40) < 5);
      done();
    });
})

function absDiff(a, b) {
  return Math.abs(a - b);
}
