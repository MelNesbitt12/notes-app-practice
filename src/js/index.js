// Global App Controller
import '../style.scss';
import NoteManager from './NoteManager'

const noteManager = new NoteManager({
  element: document.querySelector('.tc-notes'),
  notes: [
    {
      title:'This is a demo note',
      body: 'Lorem ipsum lorem...'
    },
    {
      title:'This is a demo note',
      body: 'Lorem ipsum lorem...'
    },
    {
      title:'This is a demo note',
      body: 'Lorem ipsum lorem...'
    },
  ]
})

noteManager.onNewNote = (noteObject) => {
  console.log(noteObject)
}

noteManager.onNoteChange = (noteObject) => {
  console.log(noteObject)
}

noteManager.onNoteRemove = () => {

}

const newNoteBtn = document.querySelector('.new-note-btn')
newNoteBtn.onclick = () => {
  noteManager.prependNote({
    title:'',
    body: ''
  })
}
