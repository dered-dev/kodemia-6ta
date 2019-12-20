/**
 * JSON
 * GET, POST, PUT, PATCH, DELETE
 */

const SERVER_URL = 'https://ajaxkode.firebaseio.com/.json'
const SERVER_URLKODERS = `${SERVER_URL}/koders.json`
// var SERVER_URLBYID = `${SERVER_URL}/koders/${id}.json`

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200 ) {
//     console.log(this.response)
//   } 
// }
// xhttp.open('GET', SERVER_URL)
// xhttp.send()

// function request all methods
const request = (url, callback, method = 'GET', data = {}) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.response))
      return true
    } else if (this.readyState === 4 && this.status === 404) {
      console.error(JSON.parse(this.response))
      return false
    }
  }
  xhttp.open(method, url)
  if (method !== 'GET' && method !== 'DELETE') {
    xhttp.send(JSON.stringify(data))
  } else {
    xhttp.send()
  }
}

// Function buildPostCards
const buildPostCards = (nodes, parent = 'listPost') => {
  const parentNode = document.getElementById(parent)
  var accNodes = ''
  for (item in nodes) {
    var {
      age,
      firstName,
      lastName,
      pitch
    } = nodes[item];
    accNodes += `
      <div class="wrap__item">
        <div class="card card__item" data-id="${item}">
            <div class="card-body">
              <img class="card-img" src="http://lorempixel.com/300/200/people/1"/ >
              <div class="card-info">
                <h5 class="card-title">${firstName} ${lastName}</h5>
              </div>
            </div>
        </div>
      </div>
    `;
  }
  parentNode.innerHTML = accNodes
  addListenerCard()
}
request('https://ajaxkode.firebaseio.com/koders.json', buildPostCards)

/**
 * Click and view description
 */

const closeInfo = document.getElementsByClassName('close__cardInfo')[0];
const ctnModalInfo = document.getElementsByClassName('ctn__card__info')[0];
const ctnModalForm = document.getElementsByClassName('ctn__formEdit')[0];

closeInfo.addEventListener('click', function (event) {
  event.preventDefault()
  ctnModalInfo.classList.remove('open')
})

// listener click card and filled card info
const addListenerCard = () => {
  var cardsNode = document.querySelectorAll('.card__item');
  cardsNode.forEach((item) => {
    item.addEventListener('click', function () {
      var idKoder = this.dataset.id
      request(`https://ajaxkode.firebaseio.com/koders/${idKoder}.json`, fillCardInfo);
      document.getElementsByClassName('btn__edit')[0].dataset.id = idKoder
      document.getElementsByClassName('card__info')[0].dataset.open = idKoder
    })
  })
}

// filled card info
const fillCardInfo = (arr) => {
  console.log(arr)
  var {
    age,
    firstName,
    lastName,
    pitch
  } = arr;
  document.getElementById('fullName').innerText = `${firstName} ${lastName}`
  document.getElementById('age').innerText = `${age} años`
  if (pitch === true) {
    document.getElementById('pitch').innerText = `Pitch: SI`
  } else {
    document.getElementById('pitch').innerText = `Pitch: NO`
  }
  ctnModalInfo.classList.add('open')
}

// filled card info
const fillCardForm = (arr) => {
  var {
    age,
    firstName,
    lastName,
    pitch
  } = arr;
  document.getElementById('formFirstName').value = `${firstName}`
  document.getElementById('formLastName').value = `${lastName}`
  document.getElementById('formAge').value = age
  document.getElementById("formPitch").checked = pitch;
  ctnModalInfo.classList.remove('open')
  ctnModalForm.classList.add('open')
}

// click to edit form 
var editBtn = document.getElementsByClassName('btn__edit')[0]
editBtn.addEventListener('click', function () {
  var idKoder = this.dataset.id
  request(`https://ajaxkode.firebaseio.com/koders/${idKoder}.json`, fillCardForm);
  document.getElementsByClassName('update__koder')[0].dataset.id = idKoder
})

// send form edited
var editBtn = document.getElementsByClassName('update__koder')[0]
editBtn.addEventListener('click', function () {
  var idKoder = this.dataset.id
  var updatedKoder = {
    'firstName': document.getElementById('formFirstName').value,
    'lastName': document.getElementById('formLastName').value,
    'age': document.getElementById('formAge').value,
    'pitch': document.getElementById("formPitch").checked
  }
  var idKoder = this.dataset.id
  request(`https://ajaxkode.firebaseio.com/koders/${idKoder}.json`, showUpdated, method = 'PATCH', updatedKoder);
})

// function response update koder == 200 OK
const showUpdated = () =>{
  var idKoder = document.getElementsByClassName('update__koder')[0].dataset.id
  document.getElementsByClassName('ctn__formEdit')[0].classList.remove('open')
  document.querySelectorAll('.card__item[data-id="'+idKoder+'"]')[0].classList.add('focused');
  document.querySelectorAll('.card__item[data-id="'+idKoder+'"]')[0].scrollIntoView()
  setTimeout(function(){
    document.querySelectorAll('.card__item[data-id="'+idKoder+'"]')[0].classList.remove('focused');
  },5000)
}