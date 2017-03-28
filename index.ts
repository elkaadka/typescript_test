interface Person {
    firstName: string;
    lastName: string;
}

function sayHello(person: Person)
{
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Adil", lastName: "El Kanabi" };
sayHello(user);
