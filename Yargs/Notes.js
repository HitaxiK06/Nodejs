const fs = require('fs')

const addNote=function(title){
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
    }
         
}

const removeNote=function(title){
    const notes=loadnotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title !==title
    })
         saveNotes(duplicateNotes)
      
   
}

const saveNotes = function(notes){
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',datajson)
}

const loadnotes = function(){
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
    loadnotes: loadnotes
}