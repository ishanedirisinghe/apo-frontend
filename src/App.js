import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountDetails from "./Pages/AccountDetails";
import TermsAndConditions from "./Pages/TermsAndConditions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<TermsAndConditions />} />
          <Route path={"/account-details"} element={<AccountDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
