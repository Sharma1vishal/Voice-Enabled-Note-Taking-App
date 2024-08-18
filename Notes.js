const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", function () {
    addNote();
});

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
};

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <button class="record">Record</button>
            <button class="stopRecord" disabled>Stop</button>
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    const textarea = note.querySelector("textarea");
    const recordBtn = note.querySelector(".record");
    const stopRecordBtn = note.querySelector(".stopRecord");

    let recognition;
    let isRecording = false;

    // Check if the browser supports the Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep recognizing speech continuously
        recognition.interimResults = true; // Show interim results

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

            textarea.value = text + transcript;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        recognition.onend = () => {
            isRecording = false;
            stopRecordBtn.disabled = true;
            recordBtn.disabled = false;
        };
    } else {
        recordBtn.disabled = true;
        stopRecordBtn.disabled = true;
        alert("Sorry, your browser doesn't support speech recognition.");
    }

    recordBtn.addEventListener("click", () => {
        if (recognition && !isRecording) {
            isRecording = true;
            text = textarea.value; // Keep the existing text in the textarea
            recognition.start();
            stopRecordBtn.disabled = false;
            recordBtn.disabled = true;
        }
    });

    stopRecordBtn.addEventListener("click", () => {
        if (recognition && isRecording) {
            recognition.stop();
        }
    });

    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        saveNotes();
    });

    note.querySelector(".save").addEventListener("click", function () {
        saveNotes();
    });

    textarea.addEventListener("focusout", function () {
        saveNotes();
    });

    main.appendChild(note);
    saveNotes();
};

(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes === null) {
        addNote();
    } else {
        lsNotes.forEach((lsNote) => {
            addNote(lsNote);
        });
    }
})();
