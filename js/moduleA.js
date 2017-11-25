def('moduleA', [], function () {
	var sayHello = function () {
		console.log('Hello')
	}

	return {
		sayHello: sayHello
	}
})