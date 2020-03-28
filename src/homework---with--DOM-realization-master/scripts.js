 export const main = document.getElementById("main_box");
 export const value = 25;
 export const code_color = 256;
 export let timer;
 export function generateBlocks() {
 	main.textContent = "";
 	for (let i = 0; i < value; i++) {
 		const child_block = document.createElement("div");
 		child_block.classList.toggle("square");
 		child_block.style.background = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
 		main.append(child_block);
 	}
 }

 export function generateColor() {
 	return Math.floor(Math.random() * code_color);
 }