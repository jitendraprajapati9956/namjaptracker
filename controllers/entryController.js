exports.getEntries = (req, res) => {
  res.json({ message: "Get all entries" });
};

exports.createEntry = (req, res) => {
  res.json({ message: "Entry created" });
};

exports.deleteEntry = (req, res) => {
  res.json({ message: "Entry deleted" });
};

exports.updateEntry = (req, res) => {
  res.json({ message: "Entry updated" });
};