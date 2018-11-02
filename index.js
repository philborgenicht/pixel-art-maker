document.addEventListener('DOMContentLoaded', function(){




  for (let x = 1; x <=2800; x++) {
    let middle=document.getElementsByTagName("main")
    let middle2=middle[0]
    let newTile= document.createElement("div")
    newTile.setAttribute("class", "painting")
    newTile.style.width="1%"
    newTile.style.paddingBottom="1%"
    newTile.style.float = "right"
    newTile.style.borderWidth="1px"
    newTile.style.borderColor="black"
    newTile.style.borderStyle="solid"

    if (x> 0) {
      newTile.style.backgroundColor = "white"
    }
    middle2.appendChild(newTile)
  }


  for (let x=1; x<=11; x++){
    let bottom= document.getElementsByTagName("footer")
    let bottom2=bottom[0]
    let palette=document.createElement("div")
    palette.style.width="8%"
    palette.style.paddingBottom="8%"
    palette.style.borderWidth="2px"
    palette.style.borderColor="gray"
    palette.style.borderStyle="dotted"
    palette.style.float="left"
    palette.setAttribute("id", "selection")


    /*if(x>0){
      palette.style.backgroundColor="white"
    }*/
    switch (x){
      case 1:
      palette.style.backgroundColor="maroon";
      break;
      case 2:
      palette.style.backgroundColor="blue";
      break;
      case 3:
      palette.style.backgroundColor="green";
      break;
      case 4:
      palette.style.backgroundColor="yellow";
      break;
      case 5:
      palette.style.backgroundColor="purple";
      break;
      case 6:
      palette.style.backgroundColor="orange"
      break;
      case 7:
      palette.style.backgroundColor="black";
      break;
      case 8:
      palette.style.backgroundColor="indigo";
      break;
      case 9:
      palette.style.backgroundColor="coral";
      break;
      case 10:
      palette.style.backgroundColor="violet";
      break;
      default:
      palette.style.backgroundColor="white"
    }
    bottom2.appendChild(palette)
  }



let choice=document.getElementById("paintbrush")
// let drawing=document.getElementById("canvas")

let chooseColor=function(event){
  chosenColor=event.target.style.backgroundColor
}



choice.addEventListener("click", chooseColor)



let paint=function(event){
  event.target.style.backgroundColor=chosenColor
}

// drawing.addEventListener("click", paint)


let paintArea=document.getElementsByClassName("painting")
for (let x=0; x<paintArea.length; x++){
  paintArea[x].addEventListener("click", function(event){
    event.target.style.backgroundColor=chosenColor
  })
}


let resetButton=document.getElementById("reset")

resetButton.addEventListener("click", function(){

let squares=document.getElementsByClassName("painting")
for(let z=0; z<squares.length; z++){
  squares[z].style.backgroundColor="white"
}


})













})
