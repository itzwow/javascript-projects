
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input")
// console.log(todoInput)
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
        
`

newLi.innerHTML = newLiInnerHtml;
// console.log(newLi)
todoList.append(newLi)

    todoInput.value = ""
    

})

todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    //checking done
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something");
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("Great");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }

})