
document.querySelector("body").style.overflowY = "hidden";
let preloader = document.getElementById("preloader");
let introTargetSet = document.querySelectorAll(".intro");

function pauseIntoAni() {
  for (let i = 0; i < introTargetSet.length; i++) {
    let target = introTargetSet[i];
    target.style.animationPlayState = 'paused';
    console.log("haha haha")
  }
}

pauseIntoAni();

window.addEventListener("load", function(){
  preloader.style.display = "none";

  document.querySelector("body").style.overflowY = "auto";
  

  for (let i = 0; i < introTargetSet.length; i++) {
    let target = introTargetSet[i];
    target.style.animationPlayState = 'running';
  }

  console.log("Welcome!");
})




function charBoxResize() {
  const set = document.querySelectorAll(".char");

  for (i = 0; i < set.length; i++) {
    console.log("width " + set[i].offsetWidth);

    set[i].style.height = set[i].offsetWidth + "px";
  }
}


function charBoxScale() {
  const set = document.querySelectorAll(".char-box");

  for (i = 0; i < set.length; i++) {
    const initialWidth = getComputedStyle(set[i]).getPropertyValue('--char');
    console.log(initialWidth);

    const currentWidth = set[i].offsetWidth;
    console.log(currentWidth);

    var scaleNumber = currentWidth / initialWidth;

    set[i].style.transform = "scale(" + scaleNumber + ")"
  }
}


function resbox() {
  console.log("resbox\(\) is ready");

  var set = document.querySelectorAll(".resbox");

  console.log("\n The overflow attr is added by JS: \n =============")
  for (i = 0; i < set.length; i++) {
    var mom = set[i].parentElement;

    var momInitialW = getComputedStyle(mom).getPropertyValue('--ill-w');
    var momCurrentW = mom.offsetWidth;
    var scaleRatio = momCurrentW / momInitialW;
    set[i].style.transform = "scale(" + scaleRatio + ")";

    // var resbox = document.querySelectorAll(".resbox");
    // if (resbox != null) {
    //   mom.style.overflow = "hidden";
    //   console.log(mom.parentElement);
    // }
    
  }
  console.log("============= \n \n");
}


window.addEventListener("load",function(){
  // charBoxScale();
  resbox();
},false);

window.addEventListener("resize",function(){
  // charBoxScale();
  resbox();
},false);