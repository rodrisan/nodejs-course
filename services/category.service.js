const faker = require('faker');

class CategoryService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.categories.push(newCategory);

    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update(id, changes) {
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

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('category not found');
    }
    this.categories.splice(index, 1);

    return {id};
  }
}

module.exports = CategoryService;
