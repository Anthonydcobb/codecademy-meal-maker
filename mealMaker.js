var menu = {
  _courses: {
    appetizers: [],
    mains: [],
    deserts: [],
  },
  
  get appetizers() {
    return this._courses.appetizers
  },
  
  get mains() {
    return this._courses.mains
  },
  
  get deserts() {
    return this._courses.deserts   
  },
  
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      deserts: this.deserts
    }
  },
  
  set appetizers(app) {
    this._courses.appetizers = app;
  },
  
  set mains(main) {
    this._courses.mains = main;
  },
  
  set deserts(desert) {
    this._courses.desert = desert;
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    };
    
    this.courses[courseName].push(dish)
  },
  
  getRandomDishFromCourse(courseName) {
    var dishes = menu.courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)]
  },
  
  generateRandomMeal() {
    var app = this.getRandomDishFromCourse("appetizers");
    var main = this.getRandomDishFromCourse("mains");
    var desert = this.getRandomDishFromCourse("deserts")
    var totalPrice = app.price + main.price + desert.price;
    return `your meal will include ${app.name} as an appetizer, your main course will be ${main.name}, 
    and for deserts please enjoy our ${desert.name}.  and you best pay us our money, ${totalPrice} dollars, and that does
    not include tip!!!!`
  }  
};

menu.addDishToCourse("appetizers",'salad',56);
menu.addDishToCourse("appetizers",'fries',5);
menu.addDishToCourse("appetizers",'shrimp',8);
menu.addDishToCourse("mains",'chicken',11);
menu.addDishToCourse("mains",'steak',15);
menu.addDishToCourse("deserts",'cookies',5);
menu.addDishToCourse("deserts",'ice cream',9);

menu.generateRandomMeal();
