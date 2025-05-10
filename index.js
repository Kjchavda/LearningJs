//alert("Alert") // alert in browser window
console.log("test") // put the text in the terminal

document.getElementById("myh1").textContent = "Counter";

let counter = 0;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);  
//     document.getElementById("myh1").textContent = `Hello ${username}`;
// }
document.getElementById("clearbtn").onclick = function(){
    counter = 0;
    document.getElementById("countLabel").textContent = counter;
}

document.getElementById("increasebtn").onclick = function(){
    counter++;
    document.getElementById("countLabel").textContent = counter;
}

document.getElementById("decreasebtn").onclick = function(){
    counter--;
    document.getElementById("countLabel").textContent = counter;
}
