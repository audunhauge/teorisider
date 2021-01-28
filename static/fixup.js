(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
      const mathLike = document.querySelectorAll("div.language-math div.token-line");
      mathLike.forEach(e => katex.render(e.innerText,e));
      return pushState.apply(history, arguments);
    };
})(window.history);