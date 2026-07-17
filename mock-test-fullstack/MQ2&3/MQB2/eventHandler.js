
let students = [
  { id: 1, name: "Long", gpa: 3.2 },
  { id: 2, name: "James", gpa: 2.4},
  { id: 3, name: "Hong", gpa: 1.8},
  { id: 4, name: "Tri", gpa: 3.9},
]

const tableBody = document.getElementById("tableBody")

document.addEventListener("DOMContentLoaded", async function () {

  students.forEach(student =>
    tableBody.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.gpa}</td>
        <td>${student.gpa >= 3
                ? "HD"
                : student.gpa >= 2
                  ? "OK"
                  : "NN"
              }
        </td>
      </tr>
    `
  )
})
