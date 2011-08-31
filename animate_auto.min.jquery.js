/*!
 *
 * jQuery Animate Auto Values Plugin v.1.0
 * http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
 *
 * Copyright 2011, Darcy Clarke
 * Do what you want license
 * 
 */
jQuery.fn.animateAuto=function(a,b,c){var d,e,f;return this.each(function(g,h){h=jQuery(h),d=h.clone().css({height:"auto",width:"auto"}).appendTo("body");e=d.css("height"),f=d.css("width"),d.remove();if(a==="height")h.animate({height:e},b,c);else if(a==="width")h.animate({width:f},b,c);else if(a==="both")h.animate({width:f,height:e},b,c)})}