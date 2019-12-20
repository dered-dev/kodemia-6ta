/**
 * Events JS
 * Exercise 1. Add post elements to container
 * @param {*} nodes 
 * @param {*} parent
 */

var kodersArray = [{
  'nombre': 'jorge',
  'email': 'jlcc170@gmail.com',
}]


/**
 * Add new users to container
 * @param {*} name 
 * @param {*} email 
 * @param {*} parent 
 */

const buildNewUser = (name, email, parent) => {
  var elementParent = document.getElementById(parent)
  elementParent.insertAdjacentHTML("beforeend", `
    <li class="list-group-item">
      <span class="name">${name}</span>
      <span class="email">${email}</span>
    </li>
  `);
}

/**
 * Homework: validate empty, email, on submit, add label error
 * @param {*} idform 
 */


const validateEmpty = (idform) => {
  let empty = false;
  let frm = document.getElementById(idform)
  let inputs = frm.getElementsByTagName('input');
  for (let count = 0; count < inputs.length; count++) {
    // if is required
    if (inputs[count].hasAttribute('required')) {
      // if is empty
      if (inputs[count].value === "") {
        inputs[count].classList.add('error')
        empty = true;

      }
    }
  }
  return empty
}

const validateEmail = str => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,11})+$/.test(str)) {
    return (true)
  } else {
    return (false)
  }
}

const removeClass = (selector, classremove) => {
  var elementsToRemove = document.querySelectorAll(selector);
  for (var i = 0; i < elementsToRemove.length; i++) {
    elementsToRemove[i].classList.remove(classremove);
  }
}
// add/remove class on focus
document.querySelectorAll("input[type='text']").forEach(element => {
  element.addEventListener("focus", function () {
    if (this.value === "") {
      this.classList.add('error')
    } else {
      this.classList.remove('error')
    }
  })
});

// add/remove class on blur
document.querySelectorAll("input[type='text']").forEach(element => {
  element.addEventListener("blur", function () {
    if (this.value === "") {
      this.classList.add('error')
    } else {
      this.classList.remove('error')
    }
  })
});

// add/remove class on keyup
document.querySelectorAll("input[type='text']").forEach(element => {
  element.addEventListener("keyup", function () {
    if (this.value === "") {
      this.classList.add('error')
    } else {
      this.classList.remove('error')
    }
  })
});

// add/remove class email on keyup
document.querySelectorAll("input[type='email']").forEach(element => {
  element.addEventListener("keyup", function () {
    if (this.value === "") {
      this.classList.add('error')
    } else {
      if (validateEmail(this.value) === false) {
        this.classList.add('error')
      } else {
        this.classList.remove('error')
      }
    }
  })
});

// add element to list
document.getElementById("addNew").addEventListener("click", function () {
  removeClass('input', 'error')
  if (validateEmpty('formKoders') === false) {
    var emailToValidate = document.querySelectorAll('input[type=email]')[0]
    if (validateEmail(emailToValidate.value) === false) {
      document.getElementsByClassName('error__message')[0].innerText = "Email no válido"
      emailToValidate.classList.add('error')
      return
    } else {

      var user = {
        'name': document.getElementById('input-name').value,
        'email': document.getElementById('input-email').value
      }
      kodersArray.push(user)
      var emptyMessage = document.getElementsByClassName('empty__message')[0]
      if (emptyMessage) {
        document.getElementsByClassName('empty__message')[0].remove()
      }
      buildNewUser(user.name, user.email, 'listPost')
    }
  } else {
    document.getElementsByClassName('error__message')[0].innerText = "Existen campos vacios"
  }
});