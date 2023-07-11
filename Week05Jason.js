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
        this.selectedFood = null; // work with one piece of food at a time
            }
            
            start() {
            let selection = this.showMeMenu(); // initially, displays the menu using the showMeMenu method
            while (selection != 0) { // as long as the user does not enter 0, then execute the option that was chosen
            switch (selection) {
                    case '1':
                    this.createFood(); // if 1 is chosen, execute the createFood method in this class
                    break;
                    case '2':
                    this.viewFood(); // if 2 is chosen, execute the viewFood method in this class
                    break;
                    case '3':
                    this.deleteFood(); // if 3 is chosen, exceute the deleteFood method in this class
                    break;
                    case '4':
                    this.displayAllYourFoodSelection(); // if 4 is chosen, execute the displayAllYourFoodSelection method in this class
                    break;
                    default:
                        selection = 0; // in a user does not chose an option from above, set the selection to 0 which will execute
                }
                    selection = this.showMeMenu(); //redisplay menu to user after selection
                }
                    alert('Come back to see us!'); // when a user chooses 0, show them a 'Come back to see us' message
            }

        
            showMeMenu() { // This method will display the menu options to the user as display below
                return prompt(`
                0) Exit
                1) Select new food
                2) View your food selection
                3) Remove your food selection
                4) Display all of your food selection
                `);
            }
            showFoodMenu() { // This method will display the Food Menu options and the name of each food. Caution!! This method will work after the user types 1 or more out of the 7 choices of food.
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
            displayAllYourFoodSelection() { // Create a string to hold your food items
                let foodString = "";
                for (let i = 0; i < this.food.length; i++) {
                    foodString += i + ') ' + this.food[i].foodName + '\n';
                }
                alert(foodString);
            }
            createFood() {
                let foodName = prompt('Enter name for new food: '); // Prompt the user for new food
                this.food.push(new Food(foodName)); // adds a name of a food to end of the food array
            }
            viewFood() {
                let index = prompt('Enter the index of the food you wish to view: '); // Prompt the user to enter the index of the food they want to view
                  if (index > -1 && index < this.food.length) { // make sure the number entered is a valid selection
                    this.selectedFood = this.food[index]; // the select food becomes what is in the array index the user selected
                    let description = 'Food Name: ' + this.selectedFood.foodName + '\n'; // sets description of the selected food name followed by a line break
                    description += " " + this.selectedFood.describe() + "\n"; // adds each food to the description and a line break afterwards

                    //build list of selected foods
                    for (let i = 0; i < this.food.length; i++) { // loop for the length of the food array
                        description += i + ") " + this.food[i].describe(); // continues to add to the description of the food array
                    }
                    

                    let selection = this.showFoodMenu(description); // the selection is the index from the food prompted
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
                let index = prompt('Enter the index of the food you wish to delete: '); // set index to equal to what user prompted
                if (index > -1 && index < this.food.length) { // make sure the number entered is a valid selection
                    this.food.splice(index, 1); // using the food array method, remove or splice one element
                 }
             
            } 
        
}
        
let menu = new Menu(); // create an instance of the menu class
menu.start(); // execute the menu object's start method defined in the menu class