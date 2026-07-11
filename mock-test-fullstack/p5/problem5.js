const form = document.getElementById("form");
const input = document.getElementById('computer-name');
const type = document.getElementById('computer-type');
const list= document.getElementById('computer-list')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = input.value.trim();
    const compType = type.value;

    if(name === "" || compType === ""){
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${name} for ${compType}`

    list.appendChild(listItem);

    form.reset();
    input.focus();
})
