import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
