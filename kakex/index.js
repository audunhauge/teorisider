module.exports = function (context, options) {
  // ...
  return {
    name: "kakex",
    async loadContent() {
      
    },
    async contentLoaded({ content, actions }) {
      console.log(content,actions);
      /*
        const mathLike = document.querySelectorAll("div.language-math div.token-line");
        mathLike.forEach(e => katex.render(e.innerText,e));
        */
    },
  };
};
