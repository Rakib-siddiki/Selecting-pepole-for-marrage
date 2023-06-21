let age = document.querySelector (".age")
let check = document.querySelector ("button")
let output = document.querySelector("h1")
// =============
let job = document.querySelector(" .job")
// ==============
let salary = document.querySelector(".salary")

check.addEventListener ("click",function () {
   if(age.value >= 18 && age.value < 40 ){
    if (job.value.toLowerCase() === "yes") {
       if (salary.value >= 20000) {
         output.innerHTML = "Selected 😊";
         output.style.color= "#00ff38"
       } else {
         output.innerHTML = "Rejected 😔";
         output.style.color= "Red"
       }
    } else {
      output.innerHTML = "find a job first😒"
      output.style.color= "red"
    }
   }else if (age.value >=40) {
      output.innerHTML = " You're too old🤦‍♂️"
      output.style.color = "white"
   } 
   else if(age.value == ''){
      output.innerHTML = "INVALID";
      output.style.color= "red"
   }
   else{
      output.innerHTML = "Get outta here😒";
      output.style.color= "red"
   }
   
   
   
})