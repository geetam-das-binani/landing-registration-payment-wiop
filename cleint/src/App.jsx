import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/register-page" element={<RegistrationPage />} />

          <Route path="/payment-page" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster toastOptions={{ duration: 4000 }} />
    </>
  );
};

export default App;
