const yargs=require('yargs')
const notes =require('./Notes.js')
//console.log(yargs.argv)

yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true, 
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title)
        console.log('Add New notes'+argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list note',
    handler: function(argv){
        notes.listNote()
        console.log('Add New notes')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true, 
            type:'string'
        }
    },
    
    handler: function(argv){
        notes.removeNote(argv.title)
        console.log('Remove a notes')
    }
})
yargs.parse()