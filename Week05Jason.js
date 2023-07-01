class Customer {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    describe() {
        return `${this.name} has this ${this.phoneNumber}.`;
    }
}