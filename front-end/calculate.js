$(document).ready(function() {
  setServiceText();

  $('#serviceForm').on('change', function () {
    // Change text specifying number of months of Salary
    // to enter depending on when the user entered service
    setServiceText();
  });

  $('#calculate-btn').on('click', function () {
    const formValues = extractFormValues();
    console.log('formValues', formValues);
    const total = calculateTotal(formValues)
    const results = {
      optionA: calcOptionA(total),
      optionB: calcOptionB(total),
      optionC: calcOptionC(total),
    };

    displayResults(results);
  });

  // insert calculated results into table
  // formats the floating point number as US currency
  function displayResults(results) {
    $('#a_annual').text('$' + results.optionA.annual.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#a_monthly').text('$' + results.optionA.monthly.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#b_annual').text('$' + results.optionB.annual.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#b_monthly').text('$' + results.optionB.monthly.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#c_annual').text('$' + results.optionC.annual.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#c_monthly').text('$' + results.optionC.monthly.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#c_ben_annual').text('$' + results.optionC.benAnnual.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
    $('#c_ben_monthly').text('$' + results.optionC.benMonthly.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
  }


  // calculates annual, monthly stipends for option A
  // returns a map of values.
  function calcOptionA(totalAllowance) {
    return {
      annual: totalAllowance,
      monthly: totalAllowance / 12,
    };
  }

  // calculates annual, monthly stipends for option B
  // returns a map of values
  function calcOptionB(totalAllowance) {
    const reduced = totalAllowance * .95;
    return {
      annual: reduced,
      monthly: reduced / 12,
    };
  }

  // calculates annual, monthly stipends for option C
  // as well as beneficiary annual and monthly stipends
  // returns a map of values
  function calcOptionC(totalAllowance) {
      const reduced = totalAllowance * .85;
      const ben = reduced * .66;
      return {
        annual: reduced,
        monthly: reduced / 12,
        benAnnual: ben,
        benMonthly: ben / 12,
      };
  }


  // set the text displayed for number of months of average salary
  function setServiceText() {
    let text = '36';
    if (getServiceStartBool() === 'no') {
      text = '60';
    }
    $('#months-of-salary').text(text);
  }



  /**   Functions for extracting values from the form  */

  function extractFormValues () {
    return {
      serviceStart: getServiceStartBool(),
      DOB: getDOB(),
      serviceEnd: getServiceEnd(),
      groupNumber: getGroupNumber(),
      vetStatus: getVetStatus(),
      monthsService: getMonthsService(),
      averageSalary: getAverageSalary(),
      benDOB: getBeneficiaryDOB(),
    }
  }

  function getServiceStartBool() {
    return $('input[name=serviceDate]:checked', '#serviceForm').val();
  }

  function getDOB() {
    return $('#dob', '#serviceForm').val();
  }

  function getServiceEnd() {
    return $('#ret-date', '#serviceForm').val();
  }

  function getGroupNumber() {
    return $('input[name=groupRadio]:checked', '#serviceForm').val();
  }

  function getVetStatus() {
    return $('input[name=veteranRadio]:checked', '#serviceForm').val()
  }

  function getMonthsService() {
    const years = parseInt( $('#service-years', '#serviceForm').val());
    const months = parseInt( $('#service-months', '#serviceForm').val());
    if (isNan(years) || !years) {
      years = 0;
    }
    if (isNaN(months) || !months) {
      months = 0;
    }
    return (years * 12) + months;
  }

  function getAverageSalary() {
    return $('#salary', '#serviceForm').val();
  }

  function getBeneficiaryDOB() {
    return $('#beneficiary', '#serviceForm').val();
  }
});


// calculate total allowance
function calculateTotal(formValues) {
  //Calculate the benefitRate
  //Age at retirement
  const age = Math.floor((new Date(formValues.serviceEnd)-(new Date(formValues.DOB)))/(365*24*3600*1000))
  const credible_years = (formValues.monthsService)/12
  const group = formValues.groupNumber
  const benefitRate = calcBenefitRate(age,group,credible_years)/100
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
