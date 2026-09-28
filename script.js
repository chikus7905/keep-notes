// ===============================
// DOM ELEMENTS
// ===============================

const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");


// ===============================
// NOTES ARRAY
// ===============================

let notes = [];


// ===============================
// ADD NOTE
// ===============================

addNoteBtn.addEventListener("click", addNote);

function addNote() {

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // Don't create an empty note
    if (title === "" && content === "") {
        alert("Please write something in your note.");
        return;
    }

    // Create note object
    const note = {
        id: Date.now(),
        title: title || "Untitled",
        content: content,
        color: "yellow",
        pinned: false
    };

    // Add note to array
    notes.push(note);

    // Display notes
    renderNotes();

    // Clear inputs
    titleInput.value = "";
    contentInput.value = "";
}


// ===============================
// DISPLAY NOTES
// ===============================

function renderNotes() {

    // Clear old notes
    notesContainer.innerHTML = "";

    // Create a card for every note
    notes.forEach(function(note) {

        const noteCard = document.createElement("div");

        noteCard.classList.add("note-card");

        noteCard.innerHTML = `
            <h2>${note.title}</h2>

            <p>${note.content}</p>

            <div class="note-footer">
                <span>📌</span>
                <span>🗑️</span>
            </div>
        `;

        notesContainer.appendChild(noteCard);
    });
}
