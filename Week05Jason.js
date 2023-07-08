class Food {
    constructor(foodName) {
        this.foodName = foodName; // food name
        
        
    }

    describe() {
        return ` ${this.foodName}`; 
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
            showFoodMenu() {
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
                `);
            }
            displayAllYourFoodSelection() {
                let foodString = "";
                for (let i = 0; i < this.food.length; i++) {
                    foodString += i + ') ' + this.food[i].foodName + '\n';
                }
                alert(foodString);
            }
            createFood() {
                let foodName = prompt('Enter name for new food: ');
                this.food.push(new Food(foodName));
            }
            viewFood() {
                let index = prompt('Enter the index of the food you wish to view: '); 
                  if (index > -1 && index < this.food.length) {
                    this.selectedFood = this.food[index];
                    let description = 'Food Name: ' + this.selectedFood.foodName + '\n';
                    description += " " + this.selectedFood.describe() + "\n";

                    for (let i = 0; i < this.food.length; i++) {
                        description += i + ") " + this.food[i].describe();
                    }
        
                    let selection = this.showFoodMenu(description);
                    switch (selection) {
                        case "1":
                        break;
                        case "2":
                        break;
                        case "3":
                        break;
                        case "4":
                        break;
                        case "5":
                        break;
                        case "6":
                        break;
                        case "7":
                        break;
                        case "8":
                        
                    }   
                }
            }   
            deleteFood() {
                let index = prompt('Enter the index of the food you wish to delete: ');
                if (index > -1 && index < this.food.length) {
                    this.food.splice(index, 1);
                 }
             
            } 
        
}
        
let menu = new Menu();
menu.start()