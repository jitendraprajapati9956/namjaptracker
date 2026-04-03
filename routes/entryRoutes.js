const express = require("express");
const router = express.Router();

const {
  createEntry,
  getEntries,
  deleteEntry,
  updateEntry
} = require("../controllers/entryController");

router.get("/all", getEntries);
router.post("/add", createEntry);
router.delete("/:id", deleteEntry);
router.put("/:id", updateEntry);

module.exports = router;