// @ts-check

(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    // give some time for new page to settle
    setTimeout(() => {
      const mathLike = document.querySelectorAll("div.language-math div.token-line");
      const plotLike = document.querySelectorAll("div.language-plot div.token-line");
      mathLike.forEach((e) => {
        const s = lexit(e.innerText);
        e.innerHTML = s;
      });
      const math = document.querySelectorAll("div.mmath span.ismath");
      math.forEach((e) => {
        katex.render(e.innerText, e);
      });

      // plotLike.forEach((e) => fu.plot(e.innerText, e));
    }, 400);
    return pushState.apply(history, arguments);
  };
})(window.history);


function cleanUpMathLex(code) {
  if (code === "") return "";
  return code
    .replace(/_/gm, "&_")
    .replace(/\)\(/gm, ")*(") // (x+a)(x-2) => (x+a)*(x-2)
    .replace(/([0-9])\(/gm, (m, a, b) => a + "*(")
    .replace(/([0-9])([a-z])/gm, (m, a, b) => a + "*" + b);
}

const mathParse = (e) => {
  try {
    return MathLex.parse(e);
  } catch(err) {
    console.log(err);
    return e
  }
}

const mathRender = (e) => {
  try {
    return MathLex.render(e,"latex");
  } catch(err) {
    console.log(err);
    return e
  }
}

function lexit(expression) {

  let { numbr = "", exp = "", txt = "" } = expression.match(
    /(?<numbr>(\d+):)?(?<exp>[^:]+)(?<txt>:.+)?/
  ).groups;
  if (exp.trim() === "") return "";
  if (exp.includes("=")) {
    const [left = "", right = ""] = exp.split("=");
    const lnice = cleanUpMathLex(left);
    // @ts-ignore
    const last = mathParse(lnice);
    // @ts-ignore
    const llatex = left.trim()
      ? mathRender(last)
      : "";
    const rnice = cleanUpMathLex(right);
    // @ts-ignore
    const rast = mathParse(rnice);
    // @ts-ignore
    const rlatex = right.trim()
      ? mathRender(rast)
      : "";
    const eq = llatex ? "=" : "";
    return `<div class="mmath">
             <span>${numbr.replace(":", ")")}</span>
             <span class="ismath">${llatex}</span>
             <span class="ismath">${eq}</span>
             <span class="ismath">${rlatex}</span>
             <span>${txt}</span>
            </div>`;
  } else {
    const latex = mathRender(mathParse(exp));
    return `<div class="mmath simple">
             <span>${numbr.replace(":", ")")}</span>
             <span class="ismath">${latex}</span>
            <span>${txt}</span>
   </div>`;
  }
}
