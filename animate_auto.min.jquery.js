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

(function(e){var t=e;var n=e.fn.animate;e.fn.animate=function(){var r=arguments[0];var i=e.speed(arguments[1],arguments[2],arguments[3]);return this.each(function(e,s){var o,u,a,f,l,c,h;o=t(s);u=o.clone().css({height:"auto",width:"auto"}).appendTo(o.parent());a=u.height();f=u.width();u.remove();l={};if(r.height&&r.height==="auto"){l.height=r.height=a}if(r.width&&r.width==="auto"){l.width=r.width=f}c=t.extend(true,{},i);if(c.complete){h=c.complete;c.complete=function(){for(var e in l){o.css(e,"auto")}h.call(o)}}n.call(o,r,c)})}})(jQuery)