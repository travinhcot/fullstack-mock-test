const deleteBtn = document.getElementById("delete-btn");
const average = document.getElementById("average-score");
const addBtn = document.getElementById("add-btn");
const table = document.getElementById("table");
function addCourse() {
  let name = document.getElementById("courseName").value;
  let score = document.getElementById("courseScore").value;

  const tr = document.createElement("tr");
  const newScore = document.createElement("th");
  const newName = document.createElement("th");
  const newDelete = document.createElement("th");

  const deleteBtn = document.createElement("button");

  deleteBtn.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });
  newScore.innerHTML = score;
  newName.innerHTML = name;
  deleteBtn.innerHTML = "Delete";

  newDelete.append(deleteBtn);
  tr.append(newName);
  tr.append(newScore);
  tr.append(newDelete);

  table.append(tr);
}
