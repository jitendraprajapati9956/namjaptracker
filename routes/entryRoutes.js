<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const {
  createEntry,
  getEntries,
  deleteEntry,
  updateEntry
} = require("../controllers/entryController");

// ✅ Routes
router.get("/all", getEntries);
router.post("/add", createEntry);
router.delete("/:id", deleteEntry);
router.put("/:id", updateEntry);

=======
const express = require("express");
const router = express.Router();

const {
  createEntry,
  getEntries,
  deleteEntry,
  updateEntry
} = require("../controllers/entryController");

// ✅ Routes
router.get("/all", getEntries);
router.post("/add", createEntry);
router.delete("/:id", deleteEntry);
router.put("/:id", updateEntry);

>>>>>>> 4d15e83 (Vercel-ready serverless Express setup)
module.exports = router;