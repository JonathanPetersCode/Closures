//To determine if you have a closure, observe that the inner() is accessing the "num" variable within its function body.

function outer() {
    let num = 5;
    return function inner(number) {
        return num + number;
       /* 
       "num" comes from the outer function!
       The inner function will return the "num" variable from the outer function added
       with the variable "number" which is passed in as an argument from the inner function.
       
       ** The inner function preserves the scope of the outer function 
       */  
    }
}

let out = outer();
console.dir(out);

/* Finally using console.dir, in Chrome Dev tools, when you expand the results it will display: 

[[Scopes]]: Scopes[3]
0: Closure (outer) {type: "closure", name: "outer", object: {…}}  
1: Script {type: "script", name: "", object: {…}}
2: Global {type: "global", name: "", object: Window}

This confirms our use of a closure!

/*
