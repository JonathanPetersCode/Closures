//To determine if you have a closure, observe that the inner() is accessing the "num" variable within its function body.

function outer() {
    let num = 5;
    return function inner(number) {
        return num + number;
        //num comes from the outer function!
    }
}

console.log(outer(2));
