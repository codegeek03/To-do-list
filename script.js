
var add = document.getElementById("add");
var taskList = document.getElementById("task");
var input = document.getElementById("txt");

add.addEventListener("click", function () {
    var listItem = document.createElement("li");
    listItem.innerHTML = input.value + '<button  type="button" class="btn-close" aria-label="Close"></button>';

    var deleteButton = listItem.querySelector(".btn-close");

    deleteButton.addEventListener("click", function () {
        var listItemToDelete = this.parentElement;
        listItemToDelete.innerHTML = `<strike>${listItemToDelete.textContent}</strike>`;
    });

    taskList.appendChild(listItem);
    input.value = "";
    
    var done=document.getElementById("done");
    done.addEventListener("click",function(){
        taskList.innerHTML="";
    })
    var dark=document.getElementById("darkModeToggle")
    dark.addEventListener("click",function(){})
});

