/*!
*
* jQuery animateAuto Plugin v1.1.4
* Based on the original code provided by Darcy Clarke at:
* http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
*
* Copyright 2014, Alex Zaslavsky
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
		//opts.queue = false;

		return this.each(function(i, el){
			var elem, clone, height, width, changed, options, callback;
			//Create a copy of the element, then measure it's height and width if they were "auto"
			elem = $(el);
			clone = elem.clone().css({height:'auto', width:'auto'}).appendTo(elem.parent());
			height = clone.height();
			width = clone.width();
			clone.remove();

			//Temporarily change the height and width property if the original parameters had them listed as "auto"
			changed = {};
			if (props.height && props.height === 'auto') {
				changed.height = props.height = height;
			}
			if (props.width && props.width === 'auto') {
				changed.width = props.width = width;
			}

			//Wrap the callback in function that ensures the height/width is reset to "auto" after the animation is over
			options = $.extend(true, {}, opts);
			if (options.complete) {
				callback = options.complete;
				options.complete = function() {
					//Reset the height/width css properties to "auto"
					for (var x in changed) {
						elem.css(x, 'auto');
					}
					callback.call(elem);
				};
			}

			//Do the animation
			animate.call(elem, props, options);
		});  
	}
}(jQuery));