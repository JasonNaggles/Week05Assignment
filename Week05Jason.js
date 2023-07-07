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
        return `${this.name} has these ${this.customers.length} customers.`;
    }
}

class Menu {
    constructor() {
        this.food = ['White Rice, Plain Fried Rice, Shrimp Fried Rice, Pork Fried Rice, Beef Fried Rice, Kung Pro Chicken, General Tso Chicken'];
        this.selectedFood = null;
        
    }

    start() {
        let selection = this.showMeMenuOptions();
        while (selection != 0) {
        switch (selection) {
            case '1':
            this.createFood();
            break;
            case '2':
            this.deleteFood();
            break;
            case '3':
            this.displayAllYourFoodSelection();
            break;
            default:
                selection = 0; 
        }
            selection = this.showMeMenuOptions();
        }
            alert('Come back to see us!');
    }
    showMeMenuOptions() {
        return prompt(`
        0) Exit
        1) Select new food
        2) Remove your food selection
        3) Display all of your food selection
        `);
    }
    showFoodMenuOptions(foodInfo) {
        return prompt(`
        1) White Rice
        2) Plain Fried Rice
        3) Shrimp Fried Rice
        4) Pork Fried Rice
        5) Beef Fried Rice
        6) Kung Pao Chicken
        7) General Tso Chicken
        ${foodInfo}
        `);
    }
    displayAllYourFoodSelection() {
        let foodString = '';
        for (let i = 0; i < this.food.length; i++) {
            foodString += i + ') ' + this.food[i].name + '\n';
        }
        alert(foodString);
    }
    createFood() {
        let name = prompt('Enter name for new food:');
        this.food.push(new Food(name));
    }    
    deleteFood() {
        let index = prompt('Enter the index of the food you wish to delete:');
        if (index > -1 && index < this.selectedFood.length) {
            this.selectedFood.splice(index, 1);
         } else { 
            return menu;
        }
     
    } 

}
let menu = new Menu();
menu.start();