const person = {
    firstName: "Sushil",
    lastName: "Chaubey",
    age: 20,

}

function AgeInDays(personObject, callback) {
    const fullname = `${personObject.firstName} ${personObject.lastName}`
    const ageIndays = personObject.age * 365;
    callback(fullname, ageIndays)
}

function callback(fullname, ageIndays) {
    console.log(`The person's full name is ${fullname} and their age is days is ${ageIndays}`);
}

AgeInDays(person, callback)