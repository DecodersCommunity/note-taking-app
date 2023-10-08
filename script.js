// add your javascript code here!!
// THIS IS FOR ISSUE #1
// I have given some logic for example
const addBox = document.querySelector('.add-box'), titleEl = document.querySelector('input'), popupBox = document.querySelector('.popup-box');
addBox.addEventListener('click', () => {
    titleEl.focus();
    popupBox.classList.add('show')
});
// script for fixingpop-up box issue
document.addEventListener("DOMContentLoaded", function () {
    const addBox = document.querySelector('.add-box');
    const titleEl = document.querySelector('input');
    const descriptionEl = document.querySelector('textarea');
    const popupBox = document.querySelector('.popup-box');
    const noteList = document.querySelector('.wrapper');

    // Here is function to add a new note.
    function addNote() {
        const title = titleEl.value.trim();
        const description = descriptionEl.value.trim();

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
                                <i class="uil uil-pen" onclick="editNote(this)"></i>
                                <i class="uil uil-trash-alt" onclick="removeNote(this)"></i>
                            </div>
                        </div>
                    `;

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