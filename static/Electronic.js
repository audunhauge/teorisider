class Electronic extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
    this.resistor = 100;
    this._root.innerHTML = `
            <div id="main"></div>
            <style>
              #main {
                  --b1: red;
                  --b2: blue;
                  --b3: black;
                  --rbg: beige;
                  --tow: 4px;
                  --tbg: goldenrod;
                  position:relative;
                  width: 200px;
                  height: 100px;
              }
              #main div {
                  position:absolute;
              }
              #right {
                  top: calc(50% - 3px);
                  left: 0;
                  width:30px;
                  height:4px;
                  background-color:gray;
                  border: solid gray 1px;
              }
              #left {
                  top: calc(50% - 3px);
                  right: 0;
                  width:30px;
                  height:4px;
                  background-color:gray;
                  border: solid gray 1px;
              }
              #resistor {
                  top: calc(50% - 20px);
                  left: 32px;
                  width:calc(100% - 64px);
                  height:40px;
                  background-color:var(--rbg);
                  border: solid gray 1px;
                  border-radius:5px;
              }
              #b1 { 
                  top:0;
                  left:8px;
                  width:4px;
                  height:100%;
                  background-color:var(--b1);
              }
              #b2 {
                  top:0;
                  left:22px;
                  width:4px;
                  height:100%;
                  background-color:var(--b2);
              }
              #b3 {
                  top:0;
                  left:39px;
                  width:4px;
                  height:100%;
                  background-color:var(--b3);
              }
              #tolerance {
                  top:0;
                  right:12px;
                  width:var(--tow);
                  height:100%;
                  background-color:var(--tbg);
              }
            </style>
          `;
    this.main = this._root.querySelector("#main");
  }

  static get observedAttributes() {
    return ["ohm", "type","scale"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "type") {
      if (newValue === "resistor") {
        this.main.innerHTML = `
              <div id="left"></div>
              <div id="resistor">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="b3"></div>
                <div id="tolerance"></div>
              </div>
              <div id="right"></div>
              `;
      }
      if (newValue === "transistor") {
        this.main.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 24 58" width="64"><g id="Page-1" fill="none" fill-rule="evenodd">
                  <g id="016---Transistor" fill-rule="nonzero">
                  <path id="Shape" d="m24 8v16c-.0032948 1.1032019-.8967981 1.9967052-2 2h-20c-1.10320187-.0032948-1.9967052-.8967981-2-2v-16c0-4.418278 3.581722-8 8-8h8c4.418278 0 8 3.581722 8 8z" fill="#35495e"/>
                  <path id="Shape" d="m9 22c0 .5522847-.44771525 1-1 1h-8v-2h8c.55228475 0 1 .4477153 1 1z" fill="#2c3e50"/><path id="Shape" d="m24 21v2h-12c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z" fill="#2c3e50"/>
                  <path id="Shape" d="m4 8c-.55228475 0-1-.44771525-1-1v-1c0-.55228475.44771525-1 1-1s1 .44771525 1 1v1c0 .55228475-.44771525 1-1 1z" fill="#3f5c6c"/>
                  <path id="Shape" d="m4 19c-.55228475 0-1-.4477153-1-1v-7c0-.5522847.44771525-1 1-1s1 .4477153 1 1v7c0 .5522847-.44771525 1-1 1z" fill="#3f5c6c"/>
                  <g fill="#95a5a5"><path id="Shape" d="m2 26h4v24c0 1.1045695-.8954305 2-2 2s-2-.8954305-2-2z"/><path id="Shape" d="m10 26h4v27c0 1.1045695-.8954305 2-2 2s-2-.8954305-2-2z"/>
                  <path id="Shape" d="m18 26h4v30c0 1.1045695-.8954305 2-2 2s-2-.8954305-2-2z"/></g></g></g>
                  </svg>`;
      }
      if (newValue === "capacitor") {
        this.main.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 30 60" width="64">
                  <g id="Page-1" fill="none" fill-rule="evenodd"><g id="001---Capacitor" fill-rule="nonzero">
                  <g id="Icons" transform="translate(1 1)"><path id="Shape" d="m28 3v34.5c0 .8284271-.6715729 1.5-1.5 1.5h-25c-.82842712 0-1.5-.6715729-1.5-1.5v-34.5c0-1.65685425 1.34314575-3 3-3h22c1.6568542 0 3 1.34314575 3 3z" fill="#02a9f4"/>
                  <path id="Shape" d="m25 0h-3c1.6568542 0 3 1.34314575 3 3v34.5c0 .8284271-.6715729 1.5-1.5 1.5h3c.8284271 0 1.5-.6715729 1.5-1.5v-34.5c0-1.65685425-1.3431458-3-3-3z" fill="#0377bc"/>
                  <path id="Shape" d="m26.5 43h-25c.82842712 0 1.5-.6715729 1.5-1.5v-1c0-.8284271-.67157288-1.5-1.5-1.5h25c-.8284271 0-1.5.6715729-1.5 1.5v1c0 .8284271.6715729 1.5 1.5 1.5z" fill="#3f51b5"/>
                  <path id="Shape" d="m25 41.5v-1c0-.8284271.6715729-1.5 1.5-1.5h-3c-.8284271 0-1.5.6715729-1.5 1.5v1c0 .8284271.6715729 1.5 1.5 1.5h3c-.8284271 0-1.5-.6715729-1.5-1.5z" fill="#283593"/>
                  <rect id="Rectangle-path" fill="#02a9f4" height="4" rx="1.5" width="28" y="43"/><path id="Shape" d="m26.5 43h-3c.8284271 0 1.5.6715729 1.5 1.5v1c0 .8284271-.6715729 1.5-1.5 1.5h3c.8284271 0 1.5-.6715729 1.5-1.5v-1c0-.8284271-.6715729-1.5-1.5-1.5z" fill="#0377bc"/>
                  <g fill="#607d8b"><path id="Shape" d="m5 47h4v3c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1z"/><path id="Shape" d="m19 47h4v3c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1z"/></g>
                  </g><g id="Layer_2">
                  <g fill="#000"><path id="Shape" d="m2.5 49h2.5v2c0 1.1045695.8954305 2 2 2v6c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-6c1.1045695 0 2-.8954305 2-2v-2h8v2c0 1.1045695.8954305 2
                   2 2v6c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-6c1.1045695 0 2-.8954305 2-2v-2h2.5c1.3807119 0 2.5-1.1192881 2.5-2.5v-1c0-1.3807119-1.1192881-2.5-2.5-2.5-.2761424 0-.5-.2238576-.5-.5v-1c0-.2761424.2238576-.5.5-.5.6630412
                    0 1.298926-.2633921 1.767767-.732233.4688409-.468841.732233-1.1047258.732233-1.767767v-34.5c0-2.209139-1.790861-4-4-4h-22c-2.209139 0-4 1.790861-4 4v34.5c0 .6630412.2633921 1.298926.73223305 1.767767.46884094.4688409
                     1.10472573.732233 1.76776695.732233.27614237 0 .5.2238576.5.5v1c0 .2761424-.22385763.5-.5.5-1.38071187 0-2.5 1.1192881-2.5 2.5v1c0 1.3807119 1.11928813 2.5 2.5 2.5zm6.5 2h-2v-2h2zm14 0h-2v-2h2zm5-4.5c0 .2761424-.2238576.5-.5.5h-25c-.27614237
                      0-.5-.2238576-.5-.5v-1c0-.2761424.22385763-.5.5-.5h25c.2761424 0 .5.2238576.5.5zm-26-42.5c0-1.1045695.8954305-2 2-2h22c1.1045695 0 2 .8954305 2 2v34.5c0 .2761424-.2238576.5-.5.5h-25c-.27614237
                       0-.5-.2238576-.5-.5zm3 37h20.1c-.0152946.1663158-.0152946.3336842 0 .5v1c-.0152946.1663158-.0152946.3336842 0 .5h-20.1c.03200248-.1647751.04874003-.3321506.05-.5v-1c-.00125997-.1678494-.01799752-.3352249-.05-.5z"/>
                       <path id="Shape" d="m13 31h-1c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v2.38l-4.55-2.27c-.48352717-.2013504-1.04049627.0045141-1.2768341.4719378s-.07195864 1.0380149.3768341 
                       1.3080622l6 3c.1393223.0713839.2934577.1090614.45.11.1872252.0006008.3708587-.051371.53-.15.2929855-.1831155.4706914-.5044985.47-.85v-2h1c.5522847 
                       0 1-.4477153 1-1s-.4477153-1-1-1z"/>
                       <path id="Shape" d="m5 29c.55228475 0 1-.4477153 1-1v-2.84c.63544786.4855682 1.30370802.9266199 2 1.32v1.52c0 .5522847.44771525 1 1 1s1-.4477153 
                       1-1v-.58c.9584707.366992 1.973808.5632906 3 .58.5522847 0 1-.4477153 1-1s-.4477153-1-1-1c-3.53 0-7.26-3.67-7.29-3.71-.2875607-.2837446-.7176029-.3665967-1.09-.21-.37342551.1534036-.61798485.5162981-.62.92v5c0
                        .5522847.44771525 1 1 1z"/></g><path id="Shape" d="m5 19c.55228475 0 1-.4477153 1-1v-3c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v3c0 .5522847.44771525 1 1 1z" fill="#f5f5f5"/>
                  <path id="Shape" d="m5 12c.55228475 0 1-.4477153 1-1v-6c0-.55228475-.44771525-1-1-1s-1 .44771525-1 1v6c0 .5522847.44771525 1 1 1z" fill="#f5f5f5"/>
                  </g>
                  </g>
                  </g>
                  </svg>`;
      }
      if (newValue === "inductor") {
        this.main.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" width="64" height="64">
                  <defs><style>.cls-1{fill:#4370ff;}</style></defs><path class="cls-1" d="M32,2A26,26,0,1,0,58,28,26,26,0,0,0,32,2Zm0,38.13A12.13,12.13,0,1,1,44.13,28,12.14,12.14,0,0,1,32,40.13Z"/>
                  <path d="M38,.65V4.76A24.07,24.07,0,0,1,47.48,9.7l-7,7A13.92,13.92,0,0,0,34,14V.08C33.34,0,32.67,0,32,0A28,28,0,0,0,19.47,53l-2.33,5.62,3.7,1.53,2.32-5.62A27.76,27.76,0,0,0,
                  30,55.92V64h4V55.92A28,28,0,0,0,38,.65ZM50.3,12.52A23.84,23.84,0,0,1,55.91,26H46a13.92,13.92,0,0,0-2.68-6.46ZM30,4.09V14a13.92,13.92,0,0,0-6.46,2.68l-7-7A23.86,23.86,0,0,1,30,
                  4.09ZM13.69,12.51l7,7A13.92,13.92,0,0,0,18,26H8.09A23.86,23.86,0,0,1,13.69,12.51ZM8.09,30H18a13.92,13.92,0,0,0,2.68,6.46l-7,7A23.86,23.86,0,0,1,8.09,30ZM30,51.91a23.86,23.86,0,
                  0,1-13.49-5.6l7-7A13.92,13.92,0,0,0,30,42Zm2-13.78A10.13,10.13,0,1,1,42.13,28,10.14,10.14,0,0,1,32,38.13Zm2,13.78V42a13.92,13.92,0,0,0,6.46-2.68l7,7A23.86,23.86,0,0,1,34,51.91Zm16.31-8.42-7-7A13.92,
                  13.92,0,0,0,46,30h9.94A23.86,23.86,0,0,1,50.31,43.49Z"/></svg>`;
      }
      if (newValue === "led") {
        this.main.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" width="64" height="64"><defs>
              <linearGradient id="gradient_ice" x1="8.633" y1="58.503" x2="55.215" y2="-5.242" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff200"/><stop offset="1" stop-color="#cd118c"/>
              </linearGradient><linearGradient id="gradient_ice-2" x1="-7.353" y1="46.82" x2="39.229" y2="-16.924" xlink:href="#gradient_ice"/></defs><g id="led-Diode-light-electronics-2" data-name="led-Diode-light-electronics">
              <path d="M48.45,31.89A.977.977,0,0,0,49,31V3a1,1,0,0,0-1-1H16a1,1,0,0,0-1,1V31a.977.977,0,0,0,.55.89l1.45.73v1.76l-1.45.73A.977.977,0,0,0,15,36v3a1,1,0,0,0,1,1h7V61a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V40h6V61a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V40h7a1,
              1,0,0,0,1-1V36a.977.977,0,0,0-.55-.89L47,34.38V32.62ZM27,60H25V40h2Zm.68-31.95A1.014,1.014,0,0,0,27,29v9H25V21H39v3.28ZM39,60H37V40h2Zm0-22H37V31.78l2-.5Zm6.55-2.11,1.45.73V38H41V30a1,1,0,0,0-.38-.79.989.989,0,0,0-.86-.18l-4,1A1,
              1,0,0,0,35,31v7H29V29.72l11.32-3.77A1.014,1.014,0,0,0,41,25V20a1,1,0,0,0-1-1H24a1,1,0,0,0-1,1V38H17V36.62l1.45-.73A.977.977,0,0,0,19,35V32a.977.977,0,0,0-.55-.89L17,30.38V4H47V30.38l-1.45.73A.977.977,0,0,0,45,32v3A.977.977,0,0,
              0,45.55,35.89Z" style="fill:url(#gradient_ice)"/><path d="M19,7v4h2V8h3V6H20A1,1,0,0,0,19,7Z" style="fill:url(#gradient_ice-2)"/></g></svg>`;
      }
      if (newValue === "diode") {
        this.main.innerHTML =
          `<div id="left"></div>
         <div id="resistor">
            <div id="tolerance"></div>
         </div>
         <div id="right"></div>`;
        this.main.style.setProperty("--rbg", "black");
        this.main.style.setProperty("--tbg", "silver");
        this.main.style.setProperty("--tow", "20px");
      }
    }
    if (name === "ohm") {
      const colors = "black,brown,red,orange,yellow,green,blue,magenta,gray,white".split(
        ","
      );
      this.resisitor = newValue;
      const v = Number(newValue);
      const digits = v.toExponential(1).replace(/[.e+]/g, "");
      const bands = digits.split("").map((e) => colors[+e]);
      this.main.style.setProperty("--b1", bands[0]);
      this.main.style.setProperty("--b2", bands[1]);
      const expo = +digits.charAt(2) - 1;
      this.main.style.setProperty("--b3", colors[expo]);
    }
    if (name === "scale") {
      const scale = Number(newValue);
      if (Math.abs(scale) > 0.1 && Math.abs(scale) < 2.5) {
        this.main.style.transform = `scale(${scale})`;
      }
    }
  }
}

window.customElements.define("elec-tronic", Electronic);  