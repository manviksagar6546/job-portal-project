import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";

import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import ApplyJob from "./pages/ApplyJob";
import ViewApplicants from "./pages/ViewApplicants";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/add-job" element={<AddJob />} />

        <Route path="/apply/:jobId" element={<ApplyJob />} />

        <Route path="/applications/:jobId" element={<ViewApplicants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
