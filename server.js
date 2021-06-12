const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http');
const path = require('path');
const static = require('serve-static');

app.use(static(__dirname));

app.listen(PORT, () => {
    console.log(PORT);
    
});