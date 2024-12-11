let operation = "";

document.getElementById("box1").addEventListener("click", () => {
   operation = "CTF";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Celsius To Fahrenheit";
});

document.getElementById("box2").addEventListener("click", () => {
   operation = "FTC";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Fahrenheit To Celsius";
});

document.getElementById("box3").addEventListener("click", () => {
   operation = "MTF";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Meters To Feet";
});

document.getElementById("box5").addEventListener("click", () => {
   operation = "FTM";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Feet To Meters";
});

document.getElementById("box4").addEventListener("click", () => {
   const inputValue = parseFloat(document.getElementById("num").value);

   if (isNaN(inputValue) || inputValue < 1) {
      document.querySelector(".result").textContent = "Please enter a valid positive number.";
      return;
   }

   let result;
   if (operation === "CTF") {
      result = (inputValue * 9) / 5 + 32;
      document.querySelector(".result").innerHTML = `${inputValue}&deg;C is ${result.toFixed(2)}&deg;F, user.`;
   } else if (operation === "FTC") {
      result = (inputValue - 32) * 5 / 9;
      document.querySelector(".result").innerHTML = `${inputValue}&deg;F is ${result.toFixed(2)}&deg;C, user.`;
   } else if (operation === "MTF") {
      result = inputValue * 3.280839895;
      document.querySelector(".result").textContent = `${inputValue} Meters is equal to ${result.toFixed(2)} Feet, user.`;
   } else if (operation === "FTM") {
      result = inputValue * 0.3048;
      document.querySelector(".result").textContent = `${inputValue} Feet is equal to ${result.toFixed(2)} Meters, user.`;
   } else {
      document.querySelector(".result").textContent = "Please choose a conversion operation.";
   }
});