export default class Note{
  constructor({ title, body}, noteManager){
    this.title = title
    this.body = body
    this.element = null
    this.noteManager = noteManager
  }

  getElement() {
    const template = this.getTemplate()
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = template.replace('{{title}}', this.title)
      .replace('{{body}}', this.body)

    this.element = tempDiv.children[0]

    this.attachEventListeners()

    return this.element
  }

  getTemplate() {
    return `
    <div class="tc-note">
      <div class="tc-note-header">
        <span class="tc-note-close">
          <i class="fas fa-times-circle"></i>
        </span>
      </div>
      <div class="tc-note-title" contenteditable>
        {{title}}
      </div>
      <div class="tc-note-body" contenteditable>
        {{body}}
      </div>
    </div>
    `
  }

  attachEventListeners(){
    const buttonClose = this.element.querySelector('.tc-note-close')
    buttonClose.onclick = () => {
      this.noteManager.removeNote(this)
    }
    const title = this.element.querySelector('.tc-note-title')
    title.oninput = (event) => {
      this.title = event.target.innerText
      this.noteManager.onNoteChange(this)
    }
    const body = this.element.querySelector('.tc-note-body')
    body.oninput = (event) => {
      this.body = event.target.innerText
      this.noteManager.onNoteChange(this)
    }
  }

}
