import holderDom from "./holdersForDom";
import databaseHolder from "./database";

function create(arg) {
  arg.forEach((project) => {
    const projectDiv = document.createElement("div");
    // přidání ID k tomuhle div z database - credit stackoverflow
    projectDiv.dataset.projectid = project.id;
    const image1 = document.createElement("img");
    image1.src = "images/editPic.jpg";
    image1.dataset.edit = project.id;
    const image2 = document.createElement("img");
    image2.src = "images/deletePic.jpg";
    image2.dataset.delete = project.id;
    image2.classList.add("delBut");
    const title = document.createElement("p");
    title.classList.add("titleOfProject");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    holderDom.projectContainer.appendChild(projectDiv);
    projectDiv.appendChild(image1);
    projectDiv.appendChild(image2);
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);

    if (projectDiv.dataset.projectid === databaseHolder.selectedProjectID) {
      projectDiv.classList.add("selectedProject");
    }
  });
}

//database [{xxx, todo[{}]}]
// arg = database[i].todo ??
//i = index in database - get it from data of selected project div
function createToDo(idk) {
  if (idk === undefined) {
    return;
  } else {
    idk.forEach((todo) => {
      const toDoDiv = document.createElement("div");
      const deleteImage = document.createElement("img");
      const editImage = document.createElement("img");
      const toDoTitle = document.createElement("p");
      const toDoDate = document.createElement("p");
      const toDoPriority = document.createElement("p");
      const toDoCheckList = document.createElement("p");
      const toDoDescription = document.createElement("p");
      const linebreak = document.createElement("br");

      toDoDiv.dataset.todoid = todo.id;
      toDoDiv.id = "item";
      deleteImage.src = "images/deletePic.jpg";
      deleteImage.dataset.tododelete = todo.id;
      editImage.src = "images/editPic.jpg";
      editImage.dataset.todoedit = todo.id;
      toDoTitle.textContent = todo.title;
      toDoTitle.classList.add("toDoTitle");
      toDoDate.textContent = todo.date;
      toDoPriority.textContent = todo.priority;
      toDoCheckList.textContent = todo.status;
      toDoDescription.textContent = todo.description;

      holderDom.toDoItemsWrap.appendChild(toDoDiv);
      toDoDiv.appendChild(deleteImage);
      toDoDiv.appendChild(editImage);
      toDoDiv.appendChild(toDoTitle);
      toDoDiv.appendChild(toDoDate);
      toDoDiv.appendChild(toDoPriority);
      toDoDiv.appendChild(toDoCheckList);
      toDoDiv.appendChild(linebreak);
      toDoDiv.appendChild(toDoDescription);
    });
  }
}

const createHolder = { create, createToDo };
export default createHolder;
