import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacilitiesList from "./component/facility/FacilitiesList";
import CustomerList from "./component/customer/CustomerList";
import Home from "./component/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<FacilitiesList />} />
        <Route path="/customer" element={<CustomerList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
