const deleteBtn = document.getElementById("delete-btn");
const average = document.getElementById("average-score");
const addBtn = document.getElementById("add-btn");
const table = document.getElementById("table");
const body = document.getElementById("table-body");
const scoreInput = document.getElementById('courseScore');
const nameInput = document.getElementById("courseName");
const form = document.getElementById('form')

const courses = [{
  name: "Full Stack Development",
  score: 3
},
{
  name: "Java Programming Studio",
  score: 2
},{
  name: "Web Programming Studio",
  score: 3
},
{
  name: "Further Programming",
  score: 4
},
]


function addCourse() {
  const courseName = nameInput.value;
  const courseScore = Number(scoreInput.value);

  courses.push({
    name: courseName,
    score: courseScore
  });
  displayTable();
  
  form.reset();
  nameInput.focus();
}

function calculateAverage(){
  if(courses.length === 0){
    return 0;
  }
  const total = courses.reduce(function(total, course){
    return total + course.score;
  },0);
  return total / courses.length;
}

function displayTable(){
  table.innerHTML = "";

  courses.forEach(function(course,index){
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.score}</td>
                <td> <button type="button" class="delete-btn" data-index=${index}>Delete</button></td>
        `;
        table.appendChild(row);
        
  })
        const averageScore = calculateAverage();
        average.textContent = `Average Score: ${averageScore.toFixed(2)}`
}
form.addEventListener("submit", function(e){
  e.preventDefault();
  addCourse();
})

table.addEventListener("click", function(e){
  if(e.target.classList.contains("delete-btn")){
    const index = Number(e.target.dataset.index);
      courses.splice(index,1);
      displayTable();
  }
})
displayTable();
