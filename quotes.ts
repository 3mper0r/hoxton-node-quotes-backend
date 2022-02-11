import express from 'express';
import cors from 'cors'

const express = require('express')
const app = express();
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send(`<h1>25 years research of quotes - Edgar Putan</h1>`)
})

app.listen(port, () => console.log('test')

)
app.get('/quotes', (req, res) => {
    res.send(quotes)
})

type Quote = {
    quote: string;
    author: string;
};

const quotes: Quote[] = [
    {
        quote: "Make memes, not war!",
        author: "Mark Twain"
    },
    {
        quote: "Stop making quotes I never said",
        author: "Albert Einstein"
    },
    {
        quote: "What taste sweeter? Apples or Boobs",
        author: "Isac Newton"
    }
]