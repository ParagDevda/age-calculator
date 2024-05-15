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
tl.from("#mid",{
    // scale:0,
    opacity:0,
    duration:0.5
})
var dob = document.querySelector("#dateofbirth");
dob.max = new Date().toISOString().split("T")[0];
var button = document.querySelector("#but");
var center = document.querySelector("#center2");
// var bvalue = "";
    // var bday = "";
    // var bmonth = "";
    // var byear = "";
    // var year = "";
    // var month = "";
    // var day = "";
    let year , month ,day = "";
    var cdate = new Date();
    // console.log(cdate);
    var cday = cdate.getDate();
    var cmonth = cdate.getMonth() +1;
    var cyear = cdate.getFullYear();
    var lastDayOfMonth = new Date(cyear, cmonth-1, 0);
    var noofdays = lastDayOfMonth.getDate();
    
    // console.log(dob.value);
function age(){
  let dateofbirth = new Date(dob.value);
    let bday=dateofbirth.getDate();
    let bmonth = dateofbirth.getMonth()+1;
    let byear = dateofbirth.getFullYear();
            year = cyear - byear;
           
            if(cmonth>=bmonth){
              month = cmonth - bmonth;
            }else{
              month = 12-(bmonth-cmonth);
              year--;
            }
            if(cday>=bday){
              day = cday-bday;
            }else{
              month--;
              day = (noofdays -bday) + cday;
            }
            if(month<0){
              month = 11;
              year--;
            }
            gsap.to("#center2",{
              display:"flex",
              alignItems: "center",
              justifyContent: "center",
              delay:0.3
            })
            gsap.from("#center2",{
              opacity:0,
              duration:2,
              delay:0.2
            })
              var clutter = `  <div id="center1"> <div id="img">
           <img src="./wait-hourglass.svg" alt="">
          </div>
             <h3>calculating your age...</h3>
             </div>
       </div> </div> `;
       center.innerHTML = clutter;
       gsap.to("#center1 img",{
        rotateX:180,
        duration:0.77,
        delay:2,
        repeat:-1
      })
         setTimeout(() => {
          clutter = ` <h4>You are  ${year} year's ,${month} month's and ${day} day's old
          </h4>` ;
          center.innerHTML = clutter;
          gsap.from("#center2 h4",{
            opacity:0,
            scale:0,
            duration:0.5,
            delay:0.3
           })
         }, 5000);
         
//            var clut = `<div id="dob">
//   <h4>Enter your DOB</h4>
//   <div id="date">
//   <input type="date" name="" value="2001-01-01" id="dateofbirth">
//   </div>
// </div>`;
// setTimeout(() => {
// var continu = document.querySelector("#continue");
// continu.addEventListener("click",function(){
// center.innerHTML = clut;
// }) 
// }, 4000);       
                    
}
button.addEventListener("click",()=>{
  age();

})



// button.addEventListener("click",function(){
// })

