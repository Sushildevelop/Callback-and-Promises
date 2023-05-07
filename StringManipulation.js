function manipulationString(inputstring, callback) {
    const manipulate = inputstring.toUpperCase();

    callback(manipulate);
}

function callback(manipulatedString) {
    console.log(`The manipulated String is : ${manipulatedString}`);


}

manipulationString("hello, world!", callback);