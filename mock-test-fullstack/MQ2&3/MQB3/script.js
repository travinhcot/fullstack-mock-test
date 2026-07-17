
let courses = [
  { name: "Full Stack Development", score: 2 },
  { name: "Algorithms", score: 3 },
  { name: "Database Applications", score: 4 },
  { name: "Tri", score: 3.9 },
]

const tableBody = document.getElementById("tableBody")

document.addEventListener("DOMContentLoaded", async function () {

  renderCourses()
})

function deleteCourse(courseName) {
  courses = courses.filter(course => 
    course.name !== courseName
  )
  renderCourses()
}

document.getElementById("courseForm").addEventListener("submit", function (event) {
  event.preventDefault()

  const courseName = document.getElementById("courseNameInput").value
  const courseScore = document.getElementById("courseScoreInput").value

  courses.push({
    name: courseName,
    score: courseScore
  })

  renderCourses()
})

function renderCourses() {
  const courseTable = document.getElementById("tableBody")

  tableBody.innerHTML = ""

  courses.forEach(course =>
    
    tableBody.innerHTML += `
      <tr>
        <td>${course.name}</td>
        <td>${course.score}</td>
        <td>
          <button onClick="deleteCourse('${course.name}')">
            Delete
          </button>
        </td>
      </tr>
    `
  )
}