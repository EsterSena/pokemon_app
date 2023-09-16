import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Pokemon from "./pages/Pokemon";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;