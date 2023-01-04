import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Account } from "./components/Account";
import { Sigin } from "./components/Sigin";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthCintext";


export default function App() {
  return (
    <div>
      <NavBar />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Sigin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}