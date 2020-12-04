document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('dark').addEventListener("click", changeHandler, false);
	document.getElementById('halloween').addEventListener("click", changeHandler, false);
	document.getElementById('disable').addEventListener("click", changeHandler, false);
});

function changeHandler(){
	var modeString = "";
	if(document.getElementById('dark').checked){
		console.log("dark mode enabled");
		modeString = "dark";
	}
	else if(document.getElementById('halloween').checked){
		console.log("halloween mode enabled");
		modeString = "halloween";
	}
	else if(document.getElementById('disable').checked){
		console.log("lens disabled");
		modeString = "disable";
	}
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs[0].id);
			console.log("Attempting to send message");
			chrome.tabs.sendMessage(tabs[0].id, {mode:modeString}, function(response){
				console.log(response.modeChanged);
			});
		});
	/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {mode : modeString});
	});*/
}