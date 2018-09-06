
console.log("connected!")
//restart function

//restart button
var restart = document.querySelector("#restartButton");
var getSquaresContent = document.querySelectorAll("td");
//clear all squares
function clearContents() {
    for (var i = 0; i < getSquaresContent.length; i++) {
        getSquaresContent[i].textContent = "";
    }
}
//restart listner 
restart.addEventListener("click", clearContents);

//change content method declarartion
function changecontent(params) {
    console.log("call");
    if (params.textContent === "") {
        params.textContent = "X";
    }
    else if (params.textContent === "X") {
        params.textContent = "O";
    }
    else if (params.textContent === "0") {
        params.textContent = "";
    }
    else { }
}

//event listner
for (var i = 0; i < getSquaresContent.length; i++) {
    getSquaresContent[i].addEventListener("click", function () {
        changecontent(getSquaresContent[i]);
    }, false);
}