const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
// console.log(notes.getNotes())
// console.log(process.argv)
// debugger
yargs.version('1.1.1')

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder:{
        title:{
            describe: 'title note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body in note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder:{
        title:{
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list note',
    handler(argv) {
        notes.ListNotes(argv.title)
    } 

})
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe: 'read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(yargs.argv)



// const command = process.argv[2]

// if(command === 'add') {
//     console.log('add notes')
// } else if(command === 'remove') {
//     console.log('remove notes')
// }




// const print = load()
// console.log(print)
// console.log(chalk.blue.inverse.bold('Suceess'))
// console.log(process.argv[2])

// console.log(validator.isEmail('ravi@gmail.com'))
// console.log(validator.isURL('https://mead.io'))
// const add = require('./utils.js')

// const sum = add(4,-2)
// console.log(sum)