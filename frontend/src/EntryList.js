import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import { Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";
function EntryList() {
  const [data, setData] = useState([]);
const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    today: "",
    total: ""
  });
  const pieData = [
  {
    name: "Today Total",
    value: data.reduce((acc, item) => acc + item.today, 0)
  },
  {
    name: "Overall Total",
    value: data.reduce((acc, item) => acc + item.total, 0)
  }
];
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/entry/${id}`);

    // refresh data
    fetchData();

  } catch (err) {
    console.error(err);
  }
};

  const chartData = data.map((item) => ({
  name: `Day ${item.date}`,
  today: item.today,
  total: item.total
}));
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/entry/all");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <Container maxWidth="lg" sx={{ mt: 4 }}>
 <Grid container spacing={2}>

  {/* Cards */}
  <Grid item xs={12} md={4}>
    <Paper sx={{ p: 2 }}>
      <Typography>Total Entries</Typography>
      <Typography variant="h5">{data.length}</Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} md={4}>
    <Paper sx={{ p: 2 }}>
      <Typography>Total Sum</Typography>
      <Typography variant="h5">
        {data.reduce((a, b) => a + b.sum, 0)}
      </Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} md={4}>
    <Paper sx={{ p: 2 }}>
      <Typography>Today</Typography>
      <Typography variant="h5">
        {data[0]?.today || 0}
      </Typography>
    </Paper>
  </Grid>

  {/* Line Chart */}
  <Grid item xs={12} md={6}>
    <Paper sx={{ p: 2 }}>
      <Typography>Line Chart</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={[...data].reverse()}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="today" stroke="#4CAF50" />
          <Line dataKey="total" stroke="#2196F3" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>

  {/* Bar Chart */}
  <Grid item xs={12} md={6}>
    <Paper sx={{ p: 2 }}>
      <Typography>Bar Chart</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="today" fill="#4CAF50" />
          <Bar dataKey="total" fill="#2196F3" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>

  {/* Pie Chart */}
  <Grid item xs={12} md={6}>
    <Paper sx={{ p: 2 }}>
      <Typography>Pie Chart</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={pieData} dataKey="value">
            <Cell fill="#FF9800" />
            <Cell fill="#9C27B0" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>

</Grid>
  </Container>
);
}


export default EntryList;