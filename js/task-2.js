console.log("<<<<<<<<<<<<<<<<TASK 2>>>>>>>>>>>>>>>");

class Storage {
  #items;
  constructor(nameProduct) {
    this.#items = nameProduct;
  }

  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const newArray = this.#items.filter((element) => element !== itemToRemove);
    this.#items = newArray;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log("");
console.log("");
console.log("");
