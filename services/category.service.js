const faker = require('faker');

const pool = require('../libs/postgres.pool');

class CategoryService {

  constructor(){
    this.categories = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.categories.push(newCategory);

    return newCategory;
  }

  async find() {
    const query = 'select * from users';
    const res = await this.pool.query(query);
    return res.rows;
  }

  async findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('category not found');
    }
    this.categories.splice(index, 1);

    return {id};
  }
}

module.exports = CategoryService;
