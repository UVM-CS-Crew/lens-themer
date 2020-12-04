chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
		console.log("Message received");
		/*setTimeout(function() {
			console.log("Timed out");
			sendResponse({status: true});
		}, 1);*/
		var temp = document.createElement('div');
		if (message.mode === "dark") {
			console.log("adding dark class");
			// Enable dark mode, remove all other themes
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
				document.getElementById("lensImports").outerHTML = "";
			}
			if (document.querySelector("body").classList.contains("halloween")) {
				document.querySelector("body").classList.remove("halloween");
				document.getElementById("lensImports").outerHTML = "";
			}
			
			document.querySelector("body").classList.add(message.mode);
			
			temp.innerHTML = "<style id=lensImports>body { background-image: url('".concat(chrome.runtime.getURL("images/202020.png").concat("') !important;}</style>"));
			
			var head = document.head;

			while (temp.firstChild) {
				head.appendChild(temp.firstChild);
			}
		}
		else if (message.mode === "halloween") {
			// Enable halloween mode, remove all other themes
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
				document.getElementById("lensImports").outerHTML = "";
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
				document.getElementById("lensImports").outerHTML = "";
			}
			if (document.querySelector("body").classList.contains("halloween")) {
				document.querySelector("body").classList.remove("halloween");
				document.getElementById("lensImports").outerHTML = "";
			}
		}
		sendResponse({modeChanged: "Mode message recieved"});
		return Promise.resolve("Dummy response");
	}
);