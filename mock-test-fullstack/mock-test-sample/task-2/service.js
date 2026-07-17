async function getAPI() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log("Data: ", data.users);
  return data.users;
}
getAPI();
