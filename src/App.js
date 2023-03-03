import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <h1 className="vaibhav">Ayush Industries</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/profile" element={<Table />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/forgot_password" element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
