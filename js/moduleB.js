def('moduleB', ['moduleA'], function (moduleA) {
	var sayToA = function () {
		moduleA.sayHello()
		console.log('I am B!')
	}

	return {
		sayToA: sayToA
	}
})