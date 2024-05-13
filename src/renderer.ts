import "./index.css";
const button = document.querySelector("#button");

console.log("img", button);
button.addEventListener("click", () => {
	window.ipcRenderer.send("open-whatsapp");
});
