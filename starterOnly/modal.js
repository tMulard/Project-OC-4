const RESULTS = {
  firstname: null,
  lastname: null,
  mail:null,
  birthdate: null,
  sportquantity: null,
  location: null,
  checkbox: null
}

// ====================
//    🏗️ FONCTIONS
// ====================
// burger handler
const openBurgerNav = () => {
  const topNav = document.getElementById("myTopnav");
  topNav.classList.toggle('responsive')
}

const verifyFirstName = () => {
  RESULTS.firstname = null
  
  const formDataFirst = document.querySelector('.formData-username')
  formDataFirst.setAttribute('data-error-visible', false)
  
  const regex = /[a-zA-Z\-éèàïêçôù]+/gm
  
  if (inputUserName.value.length > 2) {
    const result = inputUserName.value.match(regex)
    if(result) {
      // ok c'est tout bon
      RESULTS.firstname = result.join(" ")
    } else {
      formDataFirst.setAttribute('data-error-visible', true)
      formDataFirst.setAttribute('data-error', "Uniquement des lettres svp")
    }
  } else {
    formDataFirst.setAttribute('data-error-visible', true)
    formDataFirst.setAttribute('data-error', "Veuillez entrer plus de deux caractères pour le champ du nom.")
  }
}

const verifyLastName = () => {
  RESULTS.lastname = null
  
  const formDataLast = document.querySelector('.formData-userlastname')
  formDataLast.setAttribute('data-error-visible', false)
  
  const regex = /[a-zA-Z\-éèàïêçôù]+/gm
  
  if (inputUserLastName.value.length >= 2) {
    const result = inputUserLastName.value.match(regex)
    if(result) {
      // ok c'est tout bon
      RESULTS.lastname = result.join(" ")
    } else {
      formDataLast.setAttribute('data-error-visible', true)
      formDataLast.setAttribute('data-error', "Uniquement des lettres svp")
    }
  } else {
    formDataLast.setAttribute('data-error-visible', true)
    formDataLast.setAttribute('data-error', "Veuillez entrer plus d'un caractère pour le champ du nom.")
  }
}

const verifyMail = () => {
  RESULTS.mail = null

  const formDataMail = document.querySelector('.formData-usermail')
  formDataMail.setAttribute('data-error-visible', false)
  
  const regexMail = /^[\.A-Za-z]+@[A-Za-z]+\.[\.A-Za-z]+$/gm
  
  if (inputUserMail.value.length > 3) {
    const result = inputUserMail.value.match(regexMail)
  
    if(result) {
      // ok c'est tout bon
      RESULTS.mail = result.join(", ")
    } else {
      formDataMail.setAttribute('data-error-visible', true)
      formDataMail.setAttribute('data-error', "Entrez une adresse mail correcte.")
    }
  } else {
    formDataMail.setAttribute('data-error-visible', true)
    formDataMail.setAttribute('data-error', "Entrez une adresse mail correcte.")
  }
}

const verifyBirthDate = () => {
  RESULTS.birthdate = null
  
  const formDataBirthDate = document.querySelector('.formData-birthdate')
  formDataFirst.setAttribute('data-error-visible', false)
  
  const regexbd = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/gm
  
  if (inputUserBirthDate.value.length > 9) {
    const result = inputUserBirthDate.value.match(regexbd)
    if(result) {
      // ok c'est tout bon
      RESULTS.birthdate = result.join("")
    } else {
      formDataBirthDate.setAttribute('data-error-visible', true)
      formDataBirthDate.setAttribute('data-error', "Uniquement des chiffres svp.")
    }
  } else {
    formDataBirthDate.setAttribute('data-error-visible', true)
    formDataBirthDate.setAttribute('data-error', "Veuillez entrer votre date de naissance.")
  }
}

const verifySport = () => {
  RESULTS.sportquantity = null

  const formDataSport = document.querySelector('.formData-sportquantity')
  formDataSport.setAttribute('data-error-visible', false)
    
  if (inputUserSportQuantity.value >= 0) {
    //   // ok c'est tout bon
    RESULTS.sportquantity = result.join("")
  } else {
    formDataSport.setAttribute('data-error-visible', true)
    formDataSport.setAttribute('data-error', "Veuillez entrer un chiffre correct.")
  }
}

const verifyLocation = () => {
  RESULTS.location = null
  const formDataLocation = document.querySelector('.formData-location')
  formDataLocation.setAttribute('data-error-visible', false)
  
  if ((inputUserLocation1.value != null) ||
  (inputUserLocation2.value != null) ||
  (inputUserLocation3.value != null) ||
  (inputUserLocation4.value != null) ||
  (inputUserLocation5.value != null) ||
  (inputUserLocation6.value != null)) {
    //   // ok c'est tout bon
    RESULTS.location = result.join(", ")
  } else {
    formDataLocation.setAttribute('data-error-visible', true)
    formDataLocation.setAttribute('data-error', "Vous devez choisir une option.")
  }
}

const verifyCheckBox = () => {
  RESULTS.checkbox = null
  const formDataCheck = document.querySelector('.formData-checkbox')
  formDataCheck.setAttribute('data-error-visible', false)
  
  if (inputUserCheckBox1.value == null) {
   formDataCheck.setAttribute('data-error-visible', true)
   formDataCheck.setAttribute('data-error', "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
   //   // ok c'est tout bon
   RESULTS.checkbox = result.join("")
  }

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
  event.preventDefault()
  
  // valider les inputs
  verifyFirstName()
  verifyLastName()
  verifyMail()
  verifyBirthDate()
  verifySport()
  verifyLocation()
  verifyCheckBox()

  console.log(RESULTS);
  if (
     RESULTS.firstname &&
     RESULTS.lastname &&
     RESULTS.mail &&
     RESULTS.birthdate &&
     RESULTS.sportquantity &&
     RESULTS.location &&
     RESULTS.checkbox 
   ) {
   // si tout est ok on affiche le message
  console.log("Merci ! Votre réservation a été reçue.");
  }
  
})
