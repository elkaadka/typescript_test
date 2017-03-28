interface Person {
    firstName: string;
    lastName: string;
}

function sayHello(person: Person)
{
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Adil", lastName: "El Kanabi" };
// if the line below is uncommented and the above one is, it will generate error but the js file is still created
//var user = {lastname: 'Kanabi'}
sayHello(user);
