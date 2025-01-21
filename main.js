const ism = prompt ("Ismingizni kiriting: ");

const body = document.body;
body.style.backgroundColor = "blue";

const nameElement = document.createElement("h1");
nameElement.textContent = ism;

nameElement.style.color = "yellow";
nameElement.style.position = "absolute";
nameElement.style.top = "50%";
nameElement.style.left = "50%";

body.appendChild(nameElement);
