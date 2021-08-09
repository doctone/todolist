let completedTasks = []
let tasks = []
function generateLowItem() {
    const value = document.getElementById("item").value;
    if (value == '') {
        return
    }
    document.getElementById("low").innerHTML += `<button class="btn btn-success task" id="${value}" onclick="removeTodo(this.id)">${value}</button>`
    document.getElementById("item").value = ''
}
function generateHighItem() {
    const value = document.getElementById("item").value;
    if (value == '') {
        return
    }
    document.getElementById("high").innerHTML += `<button class="btn btn-danger task" id="${value}" onclick="removeTodo(this.id)">${value}</button>`
    document.getElementById("item").value = ''
}
function removeTodo(event) {
    if (completedTasks.includes(event)) {
    document.getElementById(event).remove()
     }
     else {
        completedTasks.push(event);
        document.getElementById(event).classList.add('clicked')
        document.getElementById(event).innerHTML = `<strike>${document.getElementById(event).innerHTML}</strike>`

    }
}

function clearItems() {
    document.getElementById("high").innerHTML = ''
    document.getElementById("low").innerHTML = ''
    document.getElementById("completed").innerHTML = ''
    document.getElementById("completed").classList.remove('border1');

}

function showCompletedTasks() {
    let element = document.getElementById("completed")
    element.innerHTML = '<strong>Completed Tasks</strong>'
    for (let i = 0; i < completedTasks.length; i++) {
        document.getElementById("completed").innerHTML += completedTasks[i] + "<br>"
    }
    element.classList.add('border1')
}