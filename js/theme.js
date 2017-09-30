var aboutPosition = $('#about').offset().top - 58;
var skillsPosition = $('#skills').offset().top - 58;
var experiencePosition = $('#experience').offset().top - 58;
var linksPosition = $('#links').offset().top - 58;

$(document).scroll(function() {
  var currentScrollPosition = $(document).scrollTop();
  if (currentScrollPosition < aboutPosition){
  	$('.header').css('border-bottom-width', '0px');
  }else if (currentScrollPosition >= aboutPosition && currentScrollPosition < skillsPosition) {
    $('#about .header').css('border-bottom-width', '2px');
    $('#skills .header').css('border-bottom-width', '0px');
    $('#experience .header').css('border-bottom-width', '0px');
    $('#links .header').css('border-bottom-width', '0px');
  } else if (currentScrollPosition >= skillsPosition && currentScrollPosition < experiencePosition) {
  	$('#about .header').css('border-bottom-width', '0px');
    $('#skills .header').css('border-bottom-width', '2px');
    $('#experience .header').css('border-bottom-width', '0px');
    $('#links .header').css('border-bottom-width', '0px');
  } else if (currentScrollPosition >= experiencePosition && currentScrollPosition < linksPosition) {
  	$('#about .header').css('border-bottom-width', '0px');
    $('#skills .header').css('border-bottom-width', '0px');
    $('#experience .header').css('border-bottom-width', '2px');
    $('#links .header').css('border-bottom-width', '0px');
  } else if (currentScrollPosition >= linksPosition) {
  	$('#about .header').css('border-bottom-width', '0px');
    $('#skills .header').css('border-bottom-width', '0px');
    $('#experience .header').css('border-bottom-width', '0px');
    $('#links .header').css('border-bottom-width', '2px');
  }
});

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