import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Homepage, DallasCowboysPage, DallasMavericksPage, TexasRangersPage, DallasStarsPage, DallasWingsPage, FcDallasPage } from "./components";

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/dallascowboys' element={<DallasCowboysPage navigate={navigate} />}></Route>
        <Route path='/dallasmavericks' element={<DallasMavericksPage navigate={navigate} />}></Route>
        <Route path='/texasrangers' element={<TexasRangersPage navigate={navigate} />}></Route>
        <Route path='/dallasstars' element={<DallasStarsPage navigate={navigate} />}></Route>
        <Route path='/dallaswings' element={<DallasWingsPage navigate={navigate} />}></Route>
        <Route path='/fcdallas' element={<FcDallasPage navigate={navigate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
