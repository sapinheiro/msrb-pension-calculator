
// calculate total allowance
function calculateTotal(formValues) {
  //Calculate the benefitRate
  //Age at retirement
  const age = Math.floor((new Date(formValues.serviceEnd)-(new Date(formValues.DOB)))/(365*24*3600*1000))
  const credible_years = (formValues.monthsService)/12
  const group = formValues.groupNumber
  const benefitRate = calcBenefitRate(age,group,credible_years)/100
  //Get the  Highest Five Year Average Annual Rate of Regular Compensation
  const avgSalary = formValues.averageSalary

  //Calculate veteran benefits
  var vetBenefit = 0
  if (formValues.vetStatus === 'yes') {
    vetBenefit = credible_years*15
    vetBenefit = vetBenefit > 300?300:vetBenefit
  }

  // total allowance (options B and C will reduce this somewhat)
  const total = benefitRate*avgSalary*credible_years+vetBenefit
  //Total cannot exceed 80% of the heighest salary
  if (total >= (avgSalary*0.8)) {
    return (avgSalary*0.8)+vetBenefit
  }
  return total
}


//Args -> Age, group number, number of credible years
function calcBenefitRate(age, group, years) {
  if (years < 30) {
    if (group === "group1") {
      if (age >= 67) {
        return 2.5
      }
      var otherAges = {
        66:2.35,
        65:2.2,
        64:2.05,
        63:1.9,
        62:1.75,
        61:1.60,
        60:1.45,
      }
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    }
    else if (group === "group2") {
      if (age >=62) {
        return 2.5
      }
      var otherAges = {
        61:2.35,
        60:2.2,
        59:2.05,
        58:1.9,
        57:1.75,
        56:1.60,
        55:1.45,
      };
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    }
    else if (group === "group4") {
      if (age >=57) {
        return 2.5
      }
      var otherAges = {
        56:2.35,
        55:2.2,
        54:2.05,
        53:1.9,
        52:1.75,
        51:1.60,
        50:1.45,
      };
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  else if (years >= 30) {
    if (group === "group1") {
      if (age >=67) {
        return 2.5
      }
      var otherAges = {
        66:2.375,
        65:2.25,
        64:2.125,
        63:2.0,
        62:1.875,
        61:1.75,
        60:1.625,
      };
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    }
    else if (group === "group2") {
      if (age >=62) {
        return 2.5
      }
      var otherAges = {
        61:2.375,
        60:2.25,
        59:2.125,
        58:2.0,
        57:1.875,
        56:1.75,
        55:1.625
      };
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    }
    else if (group === "group4") {
      if (age >=57) {
        return 2.5
      }
      var otherAges = {
        56:2.375,
        55:2.25,
        54:2.125,
        53:2.0,
        52:1.875,
        51:1.75,
        50:1.625
      };
      if (age in otherAges) {
        return otherAges[age]
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

module.exports = {
  calculateTotal,
  calcBenefitRate,
};
