const nameEl = document.getElementById("name");
const input = document.getElementById("firstName");
const button = document.getElementById("submit-btn");

button.addEventListener("click", async function () {
  const nameValue = input.value.trim();
  if (nameValue === "") {
    nameEl.textContent = "Please enter a name";
    nameEl.className = "";
    return;
  }

  try {
    const response = await fetch(
      `https://api.genderize.io?name=${encodeURIComponent(nameValue)}`,
    );
    const data = await response.json();
    nameEl.textContent = data.gender
      ? `Gender: ${data.gender}`
      : "Gender not found";
    if (data.gender === "male") {
      nameEl.className = "male";
    } else if (data.gender === "female") {
      nameEl.className = "female";
    } else {
      nameEl.className = "";
    }
  } catch (error) {
    nameEl.textContent = "Error fetching data";
    nameEl.className = "";
  }
});
