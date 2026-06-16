import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import AddJob from "./pages/AddJob/AddJob";
import Applications from "./pages/Applications/Applications";
import JobDetails from "./pages/JobDetails/JobDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ApplyJob from "./pages/ApplyJob/ApplyJob";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          {/* <Route path="/applications" element={<Applications />} /> */}
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <Applications />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />

      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </BrowserRouter>
  );
}

export default App;
