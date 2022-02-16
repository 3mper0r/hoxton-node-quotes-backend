import express from 'express';
import cors from 'cors'

const express = require('express')
const app = express();
app.use(cors())
app.use(express.json())
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

const addQuoteForm = `<form action="">
<label htmlFor="name">Name:</label>
<input type="text" name="name" placeholder="Name" />
<label htmlFor="lastname">Last Name:</label>
<input type="text" name="lastname" placeholder="Last Name" />
<label htmlFor="quote">Quote:</label>
<textarea name="quote" id="" cols={20} rows={5}></textarea>
<label htmlFor="year">Year:</label>
<input type="number" name="year" placeholder="Year" />
<label htmlFor="bc">BC</label>
<input type="radio" name="bcac" />
<label htmlFor="ac">AC</label>
<input type="radio" name="bcac" />
<input id="submit" type="submit" onSubmit={(e) => e.preventDefault} />
</form>`

app.get('/quotes', (req, res) => {
    res.send(quotes)
})

app.get('/quoteoftheweek', (req, res) => {
    res.send(qouteOftheweek)
})

app.get('/add-quote', (req, res) => {

    res.send(addQuoteForm)
})

app.post('/quotes', (req, res) => {
    const newQuote = {
        id: Math.random(),
        author: req.body.author,
        quote: req.body.quote

    }
    quotes.push(newQuote)
    res.send(newQuote)
})

app.patch('/quotes/:id', (req, res) => {
    res.status(501).send({ error: 'not finished' })
})

app.delete('/dogs/:id', (req, res) => {
    res.status(501).send({ error: 'not finished' })
})


app.listen(port, () => console.log('server is running on port 3001')

)