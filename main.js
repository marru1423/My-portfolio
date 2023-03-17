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


// NAVBAR OPEN
function toggleNav(elementID) {
  const openNav = document.getElementById(elementID)

  openNav.dataset.shown = openNav.dataset.shown === "false"
      ? showElement(openNav) // will return "true"
      : hideElement(openNav) // will return "false"
}
function showElement(element) {
  element.classList.add('block')
  element.classList.remove('hidden')
  return "true"
}
