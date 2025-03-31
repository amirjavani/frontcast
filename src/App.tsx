// import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import ThemeProvider from "./Context/ThemeProvider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
