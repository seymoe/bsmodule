# bsmodule
JavaScript modules manage API in Browser

I donot know the principle of sea.js and require.js, but i think almust browser modules manage library should be similar with this wheel.

The principle is simple that just using closure, and define a module by using a function named `def` in here, get a module by using a function named `req` in here.

## example

```
// moduleA.js
// you can keep the module name same with the file name, easy to find them 
// 'moduleA' is module's name
// the second argument is the list of dependent modules
// third argument means module content, require a function to return an Object, exxport private API
def('moduleA', [], function () {
	var sayHello = function () {
		console.log('Hello')
	}

	return {
		sayHello: sayHello
	}
})
```

```
// moduleB.js
def('moduleB', ['moduleA'], function (moduleA) {
	var sayToA = function () {
		moduleA.sayHello()
		console.log('I am B!')
	}

	return {
		sayToA: sayToA
	}
})
```

```
// index.js
// require the modules and use them
var A = req('moduleA')
var B = req('moduleB')
A.sayHello()
B.sayToA()
```

That's all.
