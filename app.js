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


function Password(params) {
    
    var passwords = document.getElementById('input');
    var icon = document.getElementById('eye');
    if (passwords.type==="password") {
        passwords.type = "text";
    } else {
        passwords.type = "password";
    }
}

function checking() {
  var n= document.getElementById("taskInput").value;
    if(n==="") {
        
        document.getElementById("taskInput").value = "";
        document.getElementById("result").innerText = "";
        alert("Please enter a number");
        return;
       

    }
   else if (n%2==0) {
 document.getElementById("result").innerText="Even hai";

    }
 

else {
        document.getElementById("result").innerText= "Odd hai";

    }



}


