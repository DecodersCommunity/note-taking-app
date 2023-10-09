document.addEventListener("DOMContentLoaded", function () {
    const addBox = document.querySelector('.add-box');
    const titleEl = document.querySelector('input');
    const descriptionEl = document.querySelector('textarea');
    const popupBox = document.querySelector('.popup-box');
    const noteList = document.querySelector('.list-container');

    // Here is function to add a new note.
    function addNote() {
        const title = titleEl.value.trim();
        const description = descriptionEl.value.trim();

        if (title === "") {
            alert("please write something");
            return;
        }
        if (title !== "") {
            const note = document.createElement('li');
            note.innerHTML = `
                        <div class="note">
                            <p>${title}</p>
                            <span>${description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>Date: ${new Date().toLocaleDateString()}</span>
                            <div class="settings">
                                <i class="uil uil-pen" id="edit" onclick="editNote(this)"></i>
                                <i class="uil uil-trash-alt" id="delete" onclick="removeNote(this)"></i>
                            </div>
                        </div>
                    `;
            document.addEventListener("DOMContentLoaded", function () {
                const addBox = document.querySelector('.add-box');
                const titleEl = document.querySelector('input');
                const descriptionEl = document.querySelector('textarea');
                const popupBox = document.querySelector('.popup-box');
                const noteList = document.querySelector('.list-container');

                // Here is function to add a new note.
                function addNote() {
                    const title = titleEl.value.trim();
                    const description = descriptionEl.value.trim();

                    if (title === "") {
                        alert("please write something");
                    } else { }
                    if (title !== "") {
                        const note = document.createElement('li');
                        note.innerHTML = `
                        <div class="note">
                            <p>${title}</p>
                            <span>${description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>Date: ${new Date().toLocaleDateString()}</span>
                            <div class="settings">
                                <i class="uil uil-pen" id="edit" onclick="editNote(this)"></i>
                                <i class="uil uil-trash-alt" id="delete" onclick="removeNote(this)"></i>
                            </div>
                        </div>
                    `;

                        noteList.appendChild(note);
                        titleEl.value = "";
                        descriptionEl.value = "";
                        popupBox.classList.remove('show');
                        saveNote()
                    }
                }

                // Event listeners
                addBox.addEventListener('click', () => {
                    titleEl.focus();
                    popupBox.classList.add('show');
                });

                const addButton = document.querySelector('.content form button');
                addButton.addEventListener('click', addNote);
            });

            // Function to close the popup .
            function closePopup() {
                const popupBox = document.querySelector('.popup-box');
                popupBox.classList.remove('show');
            }

            // Event listener for the close button .
            const closeButton = document.querySelector('.uil-times');
            closeButton.addEventListener('click', closePopup);

            //to remove notes
            function removeNote(iconElement) {
                const noteElement = iconElement.closest('li');

                if (noteElement) {
                    noteElement.remove();
                    saveNote();
                }
            }

            //to save notes

            function saveNote() {
                localStorage.setItem("data", noteList.innerHTML);
            }

            function showNote() {
                const savedData = localStorage.getItem("data");

                if (savedData) {
                    noteList.innerHTML = savedData;
                }
            }

            noteList.appendChild(note);
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
});

// Function to close the popup .
function closePopup() {
    const popupBox = document.querySelector('.popup-box');
    popupBox.classList.remove('show');
}

// Event listener for the close button .
const closeButton = document.querySelector('.uil-times');
closeButton.addEventListener('click', closePopup);

//to remove notes
function removeNote(iconElement) {
    const noteElement = iconElement.closest('li');

    if (noteElement) {
        noteElement.remove();
    }
}
