class UML extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: "open" });
        this._root.innerHTML = `
         <div>
           <canvas></canvas>
          </div>
          <style>
          </style>
        `;
    }

    static get observedAttributes() {
        return ["uml", ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "uml") {
            const canvas = this._root.querySelector("canvas");
            const uml = newValue.replace(/;/g,"\n");
            nomnoml.draw(canvas,uml);
        }
    }

}

window.customElements.define("uml-diagram", UML);