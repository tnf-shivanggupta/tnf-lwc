import { api, LightningElement } from 'lwc';
import { registerCustomComponent } from 'shared/utils';
import './Crud.js';
export default class Button extends LightningElement {
	// static renderMode = "light";
	@api 
	label = "Submit";
	onClick() {
		alert(`${this.label} button clicked`)
	}
	renderedCallback(){
		const svelteCustomComp = this.template.querySelector("[data-id=svelte-custom-component]")
		console.log(svelteCustomComp)
		svelteCustomComp.appendChild(document.createElement("crud-element"))
	}
}
// Don't use the same name as tnf-button. It will break the functionality during composition
registerCustomComponent('tnf-button-ce', Button.CustomElementConstructor);