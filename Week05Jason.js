const readline = require('readline');

class Customer {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  describe() {
    return `${this.name} has this ${this.phoneNumber}.`;
  }
}

class Food {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addFood(customer) {
    if (customer instanceof Customer) {
      this.customers.push(customer);
    } else {
      throw new Error(`You can only add an instance of Customer. Argument is not a customer: ${customer}`);
    }
  }

  describe() {
    return `${this.name} has ${this.customers.length} customers.`;
  }
}

class Menu {
  constructor() {
    this.food = [];
    this.selectedFood = null;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start() {
    this.showMeMenuOptions();
  }

  showMeMenuOptions() {
    this.rl.question(
      `
      0) Exit
      1) Select new food
      2) View your food selection
      3) Remove your food selection
      4) Display all of your food selection
      `,
      (selection) => {
        switch (selection.trim()) {
          case '0':
            this.rl.close();
            console.log('Come back to see us!');
            break;
          case '1':
            this.createFood();
            break;
          case '2':
            this.viewFood();
            break;
          case '3':
            this.deleteFood();
            break;
          case '4':
            this.displayAllYourFoodSelection();
            break;
          default:
            this.showMeMenuOptions();
            break;
        }
      }
    );
  }

  showFoodMenuOptions(foodInfo) {
    this.rl.question(
      `
      1) White Rice
      2) Plain Fried Rice
      3) Shrimp Fried Rice
      4) Pork Fried Rice
      5) Beef Fried Rice
      6) Kung Pao Chicken
      7) General Tso Chicken
      ${foodInfo}
      `,
      (selection) => {
        // Handle the user's food selection
      }
    );
  }

  displayAllYourFoodSelection() {
    let foodString = '';
    for (let i = 0; i < this.food.length; i++) {
      foodString += i + ') ' + this.food[i].name + '\n';
    }
    console.log(foodString);
    this.showMeMenuOptions();
  }

  createFood() {
    this.rl.question('Enter name for new food: ', (name) => {
      this.food.push(new Food(name));
      this.showMeMenuOptions();
    });
  }

  viewFood() {
    this.rl.question('Enter the index of the food you wish to view: ', (index) => {
      index = parseInt(index);
      if (index > -1 && index < this.food.length) {
        this.selectedFood = this.food[index];
        let description = 'Food Name: ' + this.selectedFood.name + '\n';

        for (let i = 0; i < this.selectedFood.customers.length; i++) {
          description += i + ') ' + this.selectedFood.customers[i].name + ' - ' + this.selectedFood.customers[i].phoneNumber + '\n';
        }

        console.log(description);
        // Continue with menu options for viewing food
      } else {
        console.log('Invalid index');
        this.showMeMenuOptions();
      }
    });
  }

  deleteFood() {
    this.rl.question('Enter the index of the food you want to delete: ', (index) => {
      index = parseInt(index);
      if (index > -1 && index < this.food.length) {
        this.food.splice(index, 1);
        this.showMeMenuOptions();
      } else {
        console.log('Invalid index');
        this.showMeMenuOptions();
      }
    });
  }
}

let menu = new Menu();
menu.start();
