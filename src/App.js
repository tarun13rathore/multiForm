import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import FinalPage from "./components/FinalPage";
import { Provider } from "react-redux";
import store from "./services/store"; // Import your Redux store
const theme = createTheme();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Provider store={store}>
              <div className="App">
                <FinalPage />
              </div>
            </Provider>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
