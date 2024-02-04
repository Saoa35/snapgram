import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
