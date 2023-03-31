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

const button = document.querySelector('.btn-submit')

// ====================
//    👀 LISTENERS
// ====================
burger.addEventListener('click', openBurgerNav)
close.addEventListener('click', toggleModal)
modalBtn.forEach((btn) => {btn.addEventListener("click", toggleModal)})


button.addEventListener('click', (event) => {
  //event.preventDefault()
  
  // valider les inputs
  const formData = document.querySelector('.formData-username')
  if (inputUserName.value.length <= 2) {
    formData.setAttribute('data-error-visible', true)
    formData.setAttribute('data-error', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
  } else {
    formData.setAttribute('data-error-visible', false)
  }

  const formDataLast = document.querySelector('.formData-userlastname')
  if (inputUserLastName.value.length <= 2) {
    formDataLast.setAttribute('data-error-visible', true)
    formDataLast.setAttribute('data-error', "Veuillez entrer plus d'un caractère pour le champ du nom.")
  } else {
    formDataLast.setAttribute('data-error-visible', false)
  }

  //   const formDataMail = document.querySelector('.formData-usermail')
  //   if (inputUserMail.value != [*] + "@" + [*] + "." + [*]) {
  //     formDataMail.setAttribute('data-error-visible', true)
  //     formDataMail.setAttribute('data-error', "L'input doit contenir un format d'adresse mail valable")
  //   } else {
  //     formDataMail.setAttribute('data-error-visible', false)
  //   }
  
  //   const formDataBirthDate = document.querySelector('.formData-birthdate')
  //   if (inputUserBirthDate.value != [*]+"/"+[*]+"/"+[*]) {
  //     formDataBirthDate.setAttribute('data-error-visible', true)
  //     formDataBirthDate.setAttribute('data-error', "Vous devez entrer votre date de naissance.")
  //   } else {
  //     formDataBirthDate.setAttribute('data-error-visible', false)
  //   }

  //   const formDataSport = document.querySelector('.formData-sportquantity')
  //   if (inputUserLastName.value != int) {
  //     formDataSport.setAttribute('data-error-visible', true)
  //     formDataSport.setAttribute('data-error', "Veuillez entrer un nombre.")
  //   } else {
  //     formDataSport.setAttribute('data-error-visible', false)
  //   }

  //   const formDataLocation = document.querySelector('.formData-location')
  //   if (inputUserLocation1.value == null) && (inputUserLocation2.value == null) && (inputUserLocation3.value == null) && (inputUserLocation4.value == null) && (inputUserLocation5.value == null) && (inputUserLocation6.value == null) {
  //     formDataLocation.setAttribute('data-error-visible', true)
  //     formDataLocation.setAttribute('data-error', "Vous devez choisir une option.")
  //   } else {
  //     formDataLocation.setAttribute('data-error-visible', false)
  //   }

  const formDataCheck = document.querySelector('.formData-checkbox')
  if (inputUserCheckBox1.value == null) {
    formDataCheck.setAttribute('data-error-visible', true)
    formDataCheck.setAttribute('data-error', "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
    formDataCheck.setAttribute('data-error-visible', false)
  }

  const PopUpMessage = new MessageEvent("message", {
    data: "Merci ! Votre réservation a été reçue.",
  });
  
})

// standBy
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