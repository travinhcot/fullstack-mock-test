async function getAPI() {
  const response = await fetch("https://countries.dev/region/Asia");
  const data = await response.json();
  return data;
}
