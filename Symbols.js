const id = Symbol("id");
const user = {
  name: "Harsha",
  [id]: 105
};

console.log(user[id]);
