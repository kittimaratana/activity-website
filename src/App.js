import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import MoodPage from "./pages/MoodPage/MoodPage";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} /> 
        <Route path="/:moodId" element={<MoodPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
