const searchbtn = document.getElementById("search-btn");
const input = document.getElementById("user-input");
const table = document.getElementById("table-body");
let staffs = [];
async function loadData() {
  staffs = await getAPI();
  render(staffs);
}
async function render(dataList) {
  table.innerHTML = "";
  dataList.map(
    (staff) =>
      (table.innerHTML += `<tr>
      <td>${staff.firstName}</td>
        <td>${staff.lastName}</td>
        <td>${staff.age}</td>
      <td>${staff.address.city}</td>
      </tr>`),
  );
}
async function searchByName(searchTerm) {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${encodeURIComponent(searchTerm)}`,
  );
  const data = await response.json();
  return data.users;
}
async function searchInBackend() {
  const searchedTerm = input.value.trim();

  const matchedStaff = await searchByName(searchedTerm);
  render(matchedStaff);
}
async function searchInFrontend() {
  const userInput = input.value.trim();
  console.log(userInput);
  const matchedStaff = staffs.filter((staff) =>
    `${staff.firstName} ${staff.lastName}`.includes(userInput),
  );
  render(matchedStaff);
}
loadData();
