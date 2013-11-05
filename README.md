jQuery animateAuto Plugin v1.1.3
=============

A very simply plugin that extends the native jQuery.fn.animate function to support 'auto' as a viable property for width or height animations.  So, whereas the following example would previously throw all sorts of errors (or simply not work), it is now a perfectly valid animation hash:

	//First load jQuery (obviously), then run the plugin code sometime before you animate stuff
	var testDiv = $('<div style="height: 20px, width: 30px;"/>').appendTo('body');

	//Animate to whatever testDiv's auto height and width would be
	testDiv.animate({
		height: 'auto',
		width: 'auto',
	}, 500, 'linear', function() {
		console.log('Oh look, the animation finished, and now we're getting this fancy callback.');
	})

License
------------
MIT License, Copyright 2013, Alex Zaslavsky

This plugin is developed from the original source provided by Darcy Clarke at the following URL:
http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
