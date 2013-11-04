/*!
*
* jQuery animateAuto Plugin v.1.0
* Based on the original code provided by Darcy Clarke at:
* http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
*
* Copyright 2013, Alex Zaslavsky
* MIT License
* 
*/

jQuery.fn.animateAuto = function(props, speed, callback){
	var elem, height, width;
	return this.each(function(i, el){
		//Create a copy of the element, then measure it's height and width if they were "auto"
		el = $(el);
		elem = el.clone().css({"height":"auto","width":"auto"}).appendTo(el.parent());
		height = elem.css("height");
		width = elem.css("width");
		elem.remove();

		//Wrape the callback in function that ensures the height/width is reset to "auto" after the animation is over
		var wrappedCallback = function() {
			//Reset the height/width css property to auto
			if (prop !== 'both') {
				el.css(prop, 'auto');
			} else {
				el.css({height: 'auto', width: 'auto' });
			}

			//If there is a passed callback function, fire it
			if (callback) {
				callback.call(el);
			}
		};

		//Do the animation
		if (props.height && props.height === 'auto') {
			props.height = height;
		}
		if (props.width && props.width === 'auto') {
			props.width = width;
		}
		el.animate(props, speed, wrappedCallback);
	});
}