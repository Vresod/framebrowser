function themer(theme = $("#darklightselect").val()) {
	if (theme == "1") {
		turnDark();
	}
	else if (theme == "0") {
		turnLight();
	}
}

function turnDark() {
	$("body").attr("id", "dark");
}

function turnLight() {
	$("body").attr("id", "light");
}

$(function () {
	const themeParam = new URLSearchParams(window.location.search).get("theme");
	var themeBoolSystem = window.matchMedia("(prefers-color-scheme: dark").matches ? "1" : "0";
	var themeBoolParam =
		themeParam !== null
			? themeParam == "dark"
				? "1"
				: "0"
			: null;
	console.log(themeBoolParam);
	var themeBool =
		themeBoolParam !== null
			? themeBoolParam
			: themeBoolSystem;
	console.log(themeBool);
	themer(themeBool);
	$("#darklightselect").val("2");
});