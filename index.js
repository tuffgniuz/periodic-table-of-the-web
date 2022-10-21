/**
 * 1. Create a class in which the web component functionality is defined 
 * 2. Register custom element 
 * 3. Attach a shadow DOM to the custom element and child elements, event listeners, etc. to the shadow DOM
 * 4. Define an HTML template using <template>. Clone the template and attach to the shadow DOM
 */

class WebElement extends HTMLElement {
    static num = 0;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.template = document.createElement('template');
        this.link = document.createElement('link')
    }

    render() {
        this.template.innerHTML = `
            <div class="element">
              <a>
                <span></span>
                <h1></h1>
                <p></p>
              </a>
            </div>
            `
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
        this.shadowRoot.appendChild(this.link)

        this.link.setAttribute('rel', 'stylesheet')
        this.link.setAttribute('href', './web-component.css')

        this.shadowRoot.querySelector('span').innerHTML = ++WebElement.num;
        this.shadowRoot.querySelector('a').href = this.getAttribute('link')
        this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('symbol')
        this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('name')
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('tg-web-element', WebElement);
