function calculateBMI() {
  let weightInput = prompt("Enter your weight in kg:");
  let heightInput = prompt("Enter your height in cm:");

  let weight = parseFloat(weightInput);
  let height = parseFloat(heightInput) / 100; // Convert cm to meters

  let bmi = weight / (height * height);
  document.getElementById("result").innerHTML =
    "Your BMI is: " + bmi.toFixed(2);
}
