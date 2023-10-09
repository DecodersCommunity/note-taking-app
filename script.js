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
                        <i class="uil uil-pen" id="edit" onclick="editNote(this)"></i>
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

    trash.addEventListener('click', function (e) {
        console.log(e);
    });

    // Function to close the popup.
    function closePopup() {
        const popupBox = document.querySelector('.popup-box');
        popupBox.classList.remove('show');
    }

    // Event listener for the close button.
    const closeButton = document.querySelector('.uil-times');
    closeButton.addEventListener('click', closePopup);

    // Define the removeNote and editNote functions.
   

    function editNote(element) {
        // Add your edit functionality here
    }
});

function removeNote(element) {
    const note = element.closest('li');
    if (note) {
        note.remove();
    }
}