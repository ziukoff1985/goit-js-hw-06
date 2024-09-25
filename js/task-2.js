'use strict';

class Storage {
  #items;

  constructor(item) {
    this.#items = item;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(element => element !== itemToRemove);
  }

  // АЛЬТЕРНАТИВНИЙ ВАРІАНТ через метод splice()

  // removeItem(itemToRemove) {
  //   const index = this.#items.indexOf(itemToRemove);
  //   if (index !== -1) {
  //     this.#items.splice(index, 1);
  //   }
  // }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log(
  '======================================================================'
);
