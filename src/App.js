import "./App.css";
import { AuthContextProvider } from "./context/AuthAndAccountContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BANK_URL, REGISTER_URL, UPLOADDOCS_URL } from "./constants/rout_urls";
import Bank from "./layout/Bank";
import Login from "./pages/Login";
import UploadDocs from "./pages/UploadDocs";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route
              //layout for main bank services
              path={`${BANK_URL}/*`}
              element={<Bank />}
            />
            <Route path={UPLOADDOCS_URL} element={<UploadDocs />} />
            <Route path={REGISTER_URL} element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
