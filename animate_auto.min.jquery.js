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

(function(e){var t=e;var n=e.fn.animate;e.fn.animate=function(){var r=arguments[0];var i=e.speed(arguments[1],arguments[2],arguments[3]);var s,o,u,a;return this.each(function(e,f){s=t(f);o=s.clone().css({height:"auto",width:"auto"}).appendTo(s.parent());u=o.css("height");a=o.css("width");o.remove();var l={};if(r.height&&r.height==="auto"){l.height=r.height=u}if(r.width&&r.width==="auto"){l.width=r.width=a}var c=function(){for(var e in l){s.css(e,"auto")}if(i.callback){i.callback.call(s)}};n.call(s,r,i)})}})(jQuery)