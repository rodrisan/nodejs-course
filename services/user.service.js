const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class UserService {

  constructor(){
    this.users = [];
    this.generate();
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
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async findByName(name) {
    return this.users.find(item => item.name === name);
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
