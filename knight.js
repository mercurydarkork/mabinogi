function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
function allowDrop(ev) {
    ev.preventDefault();
}
//拖动开始
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}