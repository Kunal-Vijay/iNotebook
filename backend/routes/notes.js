const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchusers");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1 : Fetch notes using : GET "api/notes/fetchallnotes" . Login required
router.get('/fetchallnotes', fetchuser,

  async (req, res) => {
    try {
      const notes = await Notes.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

// ROUTE 2 : Add new notes using : POST "api/notes/addnotes". Login required
router.post('/addnotes', fetchuser,
  [
    body("title", "Title must contain minimum 3 characters").isLength({ min: 3 }),
    body("description", "Description must contain minimum 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title, description, tag, user: req.user.id
      })
      const savedNote = await note.save();
      res.json(savedNote);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;