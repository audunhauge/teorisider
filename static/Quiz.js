// @ts-check
class Quiz extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `
         <iframe>
         </iframe>
         <style>
           iframe {
               --height:30rem;
               border:0;
               width: 100%;
               height:var(--height);
           }
         </style>
        `;
    this.iframe = this._root.querySelector("iframe");
  }

  static get observedAttributes() {
    return ["qid", "tag", "subject", "height"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const iframe = this._root.querySelector("iframe");
    if (name === "qid") {
      iframe.src = `https://matte.oppgaver.net/free?qid=${newValue}`;
    }
    if (name === "height") {
      this.height = +newValue;
      this.iframe.style.setProperty("--height", +newValue + "rem");
    }
  }
}

window.customElements.define("quest-ion", Quiz);
