import express from 'express';

const app = express();
// app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is Ready!');
});

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes =     [  
        {"id":"Ram", "joke":"Ram@gmail.com", "title": "Aakash Mahajan"},  
        {"id":"Bob", "joke":"bob32@gmail.com"}  
    ]  
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Serving at https://localhost:${port}`);
});

