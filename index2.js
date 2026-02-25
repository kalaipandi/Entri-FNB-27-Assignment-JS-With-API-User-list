


 //  na orru variable create  pandra      // Constants fixed cannot change 

const baseprice= 100;
const basictax = 0.18;
const totalprice=baseprice + baseprice * basictax;
// const price = Number(daypassPrice.value);   // get input value
// const totalprice = 330;                    // example total price

const validAadhar = "1234-5678-9012";
// const validAadhars = ["1234-5678-9012", "9876-5432-1098", "1111-2222-3333"];
// const aadharNumber = "987654321098";

const today = new Date();


//now  start to create  function 

//camelCase  eg:checkDaypass   

function checkDaypass()
 {

 alert("Button clicked! Function is running.");

// Daypass      // Get input values
const daypassPrice = parseFloat(document.getElementById("daypass").value);
const aadharNumber = document.getElementById("aadhar").value;
const advanceDate = new Date(document.getElementById("advanceDate").value);
const parkingPrice = parseFloat(document.getElementById("charge").value);


const result = document.getElementById("result");
     // Clear previous results
    result.innerHTML = "";

if (daypassPrice > totalprice) {
    //    result.textContent=("Price sufficient, allow purchase"); 
       result.textContent = "Price sufficient. Final amount with 18%: " + finalAmount.toFixed(2);
 
       //suppose  namku else part venda na will use return  type  becase will use rerurn type  once complete field then only it will move to the  other field 
} else if (daypassPrice >= 10 && daypassPrice <= totalprice) {
   result.textContent = "Price below 100, cannot allow";
      daypassPrice.classList.add("error") //hight the red color
    daypassPrice.classList.remove("valid") 
   

} else {
     result.textContent = "Invalid price (not 2-digit)";
     daypassPrice.classList.remove("error") //hight the red color
    daypassPrice.classList.add("valid") 
     //     result.textContent this for pt tag id  or else will use console.log //will use innerHTML  or textcontent similar same 
}

    // Aadhar checkd
    // if (aadharNumber === validaadhar) {
    //      result.textContent = "Aadhar matched";
    // } else if (aadharNumber !== "") {
    //   result.textContent = "Aadhar not matched";

    // } else {
    //      result.textContent = "Aadhar not entered";
    // }



///=== it check data and value both  // == only value will check 

//+=  means both message it will show  eg: Aadhar matched and Aadhar not matched

// include means   array  value  

///^\d{12}$ regex pattern 


//     if (aadharNumber === "") {
//     // mandatory field error
//     result.innerHTML += "Aadhar is mandatory<br>";
// } else if (aadharNumber === validaadhar ) {

//     // correct
//     result.innerHTML = "Aadhar matched";
// } else {
//     // entered but wrong
//     result.innerHTML = "Aadhar not matched";
// }



if (aadharNumber === "") {
    result.innerHTML = "Aadhar is mandatory<br>";
    aadharNumber.classList.add("error");
} 
else if (!/^\d{12}$/.test(aadharNumber)) {
    result.innerHTML += "Aadhar must be 12 digits<br>";
    aadharNumber.classList.add("error");
}
else if (aadharNumber === validAadhar) {
    result.innerHTML = "Aadhar matched<br>";
   aadharNumber.classList.remove("error");
} else {
    result.innerHTML = "Aadhar not matched<br>";
    aadharNumber.classList.add("error");
}


    // Advance date check

    if (advanceDate >= today) {
       result.textContent = "Advance booking date valid";
    } else if (advanceDate.toString() === "Invalid Date") {
        result.textContent="No advance booking date selected";
    } else {
        result.textContent="Advance booking date invalid";
    }

}

   
