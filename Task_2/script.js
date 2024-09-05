function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('unit').value;
    const toUnit = document.getElementById('convertTo').value;
    let result;
  
    // Validate input
    if (isNaN(temperature)) {
      alert('Please enter a valid temperature');
      return;
    }
  
    // Celsius to others
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        result = temperature + 273.15;
      } else {
        result = temperature;  // Celsius to Celsius
      }
    }
  
    // Fahrenheit to others
    else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
      } else {
        result = temperature;  // Fahrenheit to Fahrenheit
      }
    }
  
    // Kelvin to others
    else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = temperature - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
      } else {
        result = temperature;  // Kelvin to Kelvin
      }
    }
  
    // Display result
    document.getElementById('result').textContent = result.toFixed(2) + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
  }
  