const express = require('express')
const Contact = require('../models/contact')
const contactRouter = express.Router()

//Post New Contact
contactRouter.post('/', async (req, res, next) => {
    try {
        const newContact = new Contact(req.body)
        const savedContact = await newContact.save()
        return res.status(201).send(savedContact)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = contactRouter