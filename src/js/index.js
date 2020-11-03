// Global App Controller
import '../style.scss';
import NoteManager from './NoteManager'

const noteManager = new NoteManager({
  element: document.querySelector('.tc-notes'),
  notes: [
    {
      title:'Add Title Here...',
      body: 'Add Content Here...'
    },
    {
      title:'Add Title Here...',
      body: 'Add Content Here...'
    },
    {
      title:'Add Title Here...',
      body: 'Add Content Here...'
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
