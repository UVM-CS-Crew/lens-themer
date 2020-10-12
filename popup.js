document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('on').addEventListener("click", changeHandler, false);
	document.getElementById('off').addEventListener("click", changeHandler, false);
});

function changeHandler(){
	if(document.getElementById('on').checked){
		console.log("lens enabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {mode:"halloween"}, function(response){
				console.log(response.modeChanged);
			});
		});
	}
	if(document.getElementById('off').checked){
		console.log("lens disabled");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {mode:"disable"}, function(response){
				console.log(response.modeChanged);
			});
		});
	}
}