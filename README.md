# General Definitions

## Callback 

##### Test change to be removed

## Closure

Closure is a function which has access to the scope of the outer functions even though it is returned. 

What is lexical scope ? - In javascript the scope and accessibility of the variables are defined as per the physical location of the variable.

```
    function outerFunction(){
        var outerVariable = 10;
        return closure() {
            console.log(outerVariable);
        }
    }

    var closureRef = outerFunction();
    closureRef();
```
From the above function, following will the lexical environment definition,
```
    globalLexicalEnv = {
        environmentRecord: {
            outerFunction: <function reference>,
            closureRef: <function reference to closure>
        }
        outer: null
    }

    // closureRef lexical environment

    closureRefLexicalEnv = {
        environemntRecord: {
            
        }
        outer: <globalLexicalEnv>
    }
    
```

