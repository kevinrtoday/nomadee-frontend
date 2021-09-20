import { BrowserRouter, Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Events />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/editEvent/:id">
              <Edit />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
