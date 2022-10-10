var p_left = document.getElementById("problem-number").value;
var checked = false;
function start() {
    alert("Починаймо!");
    window.open("https://localhost:7228/Problem", "_parent");
}
function check_answer(r) {
    checked = false;
    var num = document.getElementById("answer").value;
    var res = r;

    if (num == res) {
        alert("Вірно");
        checked = true;
    } else {
        alert("Помилка");
        checked = true;
    }

    if (checked == true && p_left > 0) {
        window.open("https://localhost:7228/Problem", "_parent");
    }
}