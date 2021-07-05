// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }

//   declare const backpack: Backpack<string>;
//    const backpack: Backpack<string>; 

//    const object = backpack.get();


(function() {


    

    let helloWorld = "Hello World";

    type WindowStates = "open" | "closed" | "minimized";

 


    function getLength(obj: string | string[]) {
        return obj.length;
      }


    //   you can make a function return different values depending on whether it is passed a string or an array:
      function wrapInArray(obj: string | string[]) {
        if (typeof obj === "string") {
          return [obj];
        //   (parameter) obj: string
        } else {
          return obj;
        }
      }


        //Generics
        type StringArray = Array<string>;
        type NumberArray = Array<number>;
        type ObjectWithNameArray = Array<{ name: string }>;
   

 })();