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

}


