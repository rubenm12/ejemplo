"use strict";
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }
//   declare const backpack: Backpack<string>;
//    const backpack: Backpack<string>; 
//    const object = backpack.get();
(function () {
    let helloWorld = "Hello World";
    function getLength(obj) {
        return obj.length;
    }
    //   you can make a function return different values depending on whether it is passed a string or an array:
    function wrapInArray(obj) {
        if (typeof obj === "string") {
            return [obj];
            //   (parameter) obj: string
        }
        else {
            return obj;
        }
    }
})();
