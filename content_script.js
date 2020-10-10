//var element = document.querySelector('main');
//element.parentElement.removeChild(element);

var minBackgrounds = 1;
var maxBackgrounds = 5;

var temp = document.createElement('div');

temp.innerHTML = "<style>@import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap'); body { background-image: url('".concat(chrome.runtime.getURL("images/".concat((Math.floor(((Math.random() * (maxBackgrounds - minBackgrounds)) + minBackgrounds))).toString()).concat(".png') !important;}</style>")));

var head = document.head;

while (temp.firstChild) {
    head.appendChild(temp.firstChild);
}



/*var temp = document.createElement('div');

temp.innerHTML = "<style></style>");

var head = document.head;

while (temp.firstChild) {
    head.appendChild(temp.firstChild);
}*/