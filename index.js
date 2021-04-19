const ulElement = document.querySelector("#tasks ul")
const tasks = []

const addTask = (text) => {
   tasks.push(text)

   const taskElement = document.createElement("li")
   const textElement = document.createElement("span")
   const btnElement = document.createElement("button")

   taskElement.appendChild(textElement)
   taskElement.appendChild(btnElement)

   textElement.innerHTML= text
   btnElement.innerHTML = "Remover"

   ulElement.appendChild(taskElement)


}

const removeTask = (index) => {
    tasks.splice(index, 1)
}

const btnAdd = document.querySelector("#form button")
const inputTarefa = document.querySelector("#form input")

btnAdd.onclick = () =>{
    if(inputTarefa.value){
        addTask(inputTarefa.value)
        inputTarefa.value = ""
        console.log(tasks)
    }
}
