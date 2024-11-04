//Variables
let header = document.createElement("h1");
let text = document.createElement("input");
let button = document.createElement("button");

//DOM - header - text - button
header.textContent = "NFL/College Status";
header.style.marginLeft = "520px";
header.style.marginTop = "50px";
document.body.appendChild(header);

text.style.marginLeft = "570px";
text.style.marginTop = "5px";
document.body.appendChild(text);

button.textContent = "Search";
button.style.marginLeft = "20px";
button.type = "submit";
document.body.append(button);