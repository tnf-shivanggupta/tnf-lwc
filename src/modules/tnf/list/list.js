import { api, LightningElement } from 'lwc';

export default class List extends LightningElement {
	message = "Hello World";
	handleInput(event) {
		this.message = event.target.value;
	}
}

// Don't use the same name as tnf-list. It will break the functionality during composition
customElements.define('tnf-list-ce', List.CustomElementConstructor);

