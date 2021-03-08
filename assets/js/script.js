var tarefa = document.querySelector("#todo");
var lista = document.querySelector("#list");


function add() {
    lista.innerHTML += "<li>" + tarefa.value + "<button onclick='done(this)'>Done</buttton> <button onclick='delSelf(this)'>X</buttton>";  
    
}
function del() {
    tarefa.value = "";
}

function addK(k) {
    console.log(tarefa.value);
    if (k.keyCode === 13 && tarefa.value !== "") {
        add();
    } 
}

    

function done(x) {
    x.parentElement.style.textDecoration = "line-through";
}

function delSelf(x) {
    x.parentElement.remove();
}