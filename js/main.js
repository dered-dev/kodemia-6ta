/**
 * Menu sidebar list
 */
var menuItems = [
  {
    'name':'Item 1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 2',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 2',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 2',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  },
  {
    'name':'Item 3.1',
    'url':'http://www.google.com',
  }
]

const constructList = (arr,idparent) => {
  let acc = ''
  arr.forEach(element => {
    acc += `<li class="nav-item"><a class="nav-link" href="#">${element.name}</a></li>`
  });
  var parentTag = document.getElementById(idparent)
  parentTag.innerHTML = acc;
}
const removeClass = (selector,classremove) =>{
  var elementsToRemove = document.querySelectorAll(selector);
  for (var i = 0; i < elementsToRemove.length; i++) {
    elementsToRemove[i].classList.remove(classremove);
  }
}
// construct list
constructList(menuItems,'list__menu');

// add event to click
document.querySelectorAll('.nav-link').forEach(item => {
  console.log(item)
  item.addEventListener('click', event => {
    removeClass('.nav-link','active')
    event.target.classList.add('active');
  })
})

var triggerMenu = document.getElementById('toggle__menu')
var menu = document.getElementById('sidebarcontent')

triggerMenu.addEventListener('click', event => {
  if(menu.classList.contains('open')){
    menu.classList.remove('open')
    triggerMenu.classList.remove('open')
  }else{
    menu.classList.add('open')
    triggerMenu.classList.add('open')
  }
})



/**
 * JSON
 * GET, POST, PUT, PATCH, DELETE
 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200 ) {
    console.log(this.response)
    console.log(JSON.parse(this.response))
  }
}
xhttp.open('GET', 'example.json')
xhttp.send()