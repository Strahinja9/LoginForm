import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./Components/Login"
import MainPage from "./Components/MainPage"
function App() {

  return (
    <>
     <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/mainpage" element={<MainPage/>}></Route>
        </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
