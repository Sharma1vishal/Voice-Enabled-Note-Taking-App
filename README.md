Voice-Enabled Note-Taking App
This is a simple web-based note-taking application that allows users to manually type notes or use voice recognition to convert speech into text. The notes can be saved to and loaded from the browser's local storage.

Features
Add New Notes: Users can create a new note by clicking the "Add Note" button.
Manual Note-Taking: Users can type directly into the textarea of each note.
Voice-to-Text Conversion: Users can click the "Record" button to start recording their voice. The recorded speech will be converted into text and added to the note.
Save Notes: Notes are automatically saved to the browser's local storage, ensuring they persist even if the page is closed or refreshed.
Delete Notes: Users can delete individual notes, which also removes them from local storage.
Getting Started
Prerequisites
A modern web browser that supports the Web Speech API (e.g., Google Chrome).
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/voice-enabled-note-taking-app.git
Open the Application:

Navigate to the project folder and open the index.html file in your web browser.
Usage
Add a New Note:

Click the "Add Note" button to create a new note.
Type in a Note:

Click inside the textarea of the note and start typing.
Record Voice to Text:

Click the "Record" button to start recording your voice. Speak into your microphone, and the recognized text will appear in the note.
Click the "Stop" button to stop the recording.
Save Notes:

Notes are saved automatically whenever you stop typing or stop recording.
Delete a Note:

Click the trash icon on a note to delete it.
How It Works
Web Speech API: The application uses the Web Speech API to convert speech into text.
Local Storage: Notes are saved to the browser's local storage as a JSON array. When the page loads, it checks if there are any saved notes and loads them automatically.
Browser Support
The application relies on the Web Speech API, which is supported in most modern browsers, but may not work in older browsers or all mobile browsers.

Future Enhancements
Add the ability to edit and format text (e.g., bold, italic).
Implement a search functionality to find notes quickly.
Allow users to export and import notes as a file.
Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

