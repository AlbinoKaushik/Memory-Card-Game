let container = document.querySelector("#container");
let boxes = document.querySelectorAll(".box")

const reset = ()=>{ boxes.forEach((box)=>{
box.innerHTML = `<img src="Basket.jpg" alt="" width="80%" height="80%">`
});
};
reset();
const img =()=>{
let options = ["Apple","Banana","Cherry","Coconut","Mango","Orange","Peach","Watermelon","Apple","Banana","Cherry","Coconut","Mango","Orange","Peach","Watermelon"]
let randIndex = Math.floor(Math.random()*16)
// console.log(options[randIndex]);
 const add = options[randIndex];
// delete options[randIndex];
options.splice(randIndex,1)
  // console.log(add);
//  console.log(options);
 return add,randIndex
};
boxes.forEach((box)=>{
  img()
  box.addEventListener("click",(add,randIndex)=>{
    document.getElementById("box1")
    box.innerHTML = `<img src="${randIndex}.jpg" alt="" width="80%" height="80%">`
    if(){
      
    }
        })
    });

