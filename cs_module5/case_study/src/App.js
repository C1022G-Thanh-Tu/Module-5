import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacilitiesList from "./component/facility/FacilitiesList";
import CustomerList from "./component/customer/CustomerList";
import Home from "./component/home/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ContractList from "./component/contract/ContractList";
import FacilitiesEditForm from "./component/facility/FacilitiesEditForm";
import FacilitiesAddForm from "./component/facility/FacilitiesAddForm";
import CustomerEditForm from "./component/customer/CustomerEditForm";
import CustomerAddForm from "./component/customer/CustomerAddForm";
import ContractAddForm from "./component/contract/ContractAddForm";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<FacilitiesList />} />
        <Route path="/facility-edit/:id" element={<FacilitiesEditForm />} />
        <Route path="/facility-add" element={<FacilitiesAddForm />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/customer-edit/:id" element={<CustomerEditForm />} />
        <Route path="/customer-add" element={<CustomerAddForm />} />
        <Route path="/contract" element={<ContractList />} />
        <Route path="/contract-add" element={<ContractAddForm />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
