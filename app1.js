//variable
const inputText = document.querySelector(".input")

const divto = document.querySelector(".todo")
const btn = document.querySelector(".btn")
//event listener
btn.addEventListener("click", greet)
document.addEventListener("DOMContentLoaded", bring)
//functions
function greet(event) {

    if (inputText.value !== "") {
        //create div
        const newdiv = document.createElement("DIV")
        newdiv.classList.add("todo-div")
        //create li
        const newLi = document.createElement("LI")
        newLi.classList.add("todo-li")
        newLi.innerText = inputText.value

        //create button
        const newbtn = document.createElement("BUTTON");
        newbtn.classList.add("newbtn");

        newbtn.innerText = "Delete";
        newbtn.addEventListener("click", () => {
            remlocal(newbtn.parentElement.children[0].innerText);
            newbtn.parentElement.remove()
        })
        //add items to local storage

        setlocal(inputText.value)

        //apend child
        newdiv.appendChild(newLi)
        newdiv.appendChild(newbtn)
        divto.appendChild(newdiv)
        inputText.value = ""
    }

}
function setlocal(todo) {
    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function remlocal(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    };

    const conindex = todos.indexOf(todo)
    todos.splice(`${conindex}`, 1)
    localStorage.setItem("todos", JSON.stringify(todos));

}
function bring() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach((todo) => {
        const newdiv = document.createElement("DIV")
        newdiv.classList.add("todo-div")
        //create li
        const newLi = document.createElement("LI")
        newLi.classList.add("todo-li")
        newLi.innerText = todo

        //create button
        const newbtn = document.createElement("BUTTON");
        newbtn.classList.add("newbtn");
        
        newbtn.innerText = "Delete";
        newbtn.addEventListener("click", () => {
            remlocal(newbtn.parentElement.children[0].innerText);
            newbtn.parentElement.remove()})
            //apend child
            newdiv.appendChild(newLi)
            newdiv.appendChild(newbtn)
            divto.appendChild(newdiv)
        })}
