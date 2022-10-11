let i = 1;
localStorage.setItem("_i", i);

function start() {
    var p_left = document.getElementById("problem-number").value;
    var arg = document.getElementById("argument").value;

    //var in_order = document.getElementById("in-order").value;
    //if (in_order == true) {
    //    alert("checked");
    //} else {

    //}

    if (isNaN(p_left)) {
        alert("Введіть кількість прикладів");
    }
    else if (!p_left) {
        alert("Введіть кількість прикладів");
    }
    else if (isNaN(arg)) {
        alert("Введіть число");
    }
    else if (!arg) {
        alert("Введіть число");
    }
    else {
        localStorage.setItem("first_value", arg);
        alert("Починаймо!");
        window.open("/Problem", "_blank");
        p_left = p_left - 1;
    }
}

function check_answer() {

    var ares = document.getElementById("answer").value;
    var first = document.getElementById("first-arg").value;
    var second = document.getElementById("second-arg").value;
    var res = first + second;

    if (isNaN(ares)) {
        alert("Введіть відповідь");
    }
    else if (!ares) {
        alert("Введіть відповідь");
    }
    else
    {   
        var statement;

        if (ares == res) {
            statement = "Вірно";
        }
        else {
            statement = "Помилка. Правильна відповідь " + first;
        }

        document.getElementById("res_statement").innerHTML = statement;
        document.getElementById("btn-check").style.visibility = "hidden";
        document.getElementById("btn-next").style.visibility = "visible";
    } 
}

function next_problem() {
    alert("Далі");
    i = 2;
    localStorage.setItem("_i", 2);
    window.open("/Problem", "_blank");
    
}

function get_arguments() {
    alert("get_argumen func");
    document.getElementById("first-arg").innerHTML = localStorage.getItem("first_value");
    //document.getElementById("second-arg").innerHTML = localStorage.getItem("_i");
    document.getElementById("second-arg").innerHTML = 1;
}