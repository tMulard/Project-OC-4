// ====================
//    🏗️ FONCTIONS
// ====================
// burger handler
const openBurgerNav = () => {
  const topNav = document.getElementById("myTopnav");
  topNav.classList.toggle('responsive')
}

const toggleModal = () => {
  const modalbg = document.querySelector(".bground");
  modalbg.classList.toggle('displayBlock')
}
// ====================
//    📦 DOM ELEMENT
// ====================
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const burger = document.querySelector(".icon")
const close = document.querySelector(".close")

// inputs
const inputUserName = document.querySelector("#first")

// autres inputs
const inputUserLastName = document.querySelector("#last")
const inputUserMail = document.querySelector("#email")
const inputUserBirthDate = document.querySelector("#birthdate")
const inputUserSportQuantity = document.querySelector("#quantity")

const inputUserLocation1 = document.querySelector("#location1")
const inputUserLocation2 = document.querySelector("#location2")
const inputUserLocation3 = document.querySelector("#location3")
const inputUserLocation4 = document.querySelector("#location4")
const inputUserLocation5 = document.querySelector("#location5")
const inputUserLocation6 = document.querySelector("#location6")

const inputUserCheckBox1 = document.querySelector("#checkbox1")
const inputUserCheckBox2 = document.querySelector("#checkbox2")

// ====================
//    👀 LISTENERS
// ====================
burger.addEventListener('click', openBurgerNav)
close.addEventListener('click', toggleModal)
modalBtn.forEach((btn) => {btn.addEventListener("click", toggleModal)})


inputUserName.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

// listener autres inputs
inputUserLastName.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserMail.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserBirthDate.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserSportQuantity.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation1.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation2.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation3.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation4.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation5.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserLocation6.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserCheckBox1.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})

inputUserCheckBox2.addEventListener('input', (event) => {
  const value = event.target.value
  // magic happen here
  console.log(value)
})