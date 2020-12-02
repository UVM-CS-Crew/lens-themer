document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('dark').addEventListener("click", changeHandler, false);
	document.getElementById('halloween').addEventListener("click", changeHandler, false);
	document.getElementById('disable').addEventListener("click", changeHandler, false);
});

function changeHandler(){
	if(document.getElementById('dark').checked){
		console.log("dark mode enabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {mode:"dark"}, function(response){
				console.log(response.modeChanged);
			});
		});
	}
	else if(document.getElementById('halloween').checked){
		console.log("halloween mode enabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {mode:"halloween"}, function(response){
				console.log(response.modeChanged);
			});
		});
	}
	else if(document.getElementById('disable').checked){
		console.log("lens disabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {mode:"disable"}, function(response){
				console.log(response.modeChanged);
			});
		});
	}
}