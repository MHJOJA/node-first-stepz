const chalk = require('chalk')
const greet = require('./greet')


const styledMessage = chalk.bgGreen.black(greet('xola'))

console.log(styledMessage)