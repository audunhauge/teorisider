(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    // give some time for new page to settle
    setTimeout(() => {
      const mathLike = document.querySelectorAll("div.language-math div.token-line");
      mathLike.forEach((e) => katex.render(e.innerText, e));
    }, 400);
    return pushState.apply(history, arguments);
  };
})(window.history);
