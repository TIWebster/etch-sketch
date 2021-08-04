//Initiate container for the etch a sketch
const container = document.querySelector(".container");

//Reset button, create onclick function to set n to users choice and reset grid
const reset = document.getElementById("reset");
reset.onclick = function(){
    let n = prompt("Enter value for n");
    if (n >= 64){
        n = 64;
    }
    initGrid(n);
}

//Removes children nodes from container
function removeChildren(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}


//Initiates grid
function initGrid(n){
    removeChildren();
    container.style.gridTemplateColumns = "repeat("+n+", "+100/n+"%";
    container.style.gridTemplateRows = "repeat("+n+", "+100/n+"%";
    for (i = 0; i < n*n; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "square";
        container.appendChild(newDiv);
    }
    for (child of container.childNodes){
        console.log(child);
        child.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "black";
        })
    }
}

initGrid(16);