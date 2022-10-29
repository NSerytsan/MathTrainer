const radios = document.querySelectorAll('input[name="operations"]');
const btn = document.getElementById("start-btn");


btn.addEventListener('click', () => {
    let selected;
    for (const radioButton of radios) {
        if (radioButton.checked) {
            selected = radioButton.value;
            break;
        }
    }

    localStorage.oper = selected;
    parse_opers();
});

function parse_opers() {
    if (localStorage.getItem("oper") == "+") {
        start();
    } else if (localStorage.getItem("oper") == "-") {
        start_minus();
    }
}

function start_minus() {
    var p_left = parseInt(document.getElementById("problem-number").value);
    var arg = parseInt(document.getElementById("argument").value);

    if (isNaN(p_left)) {
        alert("Введіть кількість прикладів");
    }
    else if (!p_left) {
        alert("Введіть кількість прикладів");
    } else if (isNaN(arg)) {
        alert("Введіть число");
    }
    else if (!arg) {
        alert("Введіть число");
    }
    else if (arg < 10) {
        alert("Число має бути від 10 до 20");
    }
    else if (arg > 20) {
        alert("Число має бути від 10 до 20");
    }
    else {
        localStorage.pr_left = p_left;
        localStorage.first_value = arg;
        //alert("Починаймо!");
        window.open("/ProblemMinus", "_top");
        start_timer();
    }
}

function check_answer_m() {
    var ares = document.getElementById("answer").value;
    var first = parseInt(document.getElementById("first-arg").innerHTML);
    var second = parseInt(document.getElementById("second-arg").innerHTML);
    var res = first - second;

    if (isNaN(ares)) {
        alert("Введіть відповідь");
    }
    else if (!ares) {
        alert("Введіть відповідь");
    }
    else {
        var statement;

        if (ares == res) {
            statement = "Вірно";
        }
        else {
            statement = "Помилка. Правильна відповідь " + res;
        }

        document.getElementById("answer").disabled = "disabled";
        document.getElementById("res_statement").innerHTML = statement;
        document.getElementById("btn-check").style.visibility = "hidden";
        document.getElementById("btn-next").style.display = "block";
    }
}

function next_problem_m() {
    if (pr_count() > 0) {
        window.open("/ProblemMinus", "_self");
    } else {
        alert("Kінець");
        document.getElementById("btn-next").style.display = "none";
        document.getElementById("btn-home").style.display = "block";
        localStorage.clear()
    }
}