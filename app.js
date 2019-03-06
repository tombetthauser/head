setInterval( () => { 
	let randomNum = (Math.round(Math.random()*24))+1;
	document.getElementById("image").src = "images/inverted/Untitled" + randomNum + ".png";
}, 10);