const nodeList= document.querySelectorAll("#numbutton");
const array=Array.prototype.slice.call(nodeList);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element.addEventListener("click",function(){
      let a =  element.innerText;
        console.log( typeof(a));
    })

}
