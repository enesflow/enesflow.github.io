const loader = document.getElementById("loader");

var projects = document.getElementsByClassName("project");
for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", function(e) {
      loader.style.display = "inline-block";
  });
}
