function comment() {
    document.getElementById("properties").classList.add("none");
    document.getElementById("comments_block").classList.remove("none");
    document.getElementById("comment").classList.add("active_comment");
    document.getElementById("description").classList.remove("active_comment");
    document.getElementById("disappear").classList.add("none");
}
function description() {
    document.getElementById("properties").classList.remove("none");
    document.getElementById("comments_block").classList.add("none");
    document.getElementById("comment").classList.remove("active_comment");
    document.getElementById("description").classList.add("active_comment");
    document.getElementById("disappear").classList.add("none");
}
function hide_lang() {
    document.getElementById("hidelang").classList.toggle("show");
}
function input() {
    if (screen.width < "767px") { 
        document.getElementById("logo").classList.toggle("none");
        document.getElementById("input").classList.toggle("show");
    }
    else {
        document.getElementById("input").classList.toggle("show");
    }
}
function open_img() {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("image").style.display = "flex";
}

function close_img() {
    document.getElementById("image").style.display = "none";
    document.getElementById("body").style.overflow = "visible";
}
function color_change() {
    this.classList.add("acrive_color");
}