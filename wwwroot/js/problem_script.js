
var checked = false;
function start() {
    var p_left = document.getElementById("problem-number").value;
    if (isNaN(p_left)) {
        alert("Введіть кількість прикладів");
    }
    else if (!p_left) {
        alert("Введіть кількість прикладів");
    }
    else {
        alert("Починаймо!");
        window.open("/Problem", "_blank");
    }
    
}
function check_answer(r) {
    
    var num = document.getElementById("answer").value;

    if (isNaN(num)) {
        alert("Введіть відповідь");
    }
    else if (!num) {
        alert("Введіть відповідь");
    }
    else
    {   
        var res = r;
        var statement;

        if (num == res) {
            statement = "Вірно";
        }
        else {
            statement = "Помилка. Правильна відповідь " + res;
        }

        document.getElementById("res_statement").innerHTML = statement;
        document.getElementById("btn-check").style.visibility = "hidden";
        document.getElementById("btn-next").style.visibility = ""; 
    } 
}
function next_problem() {
    alert("Далі" + p_left);
}