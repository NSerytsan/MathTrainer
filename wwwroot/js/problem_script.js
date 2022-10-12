var cb = document.querySelector('#in-order');
localStorage.cb = cb.checked;

function start() {
    var p_left = parseInt(document.getElementById("problem-number").value);
    var arg = document.getElementById("argument").value;
    sessionStorage.pr_left = p_left;


    if (!cb.checked) {
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
        } else {
            localStorage.first_value = arg;
            alert("Починаймо!");
            window.open("/Problem", "_blank");
        }
    }
    else if (isNaN(arg)) {
        alert("Введіть число");
    }
    else if (!arg) {
        alert("Введіть число");
    }
    else {
        alert("Починаймо по порядку!");
        window.open("/Problem", "_blank");
        //p_left = p_left - 1;
    }
}

function check_answer() {

    var ares = document.getElementById("answer").value;
    var first = parseInt(document.getElementById("first-arg").innerHTML);
    var second = parseInt(document.getElementById("second-arg").innerHTML);
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
            statement = "Помилка. Правильна відповідь " + res;
        }

        document.getElementById("res_statement").innerHTML = statement;
        document.getElementById("btn-check").style.visibility = "hidden";
        document.getElementById("btn-next").style.display = "block";
    } 
}

function next_problem() {
    if (localStorage.getItem("cb") == "false") {
        if (Number(sessionStorage.getItem("i")) < 10) {
            alert("Далі false");
            window.close();
            window.open("/Problem", "_blank");
        } else {
            alert("Кінець tf");
        }
    } else if (localStorage.getItem("cb") == "true") {
        if (Number(sessionStorage.getItem("pr_left")) > 0) {
            alert("Далі true");
            window.close();
            window.open("/Problem", "_blank");
        } else {
            alert("Kінець t");
        }
    }
    
    
}

function get_arguments() {  
    document.getElementById("first-arg").innerHTML = localStorage.getItem("first_value");
    if (localStorage.getItem("cb") == "false") {
        second_value();
    }
    else if (localStorage.getItem("cb") == "true") {
        document.getElementById("second-arg").innerHTML = get_random_arg();
    }
}

function second_value() {
    if (sessionStorage.getItem("i") == null)
        sessionStorage.setItem("i", "0");

    let counter = Number(sessionStorage.getItem("i"))
    sessionStorage.setItem("i", counter + 1);
    document.getElementById("second-arg").innerHTML = sessionStorage.getItem("i");
}

function order_box() {
    if (cb.checked == true) {
        document.getElementById("p-num").style.display = "none";
    } else if (cb.checked == false) {
        document.getElementById("p-num").style.display = "block";
    }
}

function get_random_arg() {
    min = Math.ceil(1);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min) + min);
}

function pr_count() {
    if (sessionStorage.getItem("pr_left") == null)
        sessionStorage.setItem("pr_left", "0");

    let pr_counter = Number(sessionStorage.getItem("pr_left"))
    sessionStorage.setItem("pr_left", pr_counter - 1);
}