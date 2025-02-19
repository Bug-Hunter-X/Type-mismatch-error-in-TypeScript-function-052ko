function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access individual elements of the array
console.log(greeter(user[0])); // Greets Jane
console.log(greeter(user[1])); // Greets Doe

// Solution 2: Modify the function to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' and ');
}
console.log(greeterArray(user)); // Greets Jane and Doe

// Solution 3:  Type Guarding (More robust, checks before handling)
function isString(input: any): input is string {
    return typeof input === 'string';
}

function greetWithGuard(person: any): string {
    if (isString(person)) {
        return "Hello, " + person;
    } else if (Array.isArray(person) && person.every(isString)) {
        return "Hello, " + person.join(' and ');
    } else {
        return "Hello, unknown";
    }
}

console.log(greetWithGuard(user)); //Greets Jane and Doe
console.log(greetWithGuard("Bob")); //Greets Bob
console.log(greetWithGuard(123)); // Greets Unknown