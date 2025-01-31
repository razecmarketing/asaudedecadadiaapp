export class Notebook {
    constructor() {
        this.notesKey = 'savedHealthNotes';
        this.initEventListeners();
        this.loadSavedNotes();
    }

    initEventListeners() {
        const saveNoteBtn = document.getElementById('save-note-btn');
        const clearNoteBtn = document.getElementById('clear-note-btn');
        const notebookTextarea = document.getElementById('notebook-textarea');

        saveNoteBtn.addEventListener('click', () => this.saveNote());
        clearNoteBtn.addEventListener('click', () => this.clearNote());
    }

    saveNote() {
        const notebookTextarea = document.getElementById('notebook-textarea');
        const noteText = notebookTextarea.value.trim();

        if (noteText) {
            const savedNotes = this.getSavedNotes();
            const newNote = {
                id: Date.now(),
                text: noteText,
                date: new Date().toLocaleString()
            };

            savedNotes.push(newNote);
            localStorage.setItem(this.notesKey, JSON.stringify(savedNotes));

            this.loadSavedNotes();
            notebookTextarea.value = '';
        }
    }

    clearNote() {
        document.getElementById('notebook-textarea').value = '';
    }

    getSavedNotes() {
        const notes = localStorage.getItem(this.notesKey);
        return notes ? JSON.parse(notes) : [];
    }

    loadSavedNotes() {
        const savedNotesList = document.getElementById('notes-history');
        const savedNotes = this.getSavedNotes();

        savedNotesList.innerHTML = savedNotes
            .map(note => `
                <li>
                    <span>${note.text} (${note.date})</span>
                    <button onclick="deleteNote(${note.id})">🗑️</button>
                </li>
            `)
            .join('');
    }

    deleteNote(id) {
        const savedNotes = this.getSavedNotes();
        const updatedNotes = savedNotes.filter(note => note.id !== id);
        localStorage.setItem(this.notesKey, JSON.stringify(updatedNotes));
        this.loadSavedNotes();
    }
}