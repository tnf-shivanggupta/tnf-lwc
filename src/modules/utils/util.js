export const registerCustomComponent = (name, ctor) => {
	if(!customElements.get(name)){
		customElements.define(name, ctor)
	}
}