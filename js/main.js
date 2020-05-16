
$(function(){
	$('.menu-nav-list').slicknav({
		prependTo:'.menu-nav-mobile'
	});

	$('.slicknav_nav').addClass('clearfix');
//functions change height images	
	function heightImgWrapper() {
		
		var image_470x255 = document.querySelectorAll('.portfolio-image_470x255-wrapper img');
		var imageWrapper_470x255 = document.querySelectorAll('.portfolio-image_470x255-wrapper');
		
		for (var i = 0; i < imageWrapper_470x255.length; i++) {
			imageWrapper_470x255[i].style.height = image_470x255[0].getBoundingClientRect().width / 1.84319119669 + 'px';
		}

		var image_235x350 = document.querySelectorAll('.portfolio-image_235x350-wrapper img');
		var imageWrapper_235x350 = document.querySelectorAll('.portfolio-image_235x350-wrapper');

		for (var i = 0; i < imageWrapper_235x350.length; i++) {
			imageWrapper_235x350[i].style.height = image_235x350[0].getBoundingClientRect().width / 0.6714285714285 + 'px';
		}

		var image_235x235 = document.querySelectorAll('.portfolio-image_235x235-wrapper img');
		var imageWrapper_235x235 = document.querySelectorAll('.portfolio-image_235x235-wrapper');

		for (var i = 0; i < imageWrapper_235x235.length; i++) {
			imageWrapper_235x235[i].style.height = image_235x235[0].getBoundingClientRect().width + 'px';
		}

		var image_470x235 = document.querySelectorAll('.portfolio-image_470x235-wrapper img');
		var imageWrapper_470x235 = document.querySelectorAll('.portfolio-image_470x235-wrapper');

		for (var i = 0; i < imageWrapper_470x235.length; i++) {
			imageWrapper_470x235[i].style.height = image_470x235[0].getBoundingClientRect().width / 2 + 'px';
		}

	}
	heightImgWrapper();
//events resize window
	window.onresize = function(){
		heightImgWrapper();
	}
});
