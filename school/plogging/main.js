const downs = document.getElementsByClassName("down");
const ups = document.getElementsByClassName("up");
const dur = 1;

for (var i = 0; i < downs.length; i++) {
    downs[i].style.transform = "translateY(60%)";
    downs[i].style.animation = "downtoup " + dur + "s";
}
for (var i = 0; i < ups.length; i++) {
    ups[i].style.transform = "translateY(20%)";
    ups[i].style.animation = "uptodown " + dur + "s";
}
