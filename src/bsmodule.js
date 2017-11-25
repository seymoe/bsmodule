;(function (w) {

	function BsModule () {
		var modules = {}

		function _define(name, deps, wrapFun) {
			if (deps.length > 0) {
				for (var i = 0; i < deps.length; i++) {
					deps[i] = modules[deps[i]]
				}
			}
			modules[name] = wrapFun.apply(wrapFun, deps)
		}

		function _find(name) {
			return modules[name]
		}

		return {
			def: _define,
			req: _find
		}
	}

	var bsmodule = BsModule()

	w.def = bsmodule.def
	w.req = bsmodule.req

}(window))