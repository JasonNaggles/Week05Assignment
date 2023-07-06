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
        return `${this.name} has these ${this.customers.length} customers.`;
    }
}

class Menu {
    constructor() {
        this.food = [];
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
            this.viewFood();
            break;
            case '3':
            this.deleteFood();
            break;
            case '4':
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
        2) View your food selection
        3) Remove your food selection
        4) Display all of your food selection
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
    viewFood() {
        let index = prompt('Enter the index of the food you wish to view:');
        if (index > -1 && index < this.food.length) {
            this.selectedFood = this.food[index];
            let description = 'Food Name: ' + this.selectedFood.name + '\n';

            for (let i = 0; i < this.selectedFood.customers.length; i++) {
                description += i + ') ' + this.selectedFood.customers[i].name + ' - ' + this.selectedFood.customers[i].phoneNumber + '\n';
            }
            let selection = this.showCustomersMenuOptions(description);
            switch (selection) {
                case '1':
                this.createCustomer();
                break;
                case '2':
                this.deleteCustomer();
            }
        }
    
    }
    deleteFood() {
        let index = prompt('Enter the index of the food you wish to delete:');
        if (index > -1 && index < this.selectedFood.length) {
            this.selectedFood.splice(index, 1);
        }
    }
    
 }
    


let menu = new Menu();
menu.start();