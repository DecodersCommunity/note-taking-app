document.addEventListener("DOMContentLoaded", function () {
    const addBox = document.querySelector('.add-box');
    const titleEl = document.querySelector('input');
    const descriptionEl = document.querySelector('textarea');
    const popupBox = document.querySelector('.popup-box');
    const noteList = document.querySelector('.list-container');
    const form = document.querySelector("#form");

    form.addEventListener("submit", function (e) {
        e.preventDefault()
    })
    // Function to add a new note.
    function addNote() {
        const title = titleEl.value.trim();
        const description = descriptionEl.value.trim();

        if (title === "") {
            alert("Please write something");
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
                        <i class="uil uil-square-full" id="check" onclick="tickNote(this)"></i>
                        <i class="uil uil-trash-alt" id="delete" onclick="removeNote(this)"></i>
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

// Function to close the popup.
function closePopup() {
    const popupBox = document.querySelector('.popup-box');
    popupBox.classList.remove('show');
}

// Event listener for the close button.
const closeButton = document.querySelector('.uil-times');
closeButton.addEventListener('click', closePopup);


function removeNote(element) {
    const note = element.closest('li');
    if (note) {
        note.remove();
    }
}

function tickNote(element) {
    element.classList.toggle("uil-square-full");
    element.classList.toggle("uil-check-square");
}