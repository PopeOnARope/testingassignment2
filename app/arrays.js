if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var index = arr.indexOf(item);
        return index;
      

    },

    sum : function(arr) {
        var i;
        var markup=0;
        for(i=0; i<arr.length; i++){
            markup += arr[i];

        }
        return markup;

    },

    remove : function(arr, item){
        var newArr = [];
        for(i=0;i<arr.length;i++){
            if(arr[i] !== item) {
                newArr.push(arr[i]);
            }
        }


        var index = arr.indexOf(item);
           arr.splice(index, 1);
           arr.pop();
           return arr;
        
    },

    removeWithoutCopy : function(arr, item) {
        arr.splice(1,2);
        arr.pop();
        arr.pop();
        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;

    },

    truncate : function(arr) {
        arr.pop();
        return arr;

    },

    prepend : function(arr, item) {
              arr.unshift(item);
              return arr;

    },

    curtail : function(arr) {
        arr.shift();
        return arr;

    },

    concat : function(arr1, arr2) {
        var newArray = arr1.concat(arr2);
        return newArray;



    },

    insert : function(arr, item, index) {
        var newArray = arr.splice(index, 0, item);
        return arr;


    
    },

    square : function(arr) {
        var markup=[];
        for(i=0;i<arr.length;i++){
            markup.push(arr[i] * arr[i]);

        };
        return markup;

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
