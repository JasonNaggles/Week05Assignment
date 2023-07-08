class Customer {
    constructor(customerName) {
        this.customerName = customerName; // customer name
        this.customersOnMenu = []; // array of customers on menu
    }

    addCustomer(customer) {
        if(customer instanceof Customer) { //verify if the customer is a valid instance of the Customer class
            this.customersOnMenu.push(customer); // add a customer to the the array
        } else {
            throw new Error(`This information is not an instance of Customer ${this.customer}`) // show error to the user
        }
    }
    decrsibe() {
        return ` ${this.customerName} has ${this.customersOnMenu.length} customers`; // this method provides the Customer description
    }
}

class Food {
    constructor(foodName, foodPrice) {
        this.foodName = foodName; // food name
        this.foodPrice = foodPrice; //price of each food item
        
    }

    describe() {
        return ` ${this.foodName} is ${this.foodPrice} \n`; 
    }

}
    

class Menu {
    constructor() { 
        this.food = []; //food array
        this.selectedFood = null; 
            }

            start() {
            let selection = this.showMeMenu();
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
                    selection = this.showMeMenu();
                }
                    alert('Come back to see us!');
            }

        
            showMeMenu() {
                return prompt(`
                0) Exit
                1) Select new food
                2) View your food selection
                3) Remove your food selection
                4) Display all of your food selection
                `);
            }
            showFoodMenu(foodInfo) {
                return prompt(`
                0) Go Back
                1) White Rice
                2) Plain Fried Rice
                3) Shrimp Fried Rice
                4) Pork Fried Rice
                5) Beef Fried Rice
                6) Kung Pao Chicken
                7) General Tso Chicken
                --------------------------
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
                let name = prompt('Enter name for new food: ');
                this.food.push(new Food(name));
            }
            viewFood() {
                let index = ('Enter the index of the food you wish to view: '); 
                  if (index > -1 && index < this.food.length) {
                    this.selectedFood = this.food.length[index];
                    let description = 'Food Name: ' + this.selectedFood.name + '\n';
        
                    
                    
                }
            }   
            deleteFood() {
                let index = prompt('Enter the index of the food you wish to delete: ');
                if (index > -1 && index < this.selectedFood.length) {
                    this.selectedFood.splice(index, 1);
                 }
             
            } 
        
}
        
        let menu = new Menu();
        menu.start();