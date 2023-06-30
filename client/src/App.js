import React, { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import Assesment from "./components/Assesment";
import Migration from "./components/Migration";
import Testing from "./components/Testing";
import Layout from "./components/Layout";
import { Signup } from "./components/Signup";
import { SignupHome } from "./components/SignupHome";
import Alert from "./components/Alert";
import DialogBox from "./components/DialogBox";
import Dialog2 from "./components/Dialog2";
// import { About } from "./components/About";
// import NoteState from "./context/notes/NoteState";
// import { NoteStore } from "./components/NoteStore";
// import { Contact } from "./components/Contact";
// import { BlogStore } from "./components/Blogs/BlogStore";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/assest" element={<Assesment showAlert={showAlert} />} />
            <Route exact path="/migrat" element={<Migration showAlert={showAlert} />} />
            <Route exact path="/test" element={<Testing showAlert={showAlert} />} />
            <Route exact path="/layout" element={<Layout showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/signuphome" element={<SignupHome showAlert={showAlert} />} />
            <Route exact path="/dialogue" element={<DialogBox showAlert={showAlert} />} />
            <Route exact path="/dialogue2" element={<Dialog2 showAlert={showAlert} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
