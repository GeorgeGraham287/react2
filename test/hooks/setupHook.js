function setupHook(hook,...args) {
	const returnVal = {}
	function TestComponent() {
		Object.assign(returnVal, hook(...args))
		return null
	}
	render(<TestComponent />)
	return returnVal
}

export default setupHook