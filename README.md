
Features

Calculator: A cool-looking calculator.
Location: A tool to find your coordinates.
Tap Music: A music creation tool by clicking/tapping.
Tabular Data: A chart that reads data from a CSV file using Chart.js.
Contact Form: Users can submit their email, reason for contacting, and a message.

The data is sent to the server and stored in a NeDB database.

Message Retrieval: The server can retrieve stored messages and display them on the frontend.
Responsive Design: The website uses the Skeleton CSS framework for a clean and responsive layout.



Instruction how to run it locally:

1. Download and Install Node.js 
2. npm pacakages are installed
3. Open the project folder and run server.js using command ```npm start```
4. Now, open your browser and enter: localhost:1000

Directory:
    - node_modules
    - Public
        - Calulator_JS
        - Location
        - Tabular Data
        - Tap-Music_JS
        client.js
        index.html
        questions.html
        style.css
    messageData.db
    server.js
    

USED PACKAGES:

```"dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "nedb": "^1.8.0"
}```

Skeleton CSS: For providing a lightweight and responsive CSS framework.
NeDB: For offering a simple and efficient database solution.
Express.js: For making backend development with Node.js seamless.