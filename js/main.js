//Create a Clickable Dropdown
let otherLinks=document.querySelector(".other"); //parent
let links=document.querySelector(".links")       //content

function myFunction() {links.classList.toggle("show");}
    window.onclick = function(event) {
    if (!event.target.matches("#b")) {
    if (links.classList.contains('show')) {links.classList.remove('show');}
    }
}
//-------------------------
//create time
let days=document.getElementById("days");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
counter=setInterval(()=>{
    let C0=0; //number of minutes
    let C1=0; //number of Hours
    let C2=0; //number of days
    seconds.innerHTML-=1;
    if(seconds.innerHTML==="-1"){
        seconds.innerHTML=59;
        C0+=1
    }
    if(C0===1){
        minutes.innerHTML-=1;
        if (minutes.innerHTML==="-1"){
            minutes.innerHTML=59;
            C1+=1
        }
    }
    if (C1===1){
        hours.innerHTML-=1;
        if (hours.innerHTML==="-1"){
            hours.innerHTML=23;
            C2+=1;
            
        }
    }
    if (C2===1){
        days.innerHTML-=1;
        if (days.innerHTML==="-1"){
            days.innerHTML=265;
        }
    }

},1000);
//------------------------------------------
// Start Our Skills Sections

let ourSkills=document.querySelector(".our-skills");
let skillProgress=document.querySelectorAll(".skill span")


window.onscroll=function(){
    //skills offset top
    let skillsOfsetTop=ourSkills.offsetTop;
    
     //skills outer height 
    let skillsOuterHeight=ourSkills.offsetHeight;
     //window Height
    let windowHeight=this.innerHeight
    //window scrollTop
    let windowScrollTop=this.pageYOffset;
    
    if(windowScrollTop >= (skillsOfsetTop + skillsOuterHeight - windowHeight)){
        skillProgress.forEach((e)=>{
            e.style.width=`${e.dataset.progress}`

        })
    }
}

// End Our Skills Sections
