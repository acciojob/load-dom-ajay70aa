//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const content = document.createElement(`p`)
	content.innerText = 'DOM load success'
	document.body.appendChild(content)
});