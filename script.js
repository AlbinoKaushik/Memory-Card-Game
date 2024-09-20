let container = document.querySelector("#container");
let boxes = document.querySelectorAll(".box")

const img =()=>{
  let options = ["Apple","Banana","Cherry","Coconut","Mango","Orange","Peach","Watermelon","Apple","Banana","Cherry","Coconut","Mango","Orange","Peach","Watermelon"]
  let randIndex = Math.floor(Math.random()*16)
  // console.log(options[randIndex]); 
  let a = options[randIndex];
  // delete options[randIndex];
  options.splice(randIndex,1)
  let start =[""];
  start += a
  console.log(a);
  console.log(start);
  console.log(options);
  return a,randIndex
};


const reset = ()=>{ boxes.forEach((box)=>{
box.innerHTML = `<img src="Basket.jpg" alt="">`
});
img()
};
reset();


boxes.forEach((box)=>{
  box.addEventListener("click",(a,randIndex)=>{
    document.getElementById("box1")
    box.innerHTML = `<img src="${randIndex}.jpg" alt="">`
  })
});



const game = ()=>{
  if(box.innerHTML ===`<img src="Basket.jpg" alt=""></img>`){
        
  }
  // else if(){
    
  // }
  else{
    reset();
  }
}