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

jQuery.fn.animateAuto=function(e,t,n){var r,i,s;return this.each(function(o,u){u=$(u);r=u.clone().css({height:"auto",width:"auto"}).appendTo(u.parent());i=r.css("height");s=r.css("width");r.remove();var a=function(){if(prop!=="both"){u.css(prop,"auto")}else{u.css({height:"auto",width:"auto"})}if(n){n.call(u)}};if(e.height&&e.height==="auto"){e.height=i}if(e.width&&e.width==="auto"){e.width=s}u.animate(e,t,a)})}