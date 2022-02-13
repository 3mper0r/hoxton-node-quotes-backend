import express from 'express';
import cors from 'cors'

const express = require('express')
const app = express();
app.use(cors())
const port = 3001


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
]

const qouteOftheweek: Quote[] = [
    {
        quote: "What taste sweeter? Apples or Boobs",
        author: "Isac Newton"
    }
]

app.get('/quotes', (req, res) => {
    res.send(quotes)
})

app.get('/quoteoftheweek', (req, res) => {
    res.send(qouteOftheweek)
})

app.listen(port, () => console.log('server is running on port 3001')

)