const Note = require('../models/noteModel')
const mongoose = require('mongoose')

const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({ createdAt: -1 })
    res.status(200).json(notes)
}

const getNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404)
    }
    const note = await Note.findById(id)
    if (!note) {
        return res.status(404)
    }
    return res.status(200).json(note)
}

const createNote = async (req, res) => {
    const { title, description } = req.body
    try {
        const note = await Note.create({ title, description })
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404)
    }
    const note = await Note.findOneAndDelete({ _id: id })
    if (!note) {
        return res.status(404)
    }
    return res.status(200).json(note)
}

const updateNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404)
    }
    const note = await Note.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!note) {
        return res.status(404)
    }
    return res.status(200).json(note)
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    deleteNote,
    updateNote
}