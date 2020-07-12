const express = require('express')
const router = express.Router()
const config = require('config')
const { check, validationResult } = require('express-validator')

const Contact = require('../../models/Contact')

// @route    POST api/contact
// @desc     Contact form submitted
// @access   Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    res.send('Your response is recorded!')

    const { name, email, message } = req.body

    try {

        contact = new Contact({
            name,
            email,
            message
        })

        await contact.save()

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
})

module.exports = router