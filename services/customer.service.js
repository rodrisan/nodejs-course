const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class CustomerService {

  constructor() {}

  async create(data) {
    const newCustomer = models.Customer.create(data);
    return newCustomer;
  }

  async find() {
    const res = await models.Customer.findAll();
    return res;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async findByName(name) {
    return this.customers.find(item => item.name === name);
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const res = await customer.update(changes);
    return res;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
