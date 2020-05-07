var bookmarks = []; // holy cow!!!! i literally just yeeted the linecount
var bookNum = 0;

function bookmarker() {
	bookmarks.push({
		"link": "",
		"name": "",
		"icon": ""
	});
	$("#bookmarks").append(
		"<button id=" + bookNum + " onclick=\"book(" + bookNum + ")\">placeholder</button>"
	);
	book(bookNum);
	bookNum++;
	console.log("The number of bookmarks is " + bookNum);
}

function reset() { // this function is dangerous and will destroy your bookmarks
	var areyousure = confirm("Are you sure you want to do reset your bookmarks?");
	if (areyousure) {
		for (bookNum; bookNum >= 0; bookNum--) {
			$("#" + bookNum).remove();
		}
		bookmarks = [];
		bookNum = 0;
	}
}

function book(num) {
	if (bookmarks[num].link !== "") {
		var confirmer = confirm("Press \"OK\" to go to the URL, or press \"Cancel\" to change it. ")
		if (!confirmer) {
			bookmarks[num].name = prompt("What is the name of the bookmark?", "xkcd");
			bookmarks[num].link = addHTTPS(prompt("What is the URL of the bookmark?", "xkcd.com"));
			bookmarks[num].icon = addHTTPS(prompt("What is the URL of the icon?", "xkcd.com/favicon.ico"));
		$("#" + num).html(`<img src=\"${bookmarks[num].icon}\"> ${bookmarks[num].name}`);
		}
		else {
			$("#frame").attr("src", bookmarks[num].link);
			$("#url").val($("#frame").attr("src"));
		}
	}
	else {
		bookmarks[num].name = prompt("What is the name of the bookmark?", "xkcd");
		bookmarks[num].link = addHTTPS(prompt("What is the URL of the bookmark?", "xkcd.com"));
		bookmarks[num].icon = addHTTPS(prompt("What is the URL of the icon?", "xkcd.com/favicon.ico"));
		$("#" + num).html(`<img src=\"${bookmarks[num].icon}\"> ${bookmarks[num].name}`);
	}
} // i removed 85% of the code :DDDDDDDDD