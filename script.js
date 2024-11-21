var numCounter = document.getElementById("counternum");

var decreasebtn = document.getElementById("decreasebtn");

var increasebtn = document.getElementById("increasebtn");

var reduceToZeroBtn = document.getElementById("reducetozerobtn");

decreasebtn.addEventListener('click', function (){
	numCounter.innerText = Number(numCounter.innerText) - 1;
});

increasebtn.addEventListener('click', function (){
	numCounter.innerText = Number(numCounter.innerText) + 1;
});

reduceToZeroBtn.addEventListener('click', function (){
	numCounter.innerText = 0;
});