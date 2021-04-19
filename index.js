const ulElement = document.querySelector("#tasks ul")
const tasks = []

const removeTask = (index) => {
    tasks.splice(index, 1)
    const taskElement = document.querySelector(`ul li#item-${index}`)
    ulElement.removeChild(taskElement)
}

const addTask = (text) => {
   const total = tasks.push(text)
   const index = total - 1

   const taskElement = document.createElement("li")
   const textElement = document.createElement("span")
   const btnElement = document.createElement("button")

   taskElement.setAttribute("id", `item-${index}`)

   btnElement.onclick = () =>{
       removeTask(index)
       console.log(tasks)
   }

   taskElement.appendChild(textElement)
   taskElement.appendChild(btnElement)

   textElement.innerHTML= text
   btnElement.innerHTML = "Remover"

   ulElement.appendChild(taskElement)


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
