const welcome = document.querySelector(".Welcome");
const message = "Welcome to the Initiators Navodayans";

let string = "";
let index = 0;
const id = setInterval(() => {
	welcome.innerHTML += message[index];
	index++;
	if (index === message.length) clearInterval(id);
}, 100);
