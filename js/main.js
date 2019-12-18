/**
 * Events JS
 * Exercise 1. Add post elements to container
 * @param {*} nodes 
 * @param {*} parent
 */

var kodersArray = [
  {
    'nombre':'jorge',
    'email': 'jlcc170@gmail.com',
  }
]


/**
 * Add new users to container
 * @param {*} name 
 * @param {*} email 
 * @param {*} parent 
 */

const buildNewUser = (name, email, parent) =>{
  var elementParent = document.getElementById(parent)
  elementParent.insertAdjacentHTML("beforeend",`
    <li class="list-group-item">
      <span class="name">${name}</span>
      <span class="email">${email}</span>
    </li>
  `);
}

document.getElementById("addNew").addEventListener("click", function(){
  var user = {
    'name': document.getElementById('input-name').value,
    'email': document.getElementById('input-email').value
  }
  kodersArray.push(user)
  buildNewUser(user.name,user.email,'listPost')
});


// validate empty, email, on submit, add label error

