document.getElementById("compute_inctax").addEventListener("click", () => {
   var incometax, basictax = 0, brackettax = 0, totaltax;

   incometax = parseFloat(document.getElementById("inctax").value);

   if (isNaN(incometax)) {
      document.getElementById("result").innerHTML = 'Please enter a valid number.';
      return;
   }


   if (incometax < 250000) {
      basictax = 0;
      brackettax = 0;
   } else if (incometax >= 250000 && incometax < 400000) {
      basictax = 0;
      brackettax = 0.20 * (incometax - 250000);
   } else if (incometax >= 400000 && incometax < 800000) {
      basictax = 30000;
      brackettax = 0.25 * (incometax - 400000);
   } else if (incometax >= 800000 && incometax < 2000000) {
      basictax = 130000;
      brackettax = 0.30 * (incometax - 800000);
   } else if (incometax >= 2000000 && incometax < 8000000) {
      basictax = 490000;
      brackettax = 0.32 * (incometax - 2000000);
   } else if (incometax >= 8000000) {
      basictax = 2410000;
      brackettax = 0.35 * (incometax - 8000000);
   }

   totaltax = Math.round(basictax + brackettax);
   document.getElementById("result").innerHTML = "Total Tax is "+totaltax.toFixed(2)+" PHP, user";
});