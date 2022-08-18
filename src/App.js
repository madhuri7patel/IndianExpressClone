import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import MainEntertainment from "./pages/Entertainment/MainEntertainment";
import Cities from "./pages/Cities/Cities";
import Sport from "./pages/Sport/Sport";
import Education from "./pages/Education/Education";
import DetailedNews from "./pages/DetailedNews/DetailedNews";
import Login from "./components/Login/Login";
import NewPage from "./pages/Cities/Advertisement/NewPage";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Entertainment" element={<MainEntertainment />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/Sport" element={<Sport />}></Route>
        <Route path="/Details" element={<DetailedNews />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cities/NewPage" element={<NewPage />}></Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
