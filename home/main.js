const loader = document.getElementById("loader");
var projects = document.getElementsByClassName("img");
for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", function(e) {
      loader.style.display = "inline-block";
  });
}
