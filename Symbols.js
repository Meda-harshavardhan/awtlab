const id = Symbol("id");
const user = {
  name: "Harsha",
  [id]: 101
};

console.log(user[id]);
