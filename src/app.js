const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
     //res.send('Hello Vamsi!');
     res.sendFile(path.join(_dirname, 'pages/index.html')); 
}); 

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running on https://localhost:${port}');
});                                                                                         
