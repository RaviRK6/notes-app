const chalk = require('chalk')
const fs = require('fs')
// const getNotes = () => 'your notes...'
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added'))
    } else {
        console.log(chalk.red.inverse('note title already taken'))
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)
    
    if (notes > notesTokeep) {
        console.log(chalk.green.inverse('remove title'))
        saveNotes(notesTokeep)
    } else {
        console.log(chalk.red.inverse('title not founded'))
    }
    
}
const ListNotes = () => {
    console.log(chalk.yellow.inverse('your notes'))
    const notes = loadNotes()
    // const listnote = notes.forEach((note) => {
    //     console.log('list Title:' , note.title)
    // })
    notes.forEach((note) => {
        console.log('list Title:' , note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const search = notes.find((note) => note.title === title)
    if (!search) {
        console.log(chalk.red.inverse('No notes founded'))
    } else {
        console.log(chalk.gray.inverse(search.title))
        console.log(search.body)
    }


}
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    ListNotes: ListNotes,
    readNote: readNote
}