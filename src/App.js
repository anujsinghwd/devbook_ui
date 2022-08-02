import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import withRoot from "./modules/withRoot";

// import Navbar from "./components/layout/Navbar";

// import Appbar from "./components/layout/Appbar";

// import Landing from "./components/layout/Landing";
import AppAppbar from "./modules/views/AppAppbar";
import AppFooter from "./modules/views/AppFooter";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

import "./App.css";

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <div> */}
          <AppAppbar />
          <Routes>
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/register" element={<SignUp />} />
          </Routes>
          <AppFooter />
        {/* </div> */}
      </BrowserRouter>
    </Provider>
  );
}

export default withRoot(App);
