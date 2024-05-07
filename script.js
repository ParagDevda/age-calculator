var tl = gsap.timeline();
gsap.to("#img img",{
  rotateX:180,
  duration:0.77,
  delay:5,
  repeat:-1
})
tl.to(".hourglassBackground",{
    duration:1.2,
    delay:3,
    scale:15
})
var loder = document.querySelector("#loder");
var background = document.querySelector(".hourglassBackgroun");
setTimeout(() => {
    loder.style.display = "none";
    background.style.display = "none";
    
},4000);
tl.from("#img",{
    scale:0,
    // delay:3.8,
    duration:1
})
tl.from("#nav h1",{
    y:-10,
    opacity:0,
    duration:1
})
tl.from("#nav h3",{
    y:-10,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("#center",{
    // scale:0,
    opacity:0,
    duration:0.5
})
var dob = document.querySelector("#dateofbirth");
var button = document.querySelector("#center button");
var center = document.querySelector("#center");
var bvalue = "";
    var bday = "";
    var bmonth = "";
    var byear = "";
    var year = "";
    var month = "";
    var day = "";
    var cdate = new Date();
    // console.log(cdate);
    var cday = cdate.getDate();
    var cmonth = cdate.getMonth() +1;
    var cyear = cdate.getFullYear();
    var lastDayOfMonth = new Date(cyear, cmonth-1, 0);
    var noofdays = lastDayOfMonth.getDate();
    // console.log(dob.value);
function age(){
    dob.addEventListener("input",function(){
        bvalue = dob.value;
        button.addEventListener("click",function(){
          console.log("clicked");
            // console.log(bvalue);
            var dateofbirth = new Date(bvalue);
            // console.log(dateofbirth);
            bday=dateofbirth.getDate();
            // console.log(bday);
            bmonth = dateofbirth.getMonth();
            byear = dateofbirth.getFullYear();
            year = cyear - byear;
            if(byear>cyear){
              alert("please enter right dob");
            }else{  
              if(cmonth == bmonth){
                if(cday >= bday){
                  day = cday - bday ;
                  month = cmonth - bmonth;
                  console.log("sas");
                }else{
                  month = 11;
                  day = (noofdays -bday) + cday;
                  year--;
                }
              }
              if (cmonth > bmonth){
                if(cday >= bday){
                  day = cday - bday ;
                  month = cmonth - bmonth;
                }else{
                  month = (cmonth - bmonth)-1;
                  day = (noofdays -bday) + cday;
                }
              }if(cmonth<bmonth){
                month = 12 -(bmonth-cmonth);
                year--;
                if (cday >= bday) {
                  day = cday -bday ;
                } else {
                  month--;
                  day = (noofdays -bday) + cday;
                }
              }
            }
            
           var clutter = `  <div id="center1"> <div id="img">
           <img src="./wait-hourglass.svg" alt="">
          </div>
             <h3>calculating your age...</h3>
             </div>
       </div> </div> `;
         setTimeout(() => {
          clutter = ` <h4>You are <br> ${year} year's ,${month} month's and ${day} day's old
          <button id = "continue">continue</button></h4>` ;
          center.innerHTML = clutter;
         }, 3000);
           center.innerHTML = clutter;
           var clut = `<div id="dob">
           <h4>Enter your DOB</h4>
           <div id="date">
           <input type="date" name="" value="2001-01-01" id="dateofbirth">
           </div>
       </div>
       <button>My Age</button>`;
       setTimeout(() => {
        var continu = document.querySelector("#continue");
       continu.addEventListener("click",function(){
        center.innerHTML = clut;
       }) 
       }, 3000);
        })  
    })
  }
  age();
