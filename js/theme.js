function changeCSS(cssFile, cssLinkIndex) {

	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", cssFile);

	document.getElementsByTagName("link").item(2).replaceChild(newlink, oldlink);
}

$('#light').click(function() {
		changeCSS('css\x22light.css', 2);
	}
);
$('#night').click(function() {
		changeCSS('css\x22night.css', 2);
	}
);