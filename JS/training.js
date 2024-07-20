let allowOpen;
let passwordCheck = prompt("What is the password ? ", "");
let showContent = document.getElementById("showContent");

if (passwordCheck == "000") {
  allowOpen = true;
} else {
  allowOpen = false;
}
function doIt() {
  alert("you have no access");
  showContent.style.display = "none";
}

if (allowOpen) {
  let checkOld = prompt("how old are you ?", "");
  if (checkOld > 18) {
    showContent.style.display = "block";
  } else {
    alert("still you are young");
    doIt();
  }
} else {
  doIt();
}
