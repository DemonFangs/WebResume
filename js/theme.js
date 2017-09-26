function changeCSS(cssFile, cssLinkIndex) {

	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", cssFile);
    
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
    
$('#light').click(function() {
  	changeCSS('css\\light.css', 2);
  }
);
$('#night').on('click', function() {
    changeCSS('css\\night.css', 2);
  }
);

$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
	}
);