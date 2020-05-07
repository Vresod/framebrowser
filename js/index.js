function goURL(url) {
	$("#url").val(url);
	search();
}

function addHTTPS(url) {
	// code stolen from https://stackoverflow.com/a/11300985/11085560
	return !(/^((f|ht)tps?|frame):\/\//i).test(url) ? "https://" + url : url;
}
function isHTTPS(url) {
	return (/^((f|ht)tps?|frame):\/\//i).test(url);
}

function isFrame(url) {
	return (/^frame:\/\//i).test(url);
}

function settings(bit) {
	if (bit == 0) {
		$("#settings").hide();
	}
	else if (bit == 1) {
		$("#settings").show();
	}
}

function back() {
	window.history.back();
	$("#url").val($("#frame").attr("src"));
}

function forward() {
	window.history.forward();
	$("#url").val($("#frame").attr("src"));
}

function home() {
	$("#url").val("frame://home");
	search();
}

function search() {
	if (!isHTTPS($("#url").val())) {
		$("#frame").attr("src", "https://google.com/search?igu=1&q=" + $("#url").val());
	}
	else {
		if (isFrame($("#url").val())) {
			$("#frame").attr("src", "framescheme/" + $("#url").val().slice(8) + ".html");
		}
		else {
			$("#frame").attr("src", $("#url").val());
		}
	}

	return "URL searched for!";
}

function reload() {
	$("#frame").attr("src", $("#frame").attr("src"));
	return "Frame reloaded!";
}

function google() {
	$("#frame").attr("src", "https://google.com/webhp?igu=1");
	$("#url").val("https://google.com");

}
function getId(url) {
	let regExp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
	url.match(regExp);
	let id = url.match(regExp)[5];
	return regExp.test(url) ? id : "error";
}

function youtube() {
	let youtubeURL = prompt("What is the URL of the video you want to watch?", "https://youtube.com/watch?v=Zeg5DEkJdQE");
	let id = getId(youtubeURL);
	if (id !== "error") {
		goURL("https://youtube.com/embed/" + id + "?rel=0");
		return;
	} else {
		console.error("Youtube Error: incorrect value was given.")
	}
}

let frameHistory = [];

$(function () { // this does everything in it on load :)
	const urlParams = new URLSearchParams(window.location.search);
	const frameURL = urlParams.get("url");
	const youtubeParams = urlParams.get("v");
	if (frameURL == null && youtubeParams == null) {
		goURL("frame://home");
	}
	else if (frameURL !== null) {
		goURL(addHTTPS(frameURL));
	}
	else if (youtubeParams !== null) {
		let id = getId(youtubeParams);
		if (id !== "error") {
			goURL("https://youtube.com/embed/" + id + "?rel=0");
			return;
		} else {
			goURL("https://youtube.com/embed/" + youtubeParams + "?rel=0");
		}
	}
});