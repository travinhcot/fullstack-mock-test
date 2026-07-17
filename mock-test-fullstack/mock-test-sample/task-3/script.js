let countries = [];
const tbody = document.getElementById("table-body");
document.addEventListener("DOMContentLoaded", async function () {
  countries = await getAPI();

  countries.forEach(
    (country) =>
      (tbody.innerHTML += `
        <tr>
    <td>${country.name}</td>
      <td><img src="${country.flags.svg}" width="100px"/></td>
      <td>${country.capital}</td>
    <td>${country.population.toLocaleString("vn-VI")}</td>
    </tr>
        `),
  );
});
