class Person {
    constructor(name, surname, houseAddress, houseValue) {
        this.name = name;
        this.surname = surname;
        this.houseAddress = houseAddress;
        this.houseValue = houseValue;
        this.combo = `${this.name} ${this.surname}`;
    }

    toString() {
        return `Your name is ${this.combo}, Address is ${this.houseAddress}, The Value of the property is ${this.houseValue}`;
    }
}

// Initial list of people
const people = [
    new Person("Ebenca", "Mohlala", "1238 BLOCK W", "R640000"),
    new Person("Thato", "Mahlangu", "9812 Block R", "R867000"),
    new Person("Jabu", "Manduza", "84900 Block T", "R5790000"),
    new Person("Katarina", "Lummba", "21820 Block U", "R6000000")
];

// Function to add a new person
function addNewPerson() {
    let addNew = prompt("Would you like to add a new person? (yes/no)").toLowerCase();
    
    if (addNew === "yes") {
        let name = prompt("Enter the first name: ");
        let surname = prompt("Enter the surname: ");
        let address = prompt("Enter the house address: ");
        let value = prompt("Enter the house value: ");
        
        let newPerson = new Person(name, surname, address, value);
        people.push(newPerson);
        alert("New person added.");
    }
}

// Function to search for a person by family name
function searchPersonBySurname() {
    let userSurname = prompt("Can we have your family name?");
    
    let matchingPerson = people.find(person => person.surname.toLowerCase() === userSurname.toLowerCase());
    
    if (matchingPerson) {
        alert(matchingPerson.toString());
    } else {
        alert("No match found.");
    }
}

// Run functions
addNewPerson();
searchPersonBySurname();
