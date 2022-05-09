import { api, LightningElement } from 'lwc';

export default class List extends LightningElement {
	message = "Hello World";
	handleInput(event) {
		this.message = event.target.value;
	}
}
customElements.define('tnf-list', List.CustomElementConstructor);
