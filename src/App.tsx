import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, CircularProgress } from "@mui/material";

const API_URL = "https://your-backend-url.onrender.com"; // Replace with your backend URL

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to load data");
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>React TypeScript Frontend</Typography>
      {loading ? <CircularProgress /> : <Typography>{message}</Typography>}
    </Container>
  );
}

export default App;
