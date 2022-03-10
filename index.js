//time and date
let now=new Date();
console.log(now);

let newdate= new Date(2020, 4,6,9,3,2,34);
console.log(newdate);

let yr=newdate.getFullYear()
console.log("the year is", yr);

let mth=newdate.getMonth()
console.log("the month is", mth);

newdate.setDate(8);
newdate.setMinutes(29);
console.log(newdate);
setInterval(updateTime,1000);
 
function updateTime(){
   time.innerHTML=new Date();
}

function Fun() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}

// //submit
document.getElementById('submit').addEventListener("click",(event)=>{
   event.preventDefault()
   alert("Submitted");
})
//blog read more

function myFunction1() {
   var dots1 = document.getElementById("dots1");
   var moreText1 = document.getElementById("more1");
   var btnText1 = document.getElementById("myBtn1");
 
   if (dots1.style.display === "none") {
     dots1.style.display = "inline";
     btnText1.innerHTML = "Read more"; 
     moreText1.style.display = "none";
   } else {
     dots1.style.display = "none";
     btnText1.innerHTML = "Read less"; 
     moreText1.style.display = "inline";
   }
 }
function myFunction2() {
   var dots2 = document.getElementById("dots2");
   var moreText2 = document.getElementById("more2");
   var btnText2 = document.getElementById("myBtn2");
 
   if (dots2.style.display === "none") {
     dots2.style.display = "inline";
     btnText2.innerHTML = "Read more"; 
     moreText2.style.display = "none";
   } else {
     dots2.style.display = "none";
     btnText2.innerHTML = "Read less"; 
     moreText2.style.display = "inline";
   }
 }
function myFunction3() {
   var dots3 = document.getElementById("dots3");
   var moreText3 = document.getElementById("more3");
   var btnText3 = document.getElementById("myBtn3");
 
   if (dots3.style.display === "none") {
     dots3.style.display = "inline";
     btnText3.innerHTML = "Read more"; 
     moreText3.style.display = "none";
   } else {
     dots3.style.display = "none";
     btnText3.innerHTML = "Read less"; 
     moreText3.style.display = "inline";
   }
 }
function myFunction4() {
   var dots4 = document.getElementById("dots4");
   var moreText4 = document.getElementById("more4");
   var btnText4 = document.getElementById("myBtn4");
 
   if (dots4.style.display === "none") {
     dots4.style.display = "inline";
     btnText4.innerHTML = "Read more"; 
     moreText4.style.display = "none";
   } else {
     dots4.style.display = "none";
     btnText4.innerHTML = "Read less"; 
     moreText4.style.display = "inline";
   }
 }
function myFunction5() {
   var dots5 = document.getElementById("dots5");
   var moreText5 = document.getElementById("more5");
   var btnText5 = document.getElementById("myBtn5");
 
   if (dots5.style.display === "none") {
     dots5.style.display = "inline";
     btnText5.innerHTML = "Read more"; 
     moreText5.style.display = "none";
   } else {
     dots5.style.display = "none";
     btnText5.innerHTML = "Read less"; 
     moreText5.style.display = "inline";
   }
 }


