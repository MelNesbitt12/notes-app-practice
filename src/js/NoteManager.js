import Note from './Note'

export default class NoteManager{
  constructor({ element, notes }){
    this.element = element
    this.notes = notes.map(note => new Note(note, this))

    this.onNewNote = () => {}
    this.onNoteChange = () => {}
    this.onNoteRemove = () => {}
    this.renderNotes()
  }

  renderNotes() {
    this.element.innerHTML = ''
    this.notes.forEach(note => this.renderNote(note.getElement()))
  }

  renderNote(noteElement) {
    this.element.appendChild(noteElement)
  }

  removeNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1)
    this.renderNotes()
  }

  addNote(note) {
    const noteObject = new Note(note, this)
    this.notes.push(noteObject)
    this.renderNotes()
    this.onNewNote(noteObject)
  }

  prependNote(note) {
    const noteObject = new Note(note, this)
    this.notes.unshift(noteObject)
    this.renderNotes()
    this.onNewNote(noteObject)
  }
}
