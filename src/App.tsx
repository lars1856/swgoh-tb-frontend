import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, CircularProgress } from "@mui/material";

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
const COMLINK_API_URL = process.env.REACT_APP_COMLINK_API_URL;

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BACKEND_API_URL!)
      .then((response) => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to load data");
        setLoading(false);
      });
    console.log(`${COMLINK_API_URL}/guild/AffwMH3fQlSKrr0HfHR2pA`);
    fetch(`${COMLINK_API_URL}/guild/AffwMH3fQlSKrr0HfHR2pA`)
      // .then((response) => response.json())
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        React TypeScript Frontend
      </Typography>
      {loading ? <CircularProgress /> : <Typography>{message}</Typography>}
    </Container>
  );
}

export default App;
