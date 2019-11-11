const fs = require('fs')
const chalk = require('chalk')

const addNote = (title) => {
    const notes=loadnotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title ===title
    })
    if(duplicateNotes.length===0)
    {
        notes.push({
            title:title
        })
        saveNotes(notes)
    }else{console.log(chalk.red.inverse.bold('already exist'))}
}

const removeNote = (title) => {
    const notes=loadnotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title !==title
    })
         saveNotes(duplicateNotes)     
   
}

const listNote = () => {
    const notes=loadnotes()
    console.log(chalk.red.inverse.bold('List of Title'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
         
}

const saveNotes = (notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',datajson)
}

const loadnotes = () => {
    try{
        const databuffer = fs.readFileSync('Notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    }
    catch(e){return []}
}

module.exports={
    removeNote: removeNote,
    addNote:addNote,
    listNote:listNote,
    loadnotes: loadnotes
}