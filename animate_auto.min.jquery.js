/*!
*
* jQuery animateAuto Plugin v1.1.3
* Based on the original code provided by Darcy Clarke at:
* http://darcyclarke.me/development/fix-jquerys-animate-to-allow-auto-values/
*
* Copyright 2013, Alex Zaslavsky
* MIT License
* 
*/

(function(e){var t=e;var n=e.fn.animate;e.fn.animate=function(){var r=arguments[0];var i=e.speed(arguments[1],arguments[2],arguments[3]);var s,o,u,a,f,l,c;return this.each(function(e,h){s=t(h);o=s.clone().css({height:"auto",width:"auto"}).appendTo(s.parent());u=o.height();a=o.width();o.remove();f={};if(r.height&&r.height==="auto"){f.height=r.height=u}if(r.width&&r.width==="auto"){f.width=r.width=a}l=t.extend(true,{},i);if(l.callback){c=l.callback;l.callback=function(){for(var e in f){s.css(e,"auto")}c.call(s)}}n.call(s,r,i)})}})(jQuery)