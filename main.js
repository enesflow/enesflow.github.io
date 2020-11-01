<<<<<<< HEAD
const loader = document.getElementById("loader");

var projects = document.getElementsByClassName("img");
for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function(e) {
        loader.style.display = "inline-block";
        for (var j = 0; j < projects.length; j++) {
            projects[j].style.pointerEvents = "none";
        }
    });
}
=======
//Materialize CSS navbar thing
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
});

// Or with jQuery

$(document).ready(function () {
    $(".sidenav").sidenav();
});
>>>>>>> 6ecdaf3 (2.0 version)
