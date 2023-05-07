function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}`
        resolve(greeting)
    })
}

greet("Sushil").then((message) => console.log(message));