import { api, LightningElement } from 'lwc';
import { registerCustomComponent } from '../../utils/util';

export default class List extends LightningElement {
	message = "Hello World";
	handleInput(event) {
		this.message = event.target.value;
	}
}

// Don't use the same name as tnf-list. It will break the functionality during composition

registerCustomComponent('tnf-list-ce', List.CustomElementConstructor);

