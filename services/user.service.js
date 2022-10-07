const faker = require('faker');

class UserService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        lastname: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  findByName(name) {
    return this.users.find(item => item.name === name);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UserService;
