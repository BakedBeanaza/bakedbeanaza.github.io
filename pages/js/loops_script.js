let operation = "";

document.getElementById("box1").addEventListener("click", () => {
   operation = "sum";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Sum";
});

document.getElementById("box2").addEventListener("click", () => {
   operation = "fact";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Factorial";
});

document.getElementById("box3").addEventListener("click", () => {
   operation = "avg";
   document.querySelector(".chooseOperation").textContent = "Operation Chosen: Average";
});

document.getElementById("box4").addEventListener("click", () => {
   const b = parseInt(document.getElementById("num").value, 10);

   if (isNaN(b) || b < 1) {
      document.querySelector(".result").textContent = "Please enter a valid positive number.";
      return;
   }

   if (operation === "fact") {
      let a = 1;
      for (let i = 1; i <= b; i++) {
         a *= i;
      }
      document.querySelector(".result").textContent = `The factorial of ${b} is ${a}, user.`;

   } else if (operation === "sum") {
      let sum = 0;
      for (let i = 1; i <= b; i++) {
         sum += i;
      }
      document.querySelector(".result").textContent = `The sum of the first ${b} numbers is ${sum}, user.`;

   } else if (operation === "avg") {
      let sum = 0;
      for (let i = 1; i <= b; i++) {
         sum += i;
      }
      const avg = sum / b;
      document.querySelector(".result").textContent = `The average of the first ${b} numbers is ${avg.toFixed(2)}, user.`;
   } else {
      document.querySelector(".result").textContent = "Please select an operation first.";
   }
});