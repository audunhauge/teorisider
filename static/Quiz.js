class Quiz extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: "open" });
        this._root.innerHTML = `
         <iframe>
         </iframe>
         <style>
           iframe {
               border:0;
               width: 100%;
               height:30rem;
           }
         </style>
        `;
    }

    static get observedAttributes() {
        return ["qid","tag","subject" ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const iframe = this._root.querySelector("iframe");
        if (name === "qid") {
            iframe.src=`https://matte.oppgaver.net/free?qid=${newValue}`;
        }
    }

}

window.customElements.define("quest-ion", Quiz);