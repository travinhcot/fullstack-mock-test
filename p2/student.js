const students = [
  { id: 1, name: "Alice", GPA: 3.2 },
  { id: 2, name: "Bob", GPA: 2.4 },
  { id: 3, name: "Carol", GPA: 1.8 },
  { id: 4, name: "YourRealFirstName", GPA: 3.9 },
];

const table = document.getElementById("student-table");

function gradeValidate(gpa) {
  if (gpa < 2) {
    return "NN";
  } else if (gpa >= 2 && gpa <= 3) {
    return "OK";
  } else {
    return "HD";
  }
}

students.forEach(function (student) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.GPA}</td>
    <td>${gradeValidate(student.GPA)}</td>
  `;
  table.appendChild(row);
});
