var i = 0;
var txt = 'Jhonn Marru P. Sentoy';
var speed = 50;
  
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("anim").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function toggleElements(elementID) {
  const mainMenu = document.getElementById(elementID)
  console.log('Previous Shown: ', mainMenu.dataset.shown)
  console.log('Previous class: ', mainMenu.classList)

  mainMenu.dataset.shown = mainMenu.dataset.shown === "false"
      ? showElement(mainMenu) // will return "true"
      : hideElement(mainMenu) // will return "false"

  // if (mainMenu.dataset.shown === "false") {
  //     mainMenu.classList.add('block')
  //     mainMenu.classList.remove('hidden')
  //     mainMenu.dataset.shown = "true"
  // } else {
  //     mainMenu.classList.add('hidden')
  //     mainMenu.classList.remove('block')
  //     mainMenu.dataset.shown = "false"
  // }

  console.log('New Shown: ', mainMenu.dataset.shown)
  console.log('New class: ', mainMenu.classList)
}
function showElement(element) {
  element.classList.add('block')
  element.classList.remove('hidden')
  return "true"
}

function hideElement(element) {
  element.classList.add('hidden')
  element.classList.remove('block')
  return "false"
}