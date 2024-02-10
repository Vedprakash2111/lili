//to add navber in every pages

document.addEventListener("DOMContentLoaded", function() {
    fetch("navber.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-placeholder").innerHTML = html;
        });
});
