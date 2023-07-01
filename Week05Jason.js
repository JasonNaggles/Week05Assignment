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
            this.createFood;
            break;
            case '2':
            this.viewFood;
            break;
            case '3':
            this.deleteFood;
            break;
            case '4':
            this.displayFood;
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
        3) Delete your food selection
        4) Display all of your food selection
        `)
    };
}

