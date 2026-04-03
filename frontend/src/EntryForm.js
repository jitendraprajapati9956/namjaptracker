<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box
} from "@mui/material";

function EntryForm() {
  const [today, setToday] = useState("");
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!today || !total) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/entry/add", {
        today,
        total
      });

      alert("✅ Saved Successfully");

      setToday("");
      setTotal("");

    } catch (err) {
      alert(err.response?.data?.error || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom>
          Entry Form
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Today"
            type="number"
            fullWidth
            margin="normal"
            value={today}
            onChange={(e) => setToday(e.target.value)}
          />

          <TextField
            label="Total"
            type="number"
            fullWidth
            margin="normal"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}
          >
            {loading ? "Saving..." : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

=======
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box
} from "@mui/material";

function EntryForm() {
  const [today, setToday] = useState("");
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!today || !total) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/entry/add", {
        today,
        total
      });

      alert("✅ Saved Successfully");

      setToday("");
      setTotal("");

    } catch (err) {
      alert(err.response?.data?.error || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom>
          Entry Form
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Today"
            type="number"
            fullWidth
            margin="normal"
            value={today}
            onChange={(e) => setToday(e.target.value)}
          />

          <TextField
            label="Total"
            type="number"
            fullWidth
            margin="normal"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}
          >
            {loading ? "Saving..." : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

>>>>>>> 4d15e83 (Vercel-ready serverless Express setup)
export default EntryForm;