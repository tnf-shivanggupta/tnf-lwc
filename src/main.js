import { createElement } from 'lwc';
import App from 'example/app';

customElements.define('tnf-helloworld', App.CustomElementConstructor);
createElement('example-app', { is: App });