jQuery animateAuto Plugin
=============

A very simply plugin that extends the native jQuery.fn.animate function to support 'auto' as a viable property for `width` or `height` animations.

### Example

````javascript

// Create a test element
var element = $('<div style="height: 20px, width: 30px;"/>').appendTo('body');

// Animate the height and width properties to their respective 'auto' values
element.animate({ height: 'auto', width: 'auto' }, 500);
```

License
------------
MIT License

This plugin is based on the original work done by Darcy Clarke at: http://darcyclarke.me/articles/development/fix-jquerys-animate-to-allow-auto-values/
