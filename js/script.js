function convert() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = document.getElementById("fahrenheit").value;
    const kelvin = document.getElementById("kelvin").value;
  
    if (celsius) {
      const f = celsius * 9/5 + 32;
      const k = parseFloat(celsius) + 273.15;
      displayResult(`${celsius}°C = ${f}°F = ${k}K`);
    } else if (fahrenheit) {
      const c = (fahrenheit - 32) * 5/9;
      const k = (fahrenheit - 32) * 5/9 + 273.15;
      displayResult(`${fahrenheit}°F = ${c}°C = ${k}K`);
    } else if (kelvin) {
      const c = kelvin - 273.15;
      const f = (kelvin - 273.15) * 9/5 + 32;
      displayResult(`${kelvin}K = ${c}°C = ${f}°F`);
    }
  }
  
  function displayResult(result) {
    document.querySelector(".result").innerText = result;
  }