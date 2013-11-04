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

var animate=jQuery.fn.animate;jQuery.fn.animate=function(){var e=arguments[0];var t=jQuery.speed(arguments[1],arguments[2],arguments[3]);var n,r,i,s;return this.each(function(o,u){n=$(u);r=n.clone().css({height:"auto",width:"auto"}).appendTo(n.parent());i=r.css("height");s=r.css("width");r.remove();var a={};if(e.height&&e.height==="auto"){a.height=e.height=i}if(e.width&&e.width==="auto"){a.width=e.width=s}var f=function(){for(var e in a){n.css(e,"auto")}if(t.callback){t.callback.call(n)}};animate.call(n,e,t)})}