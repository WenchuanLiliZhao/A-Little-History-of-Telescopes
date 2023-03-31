


let introTargetSet = document.querySelectorAll(".intro");

let preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
  preloader.style.display = "none";
  console.log("Welcome");

  document.querySelector("body").style.overflowY = "auto";

  document.querySelector("#page").style.display = "block";
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
  // console.log("resbox\(\) is ready");

  var set = document.querySelectorAll(".resbox");

  // console.log("\n The overflow attr is added by JS: \n =============")
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
  // console.log("============= \n \n");
}


window.addEventListener("load",function(){
  // charBoxScale();
  resbox();
},false);

window.addEventListener("resize",function(){
  // charBoxScale();
  resbox();
},false);