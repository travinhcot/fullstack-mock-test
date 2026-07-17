const tbody = document.getElementById("tbody");
let staffs = [];
async function getAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  return data;
}
async function loadData() {
  staffs = await getAPI();
  render(staffs);
}
async function render(dataList) {
  tbody.innerHTML = "";
  dataList.map(
    (staff) =>
      (tbody.innerHTML += `
    <tr>
        <td>${staff.id}</td>
        <td>${staff.name}</td>
        <td>${staff.email}</td>
        <td>${staff.address.city}</td>
        <td><button class="hover:bg-red-500 hover:text-white-500" onclick="deleteStaff('${staff.name}')">Delete</button></td>
    </tr>
    `),
  );
}

function deleteStaff(name) {
  staffs = staffs.filter((staff) => staff.name !== name);
  render(staffs);
}
loadData();
