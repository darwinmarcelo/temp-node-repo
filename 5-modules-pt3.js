// `` = template literals
// &{} = you can add JS expressions inside template literal using this

function sayHi(name) {
    console.log(`hello there ${name}`);
}

module.exports = sayHi // this will allow the function to be exported