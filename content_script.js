chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
		var temp = document.createElement('div');
		if (message.mode === "dark") {
			// Enable dark mode, remove all other themes
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
			}
			if (document.querySelector("body").classList.contains("halloween")) {
				document.querySelector("body").classList.remove("halloween");
				document.getElementById("lensImports").outerHTML = "";
			}
			console.log("adding dark class");
			document.querySelector("body").classList.add(message.mode);
			
			var head = document.head;

			while (temp.firstChild) {
				head.appendChild(temp.firstChild);
			}
		}
		else if (message.mode === "halloween") {
			// Enable halloween mode, remove all other themes
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
			}
			if (document.querySelector("body").classList.contains("halloween")) {
				document.querySelector("body").classList.remove("halloween");
				document.getElementById("lensImports").outerHTML = "";
			}
			var minBackgrounds = 1;
			var maxBackgrounds = 5;
			
			console.log("adding halloween class");
			document.querySelector("body").classList.add(message.mode);
			
			temp.innerHTML = "<style id=lensImports>@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap'); body { background-image: url('".concat(chrome.runtime.getURL("images/".concat((Math.floor(((Math.random() * (maxBackgrounds - minBackgrounds)) + minBackgrounds))).toString()).concat(".png') !important;}</style>")));

			var head = document.head;

			while (temp.firstChild) {
				head.appendChild(temp.firstChild);
			}
		}
		else if (message.mode === "disable") {
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
			}
			if (document.querySelector("body").classList.contains("halloween")) {
				document.querySelector("body").classList.remove("halloween");
				document.getElementById("lensImports").outerHTML = "";
			}
		}
		sendResponse({modeChanged: "Mode message recieved"});
	}
);