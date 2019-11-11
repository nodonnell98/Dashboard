console.log("hello");
var article = document.getElementsByClassName("article");
var gridBtn = document.getElementById("gridBtn");
var listBtn = document.getElementById("listBtn");
gridBtn.addEventListener("click", grid);
listBtn.addEventListener("click", list);
function grid() {
    for (var i = 0; i < article.length; i++) {
        article.item(i).classList.add("inline");
        article.item(i).classList.add("mw6");
        article.item(i).classList.remove("center");
        article.item(i).classList.remove("mw8");
    }
}
function list() {
    for (var i = 0; i < article.length; i++) {
        article.item(i).classList.remove("inline");
        article.item(i).classList.remove("mw6");
        article.item(i).classList.add("center");
        article.item(i).classList.remove("mw8");
    }
}
//# sourceMappingURL=hello.js.map