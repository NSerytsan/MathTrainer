var input = document.getElementById("answer");
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("b-check").click();
    }
}); 

function go_home() {
    window.open("/Index", "_self")
}