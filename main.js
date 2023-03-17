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
