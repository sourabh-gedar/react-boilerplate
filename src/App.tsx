import { Typography, Box } from "@mui/material";
import RouterManager from './routes/RouterManager'

function App() {
  return (
    <>
      <Box m={5}>
        <Typography variant="heading1" fontWeight="500">
          App is running in vite with rtk and mui setup.
        </Typography>
        <RouterManager/>
      </Box>
    </>
  );
}

export default App;
