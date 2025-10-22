sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks 'Submit'

    browser->>browser: JavaScript captures the note input
    browser->>browser: JavaScript immediately updates the page<br>to show the new note (no reload)

    Note right of browser: The note appears instantly on the screen

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { "message": "note created" }
    deactivate server

    Note right of browser: The server saves the new note data to the database<br>and sends a JSON confirmation

    browser->>browser: JavaScript may re-fetch or update the notes list
    Note right of browser: Page stays the same — only the notes list updates dynamically
