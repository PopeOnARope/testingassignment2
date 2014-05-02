//testing:

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn,arr);

    },

    speak : function(fn, obj) {

        return fn.apply(obj);
    },

    useArguments : function() {
        var markup=0;
        for (var i = 0; i<arguments.length; i++) {
            markup+=arguments[i];
        }
        return markup;

    }
  };
});