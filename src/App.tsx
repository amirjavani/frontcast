// import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import ThemeProvider from "./Context/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
