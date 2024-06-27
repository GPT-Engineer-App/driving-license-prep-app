import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
