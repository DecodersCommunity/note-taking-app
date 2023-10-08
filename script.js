document.addEventListener("DOMContentLoaded", function () {
    const addBox = document.querySelector('.add-box');
    const titleEl = document.querySelector('input');
    const descriptionEl = document.querySelector('textarea');
    const popupBox = document.querySelector('.popup-box');
    const noteList = document.querySelector('.wrapper');

    // Function to add a new note to both the page and local storage
    function addNoteToLocalStorage(title, description) {
        const notes = getNotesFromLocalStorage();
        const newNote = {
            title: title,
            description: description,
            date: new Date().toLocaleDateString()
        };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Function to get notes from local storage
    function getNotesFromLocalStorage() {
        const notesJSON = localStorage.getItem('notes');
        return notesJSON ? JSON.parse(notesJSON) : [];
    }

    // Function to display notes from local storage on the page
    function displayNotesFromLocalStorage() {
        const notes = getNotesFromLocalStorage();
        notes.forEach((note, index) => {
            const li = createNoteElement(note, index);
            noteList.appendChild(li);
        });
    }

    // Function to create a note element
    function createNoteElement(note, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="note">
                <p>${note.title}</p>
                <span>${note.description}</span>
            </div>
            <div class="bottom-content">
                <span>Date: ${note.date}</span>
                <div class="settings">
                    <i class="uil uil-pen" onclick="editNote(this)"></i>
                    <i class="uil uil-trash-alt" onclick="removeNote(${index})"></i>
                </div>
            </div>
        `;
        return li;
    }

    // Function to remove a note from both the page and local storage
    function removeNote(index) {
        const notes = getNotesFromLocalStorage();
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));

        // Remove the note from the page
        const noteElements = document.querySelectorAll('.wrapper li');
        noteElements[index].remove();
    }

    // Here is function to add a new note.
    function addNote(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const title = titleEl.value.trim();
        const description = descriptionEl.value.trim();

        if (title !== "") {
            // Add the note to the page
            const note = createNoteElement({ title, description, date: new Date().toLocaleDateString() });
            noteList.appendChild(note);

            // Add the note to local storage
            addNoteToLocalStorage(title, description);

            titleEl.value = "";
            descriptionEl.value = "";
            popupBox.classList.remove('show');
        }
    }

    // Event listeners
    addBox.addEventListener('click', () => {
        titleEl.focus();
        popupBox.classList.add('show');
    });

    const addButton = document.querySelector('.content form button');
    addButton.addEventListener('click', addNote);

    // Display notes from local storage when the page loads
    displayNotesFromLocalStorage();
});
