import { api, LightningElement } from 'lwc';

export default class List extends LightningElement {
	listOptions = [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
			{ value: '3', label: 'Option 3' },
			{ value: '4', label: 'Option 4' },
			{ value: '5', label: 'Option 5' },
			{ value: '6', label: 'Option 6' },
			{ value: '7', label: 'Option 7' },
			{ value: '8', label: 'Option 8' },
	];

	defaultOptions = ['7', '2', '3'];

	requiredOptions = ['2', '7'];

	handleChange(event) {
			// Get the list of the "value" attribute on all the selected options
			const selectedOptionsList = event.detail.value;
			alert(`Options selected: ${selectedOptionsList}`);
	}
}

// Don't use the same name as tnf-list. It will break the functionality during composition
customElements.define('tnf-list-ce', List.CustomElementConstructor);

