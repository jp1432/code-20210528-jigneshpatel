"use strict";
const calculateBMI = (weight, height) => {
  //convert height into meter from centimeter
  const mHeight = parseFloat(height) / 100;
  //calculate bmi on formula : bmi = weight / heigh^2
  const bmi = (parseFloat(weight) / Math.pow(parseFloat(mHeight), 2)).toFixed(
    1
  );
  let bmiCategory = "";
  if (bmi < 18.4) {
    bmiCategory = "Malnutrition risk";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    bmiCategory = "Low risk";
  } else if (25 <= bmi && bmi <= 29.9) {
    bmiCategory = " Enhanced risk";
  } else if (30 <= bmi && bmi < 34.9) {
    bmiCategory = "Medium risk";
  } else if (35 <= bmi && bmi < 39.9) {
    bmiCategory = "High risk";
  } else if (40 <= bmi) {
    bmiCategory = "Very high risk";
  }
  return bmiCategory;
};
module.exports = { calculateBMI };
