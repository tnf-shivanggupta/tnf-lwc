import { api, LightningElement } from 'lwc';

export default class Button extends LightningElement {
	@api 
	label = "Submit";
	onClick() {
		alert(`${this.label} button clicked`)
	}
}
// Don't use the same name as tnf-button. It will break the functionality during composition
customElements.define('tnf-button-ce', Button.CustomElementConstructor);