/**
 * Exercise 1: Post blog abstraction
 */

var arrayElements = [
  {
    'title':'Prueba 1',
    'subtitle': 'Card subtitle 1',
    'content': 'Some quick example text to build on the card title and make up the bulk of',
    'img': 'https://picsum.photos/seed/picsum/400/300',
    'link':'https://www.google.com'
  },
  {
    'title':'Prueba 2',
    'subtitle': 'Card subtitle 2',
    'content': 'Some quick example text to build on the card title and make up the bulk of',
    'img': 'https://picsum.photos/seed/picsum/400/300',
    'link':'https://www.google.com'
  },
  {
    'title':'Prueba 2',
    'subtitle': 'Card subtitle 2',
    'content': 'Some quick example text to build on the card title and make up the bulk of',
    'img': 'https://picsum.photos/seed/picsum/400/300',
    'link':'https://www.google.com'
  },
  {
    'title':'Prueba 2',
    'subtitle': 'Card subtitle 2',
    'content': 'Some quick example text to build on the card title and make up the bulk of',
    'img': 'https://picsum.photos/seed/picsum/400/300',
    'link':'https://www.google.com'
  },
  {
    'title':'Prueba 2',
    'subtitle': 'Card subtitle 2',
    'content': 'Some quick example text to build on the card title and make up the bulk of',
    'img': 'https://picsum.photos/seed/picsum/400/300',
    'link':'https://www.google.com'
  }
]
const addElements = (arrayElements,parent) => {
  var parentNode = document.getElementById(parent)
  arrayElements.forEach(({nodeName,content}) => {
    var itemNode = document.createElement(nodeName)
    itemNode.innerText = content
    parentNode.appendChild(itemNode)
  });
}
const buildTreeInnerHTMLWithReduce = (nodes, parent) => {
  const parentNode = document.getElementById(parent)
  const accNodes = nodes.reduce((acc, { nodeName, content }) => {
    return `${acc} <${nodeName}> ${content} </${nodeName}>`
  }, '')
  parentNode.innerHTML = accNodes
}

/**
 * Add post elements to container
 * @param {*} nodes 
 * @param {*} parent 
 */

// forEach alternative
const buildPost = (nodes, parent) => {
  var parentNode = document.getElementById(parent)
  arrayElements.forEach(({ title, subtitle, content,img,link }) => {
    parentNode.insertAdjacentHTML("beforeend",`
      <div class="col-12 col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
              <p class="card-text">${content}</p>
              <a href="${link}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    `);
  });
}
// Reduce alternative
const buildPostReduce = (nodes, parent) => {
  const parentNode = document.getElementById(parent)
  const accNodes = nodes.reduce((acc, { title, subtitle, content,img,link }) => {
    return acc + `
      <div class="col-12 col-md-4 col-lg-4 mb-5">
        <div class="card">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
              <p class="card-text">${content}</p>
              <a href="${link}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    `
  }, '')
  parentNode.innerHTML = accNodes
}

buildPostReduce(arrayElements,'listPost')












