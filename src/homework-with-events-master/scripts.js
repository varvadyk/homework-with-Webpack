export let audio = null;

export function init_sound_button_click() {
	audio = new Audio("../src/sounds//quick_two.mp3");
	audio.play();
}