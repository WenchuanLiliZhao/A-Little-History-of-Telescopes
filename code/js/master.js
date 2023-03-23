
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";

  location.reload();

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

  for (i = 0; i < set.length; i++) {
    var mom = set[i].parentElement;

    var momInitialW = getComputedStyle(mom).getPropertyValue('--ill-w');

    var momCurrentW = mom.offsetWidth;

    console.log("🤖️ initial height: " + momInitialW);

    var scaleRatio = momCurrentW / momInitialW;

    console.log("🤖️ scaleRatio: " + scaleRatio);

    set[i].style.transform = "scale(" + scaleRatio + ")";
  }
}


window.addEventListener("load",function(){
  // charBoxScale();
  resbox();
},false);

window.addEventListener("resize",function(){
  // charBoxScale();
  resbox();
},false);