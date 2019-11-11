const fs = require('fs')

const removeNote=function(title){
    const notes=loadnotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title !==title
    })
debugger
     if(duplicateNotes===0){
        notes.push({
            title: title
        })
       
         saveNotes(duplicateNotes)
       
   }
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
    loadnotes: loadnotes
}