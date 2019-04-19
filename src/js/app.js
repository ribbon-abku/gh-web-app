// @file app.js
function whenReady(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
whenReady(() => {
	let terminal = document.getElementById('terminal');
	terminal.innerHTML = 'Hello world';
});