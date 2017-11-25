window.onload = function () {
	var A = req('moduleA')
	var B = req('moduleB')

	A.sayHello()

	B.sayToA()
}