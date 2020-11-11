class ProgressRing extends HTMLElement {
  constructor() {
    super();
    const stroke = this.getAttribute("stroke") || 12;
    const radius = this.getAttribute("radius") || 64;
    const color = this.getAttribute("color") || "red";
    const normalizedRadius = radius - stroke * 2;
    this._circumference = normalizedRadius * 2 * Math.PI;

    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div>
          <svg height="${radius * 2 + 2}" width="${radius * 2 + 2}" >
           <circle id="border"
             stroke="lavender"
             stroke-width="${stroke + 1}"
             fill="transparent"
             r="${normalizedRadius + 6}"
             cx="${radius - 0.25}"
             cy="${radius - 0.25}"
           />
           <circle id="inner"
             stroke="goldenrod"
             stroke-dasharray="${this._circumference} ${this._circumference}"
             style="stroke-dashoffset:${this._circumference}"
             stroke-width="${stroke - 1}"
             fill="${color}"
             r="${normalizedRadius}"
             cx="${radius}"
             cy="${radius}"
          />
          </svg>
          <div class="level empty"></div>
          <div class="caption">caption</div>
          <div class="blurb">blurb</div>
        </div>
        <style>
          circle {
            position: relative;
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
          }
          div.level {
            position:absolute;
            bottom: 28px;
            right: 12px;
            color:blue;
            text-align:center;
            background-color: whitesmoke;
            border: solid gold 3px;
            border-radius: 50%;
            width: 16px;
            height: 16px;
          }
          div.level.empty {
            display:none;
          }
          div {
              position:relative;
          }
          div.caption {
              position:absolute;
              bottom:0;
              left:0;
              width: 128px;
              text-align:center;
          }
          div.blurb {
            color:white;
            position:absolute;
            top:54px;
            left:0;
            width: 128px;
            text-align:center;
        }
        </style>
      `;
  }

  setProgress(percent) {
    const offset = this._circumference - percent / 100 * this._circumference;
    const circle = this._root.querySelector("#inner");
    circle.style.strokeDashoffset = offset;
  }

  setColor(color) {
    const circle = this._root.querySelector("#inner");
    circle.style.fill = color;
  }

  setCaption(caption) {
    const divCaption = this._root.querySelector(".caption");
    divCaption.innerHTML = caption;
  }

  setBlurb(blurb) {
    const div = this._root.querySelector(".blurb");
    div.innerHTML = blurb;
  }

  setLevel(level) {
    const div = this._root.querySelector(".level");
    if (+level > 0) {
      div.innerHTML = level;
      div.classList.remove("empty");
    } else {
      div.classList.add("empty");
    }
  }

  static get observedAttributes() {
    return ["progress", "color", "caption", "blurb", "level"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "progress") {
      this.setProgress(newValue);
    }
    if (name === "color") {
      this.setColor(newValue);
    }
    if (name === "caption") {
      this.setCaption(newValue);
    }
    if (name === "blurb") {
      this.setBlurb(newValue);
    }
    if (name === "level") {
      this.setLevel(newValue);
    }
  }
}

window.customElements.define("p-ring", ProgressRing);