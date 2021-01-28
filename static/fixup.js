(function fixup() {
    document.addEventListener("DOMContentLoaded", function(){
        const mathLike = document.querySelectorAll("div.language-math div.token-line");
        mathLike.forEach(e => katex.render(e.innerText,e));
    });
}())
