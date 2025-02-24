import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, CircularProgress } from "@mui/material";
import TbOverview from "./components/TbOverview";

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL!;

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [ops, setOps] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [opsLoading, setOpsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_API_URL}/ops`)
      .then((response) => {
        setOps(response.data);
        setOpsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setOps("Failed to load data");
        setOpsLoading(false);
      });
    axios
      .get(BACKEND_API_URL)
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
      <Typography variant="h4" gutterBottom>
        React TypeScript Frontend
      </Typography>
      <TbOverview />
      {loading ? <CircularProgress /> : <Typography>{message}</Typography>}
      {opsLoading ? (
        <CircularProgress />
      ) : (
        <Typography>{JSON.stringify(ops, null, 2)}</Typography>
      )}
    </Container>
  );
}

export default App;
