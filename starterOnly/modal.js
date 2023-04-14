const RESULTS = {
  firstname: null,
  lastname: null,
  mail: null,
  birthdate: null,
  sportquantity: null,
  location: null,
  cgu: null,
  newsletter: null
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
  const today = new Date()
  const givenDate = new Date(inputUserBirthDate.value)
  const regexbd = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/gm

  const formDataBirthDate = document.querySelector('.formData-birthdate')
  formDataBirthDate.setAttribute('data-error-visible', false)
  
  if (inputUserBirthDate.value.match(regexbd) && givenDate < today) {
      // ok c'est tout bon
      RESULTS.birthdate = inputUserBirthDate.value
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
    RESULTS.sportquantity = parseInt(inputUserSportQuantity.value);
  } else {
    formDataSport.setAttribute('data-error-visible', true)
    formDataSport.setAttribute('data-error', "Veuillez entrer un chiffre correct.")
  }
}

const verifyLocation = () => {
  RESULTS.location = null
  const formDataLocation = document.querySelector('.formData-location')
  formDataLocation.setAttribute('data-error-visible', false)

  const citySelected = document.querySelector("input[type='radio']:checked")

  if (citySelected === null) {
    formDataLocation.setAttribute('data-error-visible', true)
    formDataLocation.setAttribute('data-error', "Vous devez choisir une option.")
  }
  else {
    RESULTS.location = citySelected.value
  }
}

const verifyCGU = () => {
  RESULTS.cgu = "off"
  
  const formDataCGU = document.querySelector('.formData-checkbox > #checkbox1')
  formDataCGU.setAttribute('data-error-visible', false)
  
  if (inputUserCGU.value == "off") {
    formDataCGU.setAttribute('data-error-visible', true)
    formDataCGU.setAttribute('data-error', "Vous devez vérifier que vous acceptez les termes et conditions.")
  } else {
    //   // ok c'est tout bon
    RESULTS.cgu = inputUserCGU.value
  }
}

const verifyNewsLetter = () => {
  RESULTS.newsletter = "off"
  
  const formDataNewsLetter = document.querySelector('.formData-checkbox > #checkbox2')
  formDataNewsLetter.setAttribute('data-error-visible', false)
  
  if (inputUserNewsLetter.value == "off") {
    console.log("Êtes-vous sûr(e) de ne pas vouloir être abonné(e) chez nous?")
  } else {
    //   // ok c'est tout bon
    RESULTS.newsletter = inputUserNewsLetter.value
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
const inputUserCGU = document.querySelector("#checkbox1")
const inputUserNewsLetter = document.querySelector("#checkbox2")

const button = document.querySelector('.btn-submit')

// ====================
//    👀 LISTENERS
// ====================
burger.addEventListener('click', openBurgerNav)
close.addEventListener('click', toggleModal)

// if (modalBtn. == none ) {
//   btn.addEventListener("click", toggleModal)
// }
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
  verifyCGU()
  verifyNewsLetter()

  console.log(RESULTS);

  if (
     RESULTS.firstname &&
     RESULTS.lastname &&
     RESULTS.mail &&
     RESULTS.birthdate &&
     RESULTS.sportquantity &&
     RESULTS.location &&
     RESULTS.cgu
   ) {
   // si tout est ok on affiche le message
  // btn.addEventListener("click", toggleEndModal)
  } else {
    // message d'erreur
    console.log("Erreur, les champs n'ont pas été remplis correctement")
  }
  
})
