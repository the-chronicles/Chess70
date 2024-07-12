import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Community from "./pages/Community";
import Puzzle from "./pages/Puzzle";
import Learn from "./pages/Learn";
import Watch from "./pages/Watch";
import Tools from "./pages/Tools";
import Donate from "./pages/Donate";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="play" element={<Play />} />
        <Route path="puzzles" element={<Puzzle />} />
        <Route path="learn" element={<Learn />} />
        <Route path="watch" element={<Watch />} />
        <Route path="community" element={<Community />} />
        <Route path="tools" element={<Tools />} />
        <Route path="donate" element={<Donate />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
