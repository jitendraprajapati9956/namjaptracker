const Entry = require("../models/Entry");

exports.createEntry = async (req, res) => {
  try {
    const { today, total } = req.body;

    const now = new Date();

    // ✅ Full Date
    const fullDate = now.toISOString().split("T")[0]; // YYYY-MM-DD

    // ✅ Day number (1–7)
    let dayNumber = now.getDay();
    dayNumber = dayNumber === 0 ? 7 : dayNumber;

    const sum = Number(today) + Number(total);

    const entry = new Entry({
      date: fullDate,   // ✅ store full date
      day: dayNumber,
      today,
      total,
      sum
    });

    await entry.save();

    res.json({ success: true, data: entry });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteEntry = async (req, res) => {
  try {
    await Entry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateEntry = async (req, res) => {
  try {
    const { today, total } = req.body;

    const sum = Number(today) + Number(total);

    const updated = await Entry.findByIdAndUpdate(
      req.params.id,
      { today, total, sum },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};