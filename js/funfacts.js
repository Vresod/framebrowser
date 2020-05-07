const funfacts = [
	"<i class='fas fa-arrow-right'></i> You can use FontAwesome icons for bookmarks! <i class='fas fa-arrow-left'></i>",
	"Try using ?url=(url) in your browser URL bar to go to a url on Frame Browser!",
	"Try using ?v=(youtube url) in your browser URL bar to go to a Youtube video on Frame Browser!",
];

function loadFunFact() {
	var funfactnum = Math.floor(Math.random() * funfacts.length);
	var funfact = funfacts[funfactnum];
	$("#funfact").html(funfact);
}

$(function () {
	loadFunFact();
});