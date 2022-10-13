const faker = require('faker');

const pool = require('../libs/postgres.pool');
class UserService {

  constructor(){
    this.users = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async generate() {
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

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.users.push(newUser);

    return newUser;
  }

  async find() {
    const query = 'select * from tasks';
    const res = await this.pool.query(query);
    return res.rows;
  }

  async findOne(id) {
    return this.users.find(item => item.id === id);
  }

  async findByName(name) {
    return this.users.find(item => item.name === name);
  }

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('user not found');
    }
    this.users.splice(index, 1);

    return {id};
  }
}

module.exports = UserService;
