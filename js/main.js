/**
 * Challenge 3: Remover elementos duplicados en un array
 */
const names = ['jorge', 'luis', 'luis', 'mario', 'octavio',1,2,3,4,4];
const array = ['dog','cat','cat',1,2,2,3]

// filter method
// const removeDups = array => array.filter((item,index) => {
//   return array.indexOf(item) === index
// })

// single for method
function removeDups(arr){
  let unique_array = []
  for(let i = 0;i < arr.length; i++){
      if(unique_array.indexOf(arr[i]) === -1){
          unique_array.push(arr[i])
      }
  }
  return unique_array
}
//console.log(removeDups(names))

/**
 * DOM, First Class
 */


var textArray = ['item 1','item 2','item 3','item 4','item 5.0']
var liNodes = document.getElementsByTagName('li')

const updateList = (arrToRender,nodeList) =>{
  for(let count = 0; count < textArray.length; count++){
    liNodes[count].innerText = textArray[count]
  }
}
updateList(textArray,liNodes)
