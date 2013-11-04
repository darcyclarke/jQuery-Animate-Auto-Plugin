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

(function (jQuery) {
	var $ = jQuery;
	var animate = jQuery.fn.animate;

	jQuery.fn.animate = function(){
		//Extract the animation properties from the arguments list, and use jQuery.speed to identify the remaining parameters
		var props = arguments[0];
		var opts = jQuery.speed(arguments[1], arguments[2], arguments[3]);

		var elem, clone, height, width;
		return this.each(function(i, el){
			//Create a copy of the element, then measure it's height and width if they were "auto"
			elem = $(el);
			clone = elem.clone().css({"height":"auto","width":"auto"}).appendTo(elem.parent());
			height = clone.css("height");
			width = clone.css("width");
			clone.remove();

			//Temporarily change the height and width property if the original parameters had them listed as "auto"
			var changed = {};
			if (props.height && props.height === 'auto') {
				changed.height = props.height = height;
			}
			if (props.width && props.width === 'auto') {
				changed.width = props.width = width;
			}

			//Wrap the callback in function that ensures the height/width is reset to "auto" after the animation is over
			var wrappedCallback = function() {
				//Reset the height/width css properties to "auto"
				for (var x in changed) {
					elem.css(x, 'auto');
				}

				//If there is are callback functions, fire them
				if (opts.callback) {
					opts.callback.call(elem);
				}
			};

			//Do the animation
			animate.call(elem, props, opts);
		});
	}
}(jQuery));