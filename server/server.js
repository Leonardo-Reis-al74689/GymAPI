// app.js
const express = require('express');
const Database = require("../src/database/db.js");

const app = express();

const db = new Database();

db.initConnection().then(() => {
    app.listen(4000, () => {
        console.log('✨ Server started on port 4000');
    });
});
