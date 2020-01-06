window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".container").addEventListener("touched", menuOpenClose);
    document.querySelector(".container").addEventListener("click", menuOpenClose);
}

/* skift mellem at tilføje og fjerne "responsive" class til ''mylinks'' når brugeren clicker på ironet */
function myFunction() {
    var x = document.getElementById("mylinks");
    if (x.className === "links") {
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}
