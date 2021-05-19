//receivesAFunction 
function receivesAFunction(spy) {
     console.log(spy());
}

receivesAFunction(function () {console.log('Hello world')});



//returnsANamedFunction

function returnsANamedFunction() {
    return function fn () {
        console.log('Hello world')
    }
}


//returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function () {
        console.log('Hello world')
    }

}
