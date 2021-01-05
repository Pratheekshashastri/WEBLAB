
var text_size = 0;
var timeout1,timeout2;
var text;

function startAnim() {
    text = document.getElementById("text");
    timeout1 = window.setInterval("incr()",100);
}

function incr() {
    text_size += 1;
    text.innerHTML = "TEXT GROWING..."+text_size+"pt";
    text.style.fontSize = text_size + "pt";
    text.style.color = "red";
    if (text_size>49) {
        window.clearInterval(timeout1);
        timeout2 = window.setInterval("decr()",100);
    }
}

function decr() {
    text_size -= 1;
    text.innerHTML = "TEXT SHRINKING..."+text_size+"pt";
    text.style.fontSize = text_size + "pt"
    text.style.color = "blue";
    if(text_size<6) {
        window.clearInterval(timeout2);
        timeout1 = window.setInterval("incr()",100);
    }
}