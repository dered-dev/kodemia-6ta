const mainPostHandler = (response) => {
  const responseEntries = Object.entries(response)
  const parent = document.getElementById("mainPost")
  parent.innerHTML = `<div class="carousel-item active">
  <img src="${responseEntries[0][1].img}" class="d-block w-100" alt="...">
  <h1> ${responseEntries[0][1].title}</h1>
</div>`
}
​
​
​
const postsHandler = (response) => {
  const responseEntries = Object.entries(response)
  const parent = document.getElementById("posts")
  const children = responseEntries.reduce((acc, [key, { img, title, abstract, author }]) => {
    return `${acc}
    <div class="col-12 col-md-4 p-5 mb-2">
      <div class="card">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${abstract}</p>
          <p>${author}</p>
        </div>
      </div>
    </div>`
  }, '')
  console.log(responseEntries)
  parent.innerHTML = children
}
​
const request = (method, url, callback, data = {}) => {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.response))
    }
  }
  xhttp.open(method, url)
​
  if (method === "DELETE" || method === "GET") {
    xhttp.send()
  } else {
    xhttp.send(JSON.stringify(data))
  }
}
​
// request("GET", "https://ajaxkode.firebaseio.com/postPrincipal.json", mainPostHandler)
​
// request("GET", "https://ajaxkode.firebaseio.com/posts.json", postsHandler)
​
// request("POST", "https://ajaxkode.firebaseio.com/posts.json", response => console.log(response), {
//   "title": "Titulo 1",
//     "date" : "20/12/2019",
//     "author": "Oscar Pantoja",
//     "abstract": "...",
//     "content": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium id fugit architecto, perferendis obcaecati placeat, ea maxime saepe magnam, voluptate accusamus molestiae suscipit ratione. Magni quia quasi reprehenderit ex quisquam.`,
//     "img": "aqui url"
// })
​
​
/* const imageUpdater = response => {
  Object.entries(response).forEach((element, index) => {
    request(
      "PATCH", 
      `https://ajaxkode.firebaseio.com/posts/${element[0]}.json`, 
      response => console.log(response),
      {"img": `https://picsum.photos/id/${924 + index}/201/201`}
    )    
  });
}
​
request("GET", "https://ajaxkode.firebaseio.com/posts.json", imageUpdater)
 */
/* 
const updater = response => {
  Object.entries(response).forEach((element, index) => {
    request(
      "PATCH",
      `https://ajaxkode.firebaseio.com/posts/${element[0]}.json`,
      response => console.log(response),
      {
        "title": `Titulo ${index + 1}`,
        "abstract": `Abstract ${index + 1} `.repeat(5),
        "author": `Author ${index + 1}`
      }
​
    )
  });
}
​
request("GET", "https://ajaxkode.firebaseio.com/posts.json", updater) */
