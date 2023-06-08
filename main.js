if (window.location.href.includes("github.io")) {
    document.getElementById("github").style.display = "none";
}
if (window.location.href.includes("netlify.app")) {
    document.getElementById("netlify").style.display = "none";
}
if (window.location.href.includes("web.app")) {
    document.getElementById("firebase").style.display = "none";
}

//Materialize CSS navbar thing
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
});

// Or with jQuery

$(document).ready(function () {
    alert("Disclaimer: This is an old site, these projects don't represent my current skills and abilities, visit github.com/enesflow for more projects")
    $(".sidenav").sidenav();
});
