function calculateBMI() {
  // Get input values from form fields
  let weightInput = document.getElementById("weight").value;
  let heightInput = document.getElementById("height").value;

  // Check if inputs are not empty
  if (!weightInput || !heightInput) {
    alert("Please enter both weight and height");
    return;
  }

  let weight = parseFloat(weightInput);
  let height = parseFloat(heightInput) / 100; // Convert cm to meters

  // Validate inputs
  if (weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values");
    return;
  }

  let bmi = weight / (height * height);
  let bmiValue = bmi.toFixed(1);

  // Show result with animation
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Your BMI is: <strong>${bmiValue}</strong>`;
  resultDiv.className = "result-visible";

  // Determine BMI category
  let categoryDiv = document.getElementById("bmi-category");
  let category = "";
  let categoryClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
    categoryClass = "normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    categoryClass = "overweight";
  } else {
    category = "Obese";
    categoryClass = "obese";
  }

  // Display BMI category
  categoryDiv.innerHTML = `Category: <strong>${category}</strong>`;
  categoryDiv.className = `category ${categoryClass}`;

  // Add smooth reveal animation
  setTimeout(() => {
    categoryDiv.style.display = "block";
  }, 300);
}

// Reset form fields when page loads and set up input validation
window.onload = function () {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";

  // Set up event listeners for input fields
  setupNumberInput("weight");
  setupNumberInput("height");
};

function setupNumberInput(inputId) {
  const input = document.getElementById(inputId);

  // Validate numeric input
  input.addEventListener("input", function () {
    // Remove any non-numeric characters except decimal point
    this.value = this.value.replace(/[^\d.]/g, "");

    // Ensure only one decimal point
    const decimalCount = (this.value.match(/\./g) || []).length;
    if (decimalCount > 1) {
      this.value = this.value.replace(/\.(?=.*\.)/g, "");
    }

    // Don't allow negative values
    let value = parseFloat(this.value);
    if (value < 0) {
      this.value = "";
    }
  });
}
