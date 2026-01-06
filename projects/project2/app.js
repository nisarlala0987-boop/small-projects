function reset() {
    var counterElement = document.getElementById("counter");
    counterElement.innerText = 0;
}



function nisar() {
    var counterElement = document.getElementById("counter");
    var count = Number(counterElement.innerText); 
    count++; 
    counterElement.innerText = count;        
}
function incre() {
    var counterElement = document.getElementById("counter");
    var count = Number(counterElement.innerText); 
    count--; 
    counterElement.innerText = count;        
}






